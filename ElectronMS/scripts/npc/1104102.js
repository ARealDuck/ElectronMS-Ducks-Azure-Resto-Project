

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
         
		var Lcoin = cm.itemQuantity(4001187);
		var Lcoin2 = cm.itemQuantity(4001188);
		var Lcoin3 = cm.itemQuantity(4001189);

		var chat = "";
	        chat += "           #r#e���� #b#h ##n#k ���� #e#r#i4001187# ��ġ ���� #k#n #e#d"+ Lcoin +"#k #b����#k #n\r\n\r\n"
                chat += "           #r#e���� #b#h ##n#k ���� #e#r#i4001188# ��ġ ���� #k#n #e#d"+ Lcoin2 +"#k #b����#k #n\r\n\r\n"
                chat += "           #r#e���� #b#h ##n#k ���� #e#r#i4001189# ��ġ ���� #k#n #e#d"+ Lcoin3 +"#k #b����#k #n\r\n\r\n"

	        chat += "\r\n\r\n     #L998##r#i4001187#  #e#r1000#k#n#e#r����#k#n #L1# #i4031456# #b#e[#z4031456#]#k#n #e#r1��#k#n";

	        chat += "\r\n\r\n     #L998##r#i4001187#  #e#r2000#k#n#e#r����#k#n #L2# #i4031456# #b#e[#z4031456#]#k#n #e#r2��#k#n";

	        chat += "\r\n\r\n     #L998##r#i4001187#  #e#r3000#k#n#e#r����#k#n #L3# #i4031456# #b#e[#z4031456#]#k#n #e#r3��#k#n";

	        chat += "\r\n\r\n     #L998##r#i4001188#  #e#r3000#k#n#e#r����#k#n #L4# #i4031456# #b#e[#z4031456#]#k#n #e#r1��#k#n";

	        chat += "\r\n\r\n     #L998##r#i4001188#  #e#r6000#k#n#e#r����#k#n #L5# #i4031456# #b#e[#z4031456#]#k#n #e#r2��#k#n";

	        chat += "\r\n\r\n     #L998##r#i4001188#  #e#r9000#k#n#e#r����#k#n #L6# #i4031456# #b#e[#z4031456#]#k#n #e#r3��#k#n";

	        chat += "\r\n\r\n     #L998##r#i4001189#  #e#r3000#k#n#e#r����#k#n #L7# #i4031456# #b#e[#z4031456#]#k#n #e#r1��#k#n";

	        chat += "\r\n\r\n     #L998##r#i4001189#  #e#r6000#k#n#e#r����#k#n #L8# #i4031456# #b#e[#z4031456#]#k#n #e#r2��#k#n";

	        chat += "\r\n\r\n     #L998##r#i4001189#  #e#r9000#k#n#e#r����#k#n #L9# #i4031456# #b#e[#z4031456#]#k#n #e#r3��#k#n";
	       
	       cm.sendSimple(chat);

		} if (selection >= 9999999) {
		    cm.dispose();
		} else if (selection == 1) {
		if (cm.haveItem(4001187, 1000)) {
		    if (cm.canHold(4001187)) {
		        cm.sendOk("#r��ġ#k�� #r#i4031456#[���� ����] 1���� ���� �ϼ̽��ϴ�.");
			cm.gainItem(4001187, -1000);
			cm.gainItem(4031456, 1);
			cm.dispose();
		} else {
		        cm.sendOk("��Ÿâ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }		    
		} else {
		    cm.sendOk("#r��ġ#k�� �����մϴ�.");
		    cm.dispose();
		}
		} else if (selection == 2) {
		if (cm.haveItem(4001187, 2000)) {
		    if (cm.canHold(4001187)) {
		        cm.sendOk("#r��ġ#k�� #r#i4031456#[���� ����] 2���� ���� �ϼ̽��ϴ�.");
			cm.gainItem(4001187, -2000);
			cm.gainItem(4031456, 2);
			cm.dispose();
		} else {
		        cm.sendOk("��Ÿâ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }		    
		} else {
		    cm.sendOk("#r��ġ#k�� �����մϴ�.");
		    cm.dispose();
		}
		} else if (selection == 3) {
		if (cm.haveItem(4001187, 3000)) {
		    if (cm.canHold(4001187)) {
		        cm.sendOk("#r��ġ#k�� #r#i4031456#[���� ����] 3���� ���� �ϼ̽��ϴ�.");
			cm.gainItem(4001187, -3000);
			cm.gainItem(4031456, 3);
			cm.dispose();
		} else {
		        cm.sendOk("��Ÿâ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }		    
		} else {
		    cm.sendOk("#r��ġ#k�� �����մϴ�.");
		    cm.dispose();
		}
		} else if (selection == 4) {
		if (cm.haveItem(4001188, 3000)) {
		    if (cm.canHold(4001188)) {
		        cm.sendOk("#r��ġ#k�� #r#i4031456#[���� ����] 1���� ���� �ϼ̽��ϴ�.");
			cm.gainItem(4001188, -3000);
			cm.gainItem(4031456, 1);
			cm.dispose();
		} else {
		        cm.sendOk("��Ÿâ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }		    
		} else {
		    cm.sendOk("#r��ġ#k�� �����մϴ�.");
		    cm.dispose();
		}
		} else if (selection == 5) {
		if (cm.haveItem(4001188, 6000)) {
		    if (cm.canHold(4001188)) {
		        cm.sendOk("#r��ġ#k�� #r#i4031456#[���� ����] 2���� ���� �ϼ̽��ϴ�.");
			cm.gainItem(4001188, -6000);
			cm.gainItem(4031456, 2);
			cm.dispose();
		} else {
		        cm.sendOk("��Ÿâ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }		    
		} else {
		    cm.sendOk("#r��ġ#k�� �����մϴ�.");
		    cm.dispose();
		}
		} else if (selection == 6) {
		if (cm.haveItem(4001188, 9000)) {
		    if (cm.canHold(4001188)) {
		        cm.sendOk("#r��ġ#k�� #r#i4031456#[���� ����] 3���� ���� �ϼ̽��ϴ�.");
			cm.gainItem(4001188, -9000);
			cm.gainItem(4031456, 3);
			cm.dispose();
		} else {
		        cm.sendOk("��Ÿâ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }		    
		} else {
		    cm.sendOk("#r��ġ#k�� �����մϴ�.");
		    cm.dispose();
		}
		} else if (selection == 7) {
		if (cm.haveItem(4001189, 3000)) {
		    if (cm.canHold(4001189)) {
		        cm.sendOk("#r��ġ#k�� #r#i4031456#[���� ����] 1���� ���� �ϼ̽��ϴ�.");
			cm.gainItem(4001189, -3000);
			cm.gainItem(4031456, 1);
			cm.dispose();
		} else {
		        cm.sendOk("��Ÿâ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }		    
		} else {
		    cm.sendOk("#r��ġ#k�� �����մϴ�.");
		    cm.dispose();
		}
		} else if (selection == 8) {
		if (cm.haveItem(4001189, 6000)) {
		    if (cm.canHold(4001189)) {
		        cm.sendOk("#r��ġ#k�� #r#i4031456#[���� ����] 2���� ���� �ϼ̽��ϴ�.");
			cm.gainItem(4001189, -6000);
			cm.gainItem(4031456, 2);
			cm.dispose();
		} else {
		        cm.sendOk("��Ÿâ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }		    
		} else {
		    cm.sendOk("#r��ġ#k�� �����մϴ�.");
		    cm.dispose();
		}
		} else if (selection == 9) {
		if (cm.haveItem(4001189, 9000)) {
		    if (cm.canHold(4001189)) {
		        cm.sendOk("#r��ġ#k�� #r#i4031456#[���� ����] 3���� ���� �ϼ̽��ϴ�.");
			cm.gainItem(4001189, -9000);
			cm.gainItem(4031456, 3);
			cm.dispose();
		} else {
		        cm.sendOk("��Ÿâ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }		    
		} else {
		    cm.sendOk("#r��ġ#k�� �����մϴ�.");
		    cm.dispose();
}
             } else if (selection == 10001) {
		cm.dispose();
		cm.openNpc(1033221);
		return;

             } else if (selection == 10002) {
		cm.dispose();
		cm.openNpc(1033211);
		return;
             } else if (selection == 10003) {
		cm.dispose();
		cm.openNpc(1033206);
		return;
             } else if (selection == 10004) {
		cm.dispose();
		cm.openNpc(1033205);
		return;
             } else if (selection == 10009) {
		cm.dispose();
		cm.openNpc(1033111);
		return;
 } else if (selection == 20000) {
		cm.dispose();
		cm.openNpc(9072100);
		return;
             } else if (selection == 10006) {
		cm.dispose();
		cm.openNpc(1033202);
		return;
             } else if (selection == 10007) {
		cm.dispose();
		cm.openNpc(1033201);
		return;
            } else if (selection == 10008) {
		cm.dispose();
		cm.openNpc(1033200);
		return;
            } else if (selection == 10011) {
		cm.dispose();
		cm.openNpc(1033110);
		return;
  } else if (selection == 20001) {
		cm.dispose();
		cm.openNpc(1033105);
		return;
} else if (selection == 998) {
		cm.dispose();
		cm.openNpc(1104102);
		return;





		}
	}
}