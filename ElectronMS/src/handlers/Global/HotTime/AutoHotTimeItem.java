package handlers.Global.HotTime;

import client.Character.MapleCharacter;
import connections.Packets.MainPacketCreator;
import constants.ServerConstants;
import java.util.Calendar;
import java.util.TimeZone;
import java.lang.management.MemoryMXBean;
import java.lang.management.MemoryUsage;
import launcher.ServerPortInitialize.ChannelServer;
import launcher.Utility.WorldBroadcasting;
import client.ItemInventory.Items.ItemInformation;

public class AutoHotTimeItem extends Thread {

    private boolean a = false;
    
    public AutoHotTimeItem(double startTimer) {
        super("AutoHotTimeItem");
        MemoryMXBean mmb = java.lang.management.ManagementFactory.getMemoryMXBean();
        MemoryUsage mem = mmb.getHeapMemoryUsage();
        long minRebootUsage = (long) (mem.getMax() * startTimer);
    }

    public void run() {
        boolean overflow = false;
        while (!overflow) {
            try {
                TimeZone zone = TimeZone.getTimeZone("Asia/Seoul");
                Calendar cal = Calendar.getInstance(zone);
                int H = cal.get(Calendar.HOUR_OF_DAY);
                int M = cal.get(Calendar.MINUTE);
                int S = cal.get(Calendar.SECOND);
                AutoHotTimeItem(H, M, S, Calendar.getInstance().get(Calendar.DAY_OF_WEEK));
                // System.out.println("[Notice] " + H + "Hour " + M + " Min");
                Thread.sleep(60000L);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    public static void AutoHotTimeItem(int H, int M, int S, int day) {
        int itemcode = 0, itemcode2 = 0, itemcode3 = 0;
        
        // System setting by day 2
        int ������ = 2450001;
        int ȭ���� = 2450001;
        int ������ = 2450001;
        int ����� = 2450001;
        int �ݿ��� = 2450001;
        int ����� = 2450002;
        int �Ͽ��� = 2450002;
        
        //System setting by day 3
        int ������1 = 4310241;
        int ȭ����1 = 4310241;
        int ������1 = 4310241;
        int �����1 = 4310241;
        int �ݿ���1 = 4310241;
        int �����1 = 4310241;
        int �Ͽ���1 = 4310241;

        
        if (ServerConstants.AutoHotTimeSystem) {
            if (H == ServerConstants.AutoHotTimeSystemHour/* || H == ServerConstants.AutoHotTimeSystemHour - 12*/) {
                if (M == ServerConstants.AutoHotTimeSystemMinute) {
                    if (ServerConstants.AutoHotTimeSystemtemchacks) {
                        for (ChannelServer cs : ChannelServer.getAllInstances()) {
                            for (MapleCharacter chr : cs.getPlayerStorage().getAllCharacters().values()) {
                                switch (Calendar.getInstance().get(Calendar.DAY_OF_WEEK)) {
                                    case 1: {
                                        for (int i = 0; i < ServerConstants.AutoHotTimeSundayItemCode.size(); i++) {
                                            chr.gainItem(ServerConstants.AutoHotTimeSundayItemCode.get(i), (short)1, false, -1, null);
                                            itemcode = ServerConstants.AutoHotTimeSundayItemCode.get(i);
                                        }
                                        chr.gainItem(�Ͽ���, (short)2, false, -1, null);
                                        chr.gainItem(�Ͽ���1, (short)2, false, -1, null);
                                        itemcode2 = �Ͽ���;
                                        itemcode3 = �Ͽ���1;
                                        break;
                                    }
                                    case 2: {
                                        for (int i = 0; i < ServerConstants.AutoHotTimeMondayItemCode.size(); i++) {
                                            chr.gainItem(ServerConstants.AutoHotTimeMondayItemCode.get(i), (short)1, false, -1, null);
                                            itemcode = ServerConstants.AutoHotTimeMondayItemCode.get(i);
                                        }
                                        chr.gainItem(������, (short)2, false, -1, null);
                                        chr.gainItem(������1, (short)1, false, -1, null);
                                        itemcode2 = ������;
                                        itemcode3 = ������1;
                                        break;
                                    }
                                    case 3:
                                        for (int i = 0; i < ServerConstants.AutoHotTimeTuesdayItemCode.size(); i++) {
                                            chr.gainItem(ServerConstants.AutoHotTimeTuesdayItemCode.get(i), (short)1, false, -1, null);
                                            itemcode = ServerConstants.AutoHotTimeTuesdayItemCode.get(i);
                                        }
                                        chr.gainItem(ȭ����, (short)2, false, -1, null);
                                        chr.gainItem(ȭ����1, (short)1, false, -1, null);
                                        itemcode2 = ȭ����;
                                        itemcode3 = ȭ����1;
                                        break;
                                    case 4:
                                        for (int i = 0; i < ServerConstants.AutoHotTimeWednesdayItemCode.size(); i++) {
                                            chr.gainItem(ServerConstants.AutoHotTimeWednesdayItemCode.get(i), (short)1, false, -1, null);
                                            itemcode = ServerConstants.AutoHotTimeWednesdayItemCode.get(i);
                                        }
                                        chr.gainItem(������, (short)2, false, -1, null);
                                        chr.gainItem(������1, (short)1, false, -1, null);
                                        itemcode2 = ������;
                                        itemcode3 = ������1;
                                        break;
                                    case 5:
                                        for (int i = 0; i < ServerConstants.AutoHotTimeThursdayItemCode.size(); i++) {
                                            chr.gainItem(ServerConstants.AutoHotTimeThursdayItemCode.get(i), (short)1, false, -1, null);
                                            itemcode = ServerConstants.AutoHotTimeThursdayItemCode.get(i);
                                        }
                                        chr.gainItem(�����, (short)2, false, -1, null);
                                        chr.gainItem(�����1, (short)1, false, -1, null);
                                        itemcode2 = �����;
                                        itemcode3 = �����1;
                                        break;
                                    case 6:
                                        for (int i = 0; i < ServerConstants.AutoHotTimeFridayItemCode.size(); i++) {
                                            chr.gainItem(ServerConstants.AutoHotTimeFridayItemCode.get(i),(short)1, false, -1, null);
                                            itemcode = ServerConstants.AutoHotTimeFridayItemCode.get(i);
                                        }
                                        chr.gainItem(�ݿ���, (short)2, false, -1, null);
                                        chr.gainItem(�ݿ���1, (short)1, false, -1, null);
                                        itemcode2 = �ݿ���;
                                        itemcode3 = �ݿ���1;
                                        break;
                                    case 7:
                                        for (int i = 0; i < ServerConstants.AutoHotTimeSaturdayItemCode.size(); i++) {
                                            chr.gainItem(ServerConstants.AutoHotTimeSaturdayItemCode.get(i), (short)1, false, -1, null);
                                            itemcode = ServerConstants.AutoHotTimeSaturdayItemCode.get(i);
                                        }
                                        chr.gainItem(�����, (short)2, false, -1, null);
                                        chr.gainItem(�����1, (short)2, false, -1, null);
                                        itemcode2 = �����;
                                        itemcode3 = �����1;
                                        break;
                                }
                                ServerConstants.AutoHotTimeSystemtemchacks = false;
                            }
                        }
                        WorldBroadcasting.broadcastMessage(MainPacketCreator.serverNotice(1, "You have been awarded a Hot Time Item."));
                        System.out.println("[Hot time] " + ItemInformation.getInstance().getName(itemcode) + " And " + ItemInformation.getInstance().getName(itemcode2) +" And " + ItemInformation.getInstance().getName(itemcode3) + "You have paid.");
                    }
                } else {
                    ServerConstants.AutoHotTimeSystemtemchacks = true;
                }
            }
            if (H == ServerConstants.AutoHotTimeSystemHour-1)
            {
		if (M == ServerConstants.AutoHotTimeSystemMinute) 
		{	
                    System.out.println("[Hot Time] 1 hour before the start.");
                    WorldBroadcasting.broadcastMessage(MainPacketCreator.getGMText(10, "[Hot Time] 1 hour before the start��."));
		}
            }
        }
    }
    public static void main(String[] args) 
    {
        new AutoHotTimeItem(5).start();
    }
}
