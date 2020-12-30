package provider;

import client.Character.MapleCharacter;
import connections.Database.MYSQL;
import connections.Packets.MainPacketCreator;
import constants.GameConstants;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Date;
import java.util.logging.Level;
import java.util.logging.Logger;
import launcher.Utility.WorldBroadcasting;
import tools.CurrentTime;
import tools.Timer.WorldTimer;

/**
 *
 * @author SEUNGHYEON
 */
public class Named {

    private static URL page;
    public static int nextTime = -1;
    public static String nextDate = "-";
    public static String namedTime = "-�� --��";

    public static void main(String[] args) throws IOException {
        try {
            PreparedStatement ps;
            Connection con = MYSQL.getConnection();
            ps = con.prepareStatement("SELECT * FROM named");
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                String day = rs.getString("date").split("-")[0];
                if (!day.equals(CurrentTime.getAllCurrentTime1(System.currentTimeMillis()))) {
                    ps = con.prepareStatement("DELETE FROM named WHERE id = ?");
                    ps.setInt(1, rs.getInt("id"));
                    ps.executeUpdate();
                }
            }
            ps.close();
            rs.close();
            con.close();
        } catch (SQLException ignored) {
        }
        WorldTimer.getInstance().register(new NamedHandle(), 100);
    }

    public static class NamedHandle implements Runnable {

        public NamedHandle() throws IOException {
            page = new URL("http://ladder.named.com/data/json/ladder/result.json");
        }

        @Override
        public void run() {
            if (nextTime == -1) {
                try {
                    nextTime = Integer.parseInt(nextTimes(1));
                    nextDate = nextTimes(0);
                } catch (IOException ex) {
                    Logger.getLogger(Named.class.getName()).log(Level.SEVERE, null, ex);
                }
            }
            Date d = new Date();
            long baseTime = d.getTime();
            baseTime -= 10000;
            double pass_seconds = baseTime % (60 * 5 * 1000);
            double countdown_seconds = Math.ceil(((60 * 5 * 1000) - pass_seconds) / 1000);
            countdown_seconds = (countdown_seconds >= (60 * 5)) ? 0 : countdown_seconds;
            int countdown_ii = (int) Math.floor(countdown_seconds / 60);
            int countdown_ss = (int) countdown_seconds % 60;
            String countdown_clock = countdown_ii + "�� " + countdown_ss + "��";
            if (!namedTime.equals(countdown_clock)) {
                namedTime = countdown_clock;
            } else {
                return;
            }
            if (countdown_ii == 0 && countdown_ss == 0) {
                try {
                    String result = result();
                    String date = result.split("\"date\":\"")[1].split("\",")[0];
                    date = date.replaceAll("2019-", "");
                    date = date.split("-")[0] + "��" + date.split("-")[1] + "��";
                    String times = result.split("\"times\":\"")[1].split("\",")[0];
                    String start_point = result.split("\"start_point\":\"")[1].split("\",")[0];
                    String line_count = result.split("\"line_count\":\"")[1].split("\",")[0];
                    String odd_even = result.split("\"odd_even\":\"")[1].split("\"")[0];
                    //WorldBroadcasting.broadcastMessage(MainPacketCreator.OnAddPopupSay(9001198, 3000, "#r" + times + "#kȸ�� ���ӵ� Ȧ,¦ �����\r\n[#b" + getScoreString(start_point + " " + line_count + " " + odd_even) + "#k] �Դϴ�.", ""));
                    WorldBroadcasting.broadcastMessage(MainPacketCreator.getGMText(9, "[Meadow Online Alert] " + times + "Round named hole, even results [" + getScoreString(start_point + " " + line_count + " " + odd_even) + "] is."));
                    install_named(getScore(start_point + " " + line_count + " " + odd_even), date + "-" + times);
                    nextTime = Integer.parseInt(times) + 1;
                    nextDate = date;
                } catch (IOException ex) {
                    ex.printStackTrace();
                }
            }
        }
    }

    public static int getScore(String data) {
        switch (data) {
            case "LEFT 4 ODD": //Hall left 4
                return 1;
            case "RIGHT 3 ODD": // Hall Right 3
                return 2;
            case "LEFT 3 EVEN": // Companion 3
                return 3;
            case "RIGHT 4 EVEN": // Mate 4
                return 4;
            default:
                return -1;
        }
    }

    public static String getScoreString(String data) {
        switch (data) {
            case "LEFT 4 ODD": //Hall left 4
                return "4 holes left";
            case "RIGHT 3 ODD": // Hall Right 3
                return "3 holes";
            case "LEFT 3 EVEN": // Companion 3
                return "3 pairs left";
            case "RIGHT 4 EVEN": // Mate 4
                return "4 pairs";
            default:
                return "Unknown";
        }
    }

    private static String result() throws IOException {
        HttpURLConnection con = (HttpURLConnection) page.openConnection();
        con.setRequestMethod("GET");
        con.setRequestProperty("User-Agent", "Mozilla/5.0");
        BufferedReader br = new BufferedReader(new InputStreamReader(con.getInputStream(), StandardCharsets.UTF_8));
        String data;
        StringBuilder temp_data = new StringBuilder();
        while ((data = br.readLine()) != null) {
            temp_data.append(data).append("\n");
        }
        br.close();
        con.disconnect();
        return temp_data.toString();
    }

    private static String nextTimes(int len) throws IOException {
        String result = result();
        String date = result.split("\"date\":\"")[1].split("\",")[0];
        date = date.replaceAll("2019-", "");
        date = date.split("-")[0] + "��" + date.split("-")[1] + "��";
        String times = result.split("\"times\":\"")[1].split("\",")[0];
        if (len == 0) {
            return date;
        } else {
            return String.valueOf(Integer.parseInt(times) + 1);
        }
    }

    public static void install_named(int score, String date) {
        try {
            Connection con = MYSQL.getConnection();
            String sql = "INSERT INTO `named`(`date`, `score`) VALUES (? ,?)";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setString(1, date);
            ps.setInt(2, score);
            ps.executeUpdate();
            ps.close();
            con.close();
            //     MYSQL.closeObject(con);
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
    }

    public static void install_named_char(int cid, int itemid, int quantity, int RC, int score, String date) {
        try {
            Connection con = MYSQL.getConnection();
            String sql = "INSERT INTO `named_char`(`cid`, `itemid`, `quantity`, `RC`, `score`, `date`) VALUES (?, ?, ?, ?, ? ,?)";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setInt(1, cid);
            ps.setInt(2, itemid);
            ps.setInt(3, quantity);
            ps.setInt(4, RC);
            ps.setInt(5, score);
            ps.setString(6, date);
            ps.executeUpdate();
            ps.close();
            con.close();
            //     MYSQL.closeObject(con);
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
    }

    public static boolean isCheck(int cid, String date) {
        boolean check = false;
        try {
            Connection con = MYSQL.getConnection();
            PreparedStatement ps = con.prepareStatement("SELECT * FROM named_char WHERE cid = " + cid);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                if (!check) {
                    if (rs.getString("date").equals(date)) {
                        check = true;
                    }
                }
            }
            ps.close();
            rs.close();
            con.close();
            //     MYSQL.closeObject(con);
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        return check;
    }

    public static boolean isCheck_() {
        try {
            Connection con = MYSQL.getConnection();
            PreparedStatement ps = con.prepareStatement("SELECT * FROM named WHERE date = ?");
            ps.setString(1, nextDate + "-" + nextTime);
            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                ps.close();
                rs.close();
                con.close();
                return true;
            }
            ps.close();
            rs.close();
            con.close();
            //  MYSQL.closeObject(con);
            return false;
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        return false;
    }

    public static boolean isCheck(int cid) {
        boolean check = false;
        try {
            Connection con = MYSQL.getConnection();
            PreparedStatement ps = con.prepareStatement("SELECT * FROM named");
            ResultSet rs = ps.executeQuery();
            PreparedStatement ps1;
            ResultSet rs1;
            while (rs.next()) {
                if (!check) {
                    ps1 = con.prepareStatement("SELECT * FROM named_char WHERE cid = ? AND date = ?");
                    ps1.setInt(1, cid);
                    ps1.setString(2, rs.getString("date"));
                    rs1 = ps1.executeQuery();
                    if (rs1.next()) {
                        if (getScore(rs1.getInt("score"), rs.getInt("score"))) {
                            check = true;
                        }
                    }
                    ps1.close();
                    rs1.close();
                }
            }
            ps.close();
            rs.close();
            if (!check) {
                ps = con.prepareStatement("DELETE FROM named_char WHERE cid = " + cid);
                ps.executeUpdate();
                ps.close();
            }
            con.close();
            //    MYSQL.closeObject(con);
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        return check;
    }

    public static void onlineCheck(int cid, MapleCharacter chr) {
        try {
            Connection con = MYSQL.getConnection();
            PreparedStatement ps = con.prepareStatement("SELECT * FROM named");
            ResultSet rs = ps.executeQuery();
            PreparedStatement ps1;
            ResultSet rs1;
            boolean check = false;
            while (rs.next()) {
                if (!check) {
                    ps1 = con.prepareStatement("SELECT * FROM named_char WHERE cid = ? AND date = ?");
                    ps1.setInt(1, cid);
                    ps1.setString(2, rs.getString("date"));
                    rs1 = ps1.executeQuery();
                    if (rs1.next()) {
                        if (getScore(rs1.getInt("score"), rs.getInt("score"))) {
                            check = true;
                        }
                    }
                    ps1.close();
                    rs1.close();
                }
            }
            ps.close();
            rs.close();
            con.close();
            //        MYSQL.closeObject(con);
            if (check) {
                chr.dropMessage(5, "Rock Paper Scissors Operator: Please recover your bets.");
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
    }

    public static String getText(int cid) {
        StringBuilder text = new StringBuilder();
        try {
            Connection con = MYSQL.getConnection();
            PreparedStatement ps = con.prepareStatement("SELECT * FROM named");
            ResultSet rs = ps.executeQuery();
            PreparedStatement ps1;
            ResultSet rs1;
            while (rs.next()) {
                ps1 = con.prepareStatement("SELECT * FROM named_char WHERE cid = ? AND date = ?");
                ps1.setInt(1, cid);
                ps1.setString(2, rs.getString("date"));
                rs1 = ps1.executeQuery();
                if (rs1.next()) {
                    if (getScore(rs1.getInt("score"), rs.getInt("score"))) {
                        text.append("#L").append(rs1.getInt("id")).append("# #e").append(rs1.getString("date")).append("#n");
                        if (rs1.getInt("RC") > 0) {
                            text.append(" Sponsor Point : ").append(rs1.getInt("RC"));
                        } else {
                            text.append("item : #z").append(rs1.getInt("itemid")).append("# ").append(rs1.getInt("quantity")).append("��");
                        }
                        text.append("\r\n");
                    }
                }
                ps1.close();
                rs1.close();
            }
            ps.close();
            rs.close();
            con.close();
            //          MYSQL.closeObject(con);
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        return text.toString();
    }

    /*
       Mate 1
        Leftover 2
        Outrun 3
        3 lines 4
        4 lines 5
        Left 3 6
        Right 3 7
        Left 4 8
        Right 4 9
        Hall left 4 1
        Hall Right 3 2
        Even left 3 3
        Even Right 4 4
     */
    public static boolean getScore(int score, int score2) {
        if (score == 0) {
            return score2 == 1 || score2 == 2;
        } else if (score == 1) {
            return score2 == 3 || score2 == 4;
        } else if (score == 2) {
            return score2 == 1 || score2 == 3;
        } else if (score == 3) {
            return score2 == 2 || score2 == 4;
        } else if (score == 4) {
            return score2 == 2 || score2 == 3;
        } else if (score == 5) {
            return score2 == 1 || score2 == 4;
        } else if (score == 6) {
            return score2 == 3;
        } else if (score == 7) {
            return score2 == 2;
        } else if (score == 8) {
            return score2 == 1;
        } else if (score == 9) {
            return score2 == 4;
        }
        return false;
    }

    public static boolean giveItemorRC(int id, MapleCharacter chr) {
        try {
            Connection con = MYSQL.getConnection();
            PreparedStatement ps = con.prepareStatement("SELECT * FROM named_char WHERE id = ?");
            ps.setInt(1, id);
            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                if (rs.getInt("RC") > 0) {
                    chr.gainRC(rs.getInt("RC"), true);
                } else if ((chr.getInventory(GameConstants.getInventoryType(rs.getInt("itemid"))).getNextFreeSlot() > -1)) {
                    chr.gainItem(rs.getInt("itemid"), (short) rs.getInt("quantity"));
                } else {
                    ps.close();
                    rs.close();
                    con.close();
                    return false;
                }
            }
            ps.close();
            rs.close();
            ps = con.prepareStatement("DELETE FROM named_char WHERE id = " + id);
            ps.executeUpdate();
            ps.close();
            con.close();
            //        MYSQL.closeObject(con);
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        return true;
    }
}
