package handlers.Login;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import client.MapleClient;
import constants.ServerConstants;
import connections.Database.MYSQL;

public class AutoRegister {

    /*
	 * �ߺ��� ������ �ִ��� üũ �� ������ Ȯ��
	 * 
	 * 0 : ���� ������ ���� 1 : �ִ� Ƚ���� ���� IP 2 : �̹� �����ϴ� ����
     */
   public static int checkAccount(MapleClient account, String name, String password) {
       Connection connect = null;
       PreparedStatement query = null;
       ResultSet result = null;
       try {
           connect = MYSQL.getConnection();
           query = connect.prepareStatement("SELECT name FROM accounts WHERE name = ?");
           query.setString(1, name);
           result = query.executeQuery();

           if (result.next()) {
               return 5;
           }

           query = connect.prepareStatement("SELECT ip FROM accounts WHERE ip = ?");
           query.setString(1, account.getSessionIPAddress());
           result = query.executeQuery();

           // ��� ������ IP����
           int ENABLE_IP_COUNT = 0;
           if (!result.first() || (result.last() && result.getRow() < ENABLE_IP_COUNT)) {
               return 0;
           } else if (result.getRow() >= ENABLE_IP_COUNT) {
               return 6;
           }
           return 5;
       } catch (Exception error) {
           if (!ServerConstants.realese) {
               error.printStackTrace();
           }
       } finally {
           try {
               if (connect != null) {
                   connect.close();
               }
               if (query != null) {
                   query.close();
               }
               if (result != null) {
                   result.close();
               }
           } catch (Exception ignored) {
           }
       }
       return 5;
   }

    public static void registerAccount(MapleClient c, String login, String pwd) {
       Connection connect = null;
       PreparedStatement ps = null;
       try {
           connect = MYSQL.getConnection();
           ps = connect.prepareStatement("INSERT INTO accounts (name, password, ip) VALUES (?, ?, ?)");
           ps.setString(1, login);
           ps.setString(2, pwd);
           ps.setString(3, c.getSessionIPAddress());
           ps.executeUpdate();
           connect.close();

       } catch (Exception e) {
           e.printStackTrace();
       }
    }
}
