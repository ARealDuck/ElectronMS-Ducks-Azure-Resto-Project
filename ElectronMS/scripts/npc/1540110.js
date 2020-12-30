
importPackage(Packages.client.items);

importPackage(Packages.server.items);
importPackage(Packages.tools);
importPackage(java.util);
importPackage(java.lang);
importPackage(java.io);
importPackage(java.awt);
importPackage(Packages.server);
importPackage(Packages.tools.packet);
importPackage(Packages.server.life);
var enter = "\r\n";
var data, date, day;


/*	���� ���� ������	*/

var bossid = 9101078; // ���� �� �ڵ�
var secondboss = 9999991; // (��õ�, ���츸 ����. 2�� ��)
var startmap = 993000500; // ���� ��
var secondmap = 450004250; // (��õ�, ���츸 ����. 2�� ��)
var exitmap = 970060000; // ����(���� ��)
var bossname = "���� ����" // �ѱ۷�
var limit = 10; // �Ϸ� ���� ���� ȸ��
//1135 48
var x = 500, y = 0; // ���� ��ǥ
var x_2 = 500, y_2 = 0; // (��õ�, ���츸 ����. 2�� ���� ��ǥ)
/*------------------------------*/
function start() {
	status = -1;
	action(1, 0, 0);
}
function action(mode, type, sel) {
	if (mode == 1) {
		status++;
	} else {
		cm.dispose();
		return;
    	}
	if (status == 0) {
		var msg = "#fs11##d<#fUI/UIWindow2.img/MobGage/Mob/9101078# :: #r�Ҳ� ����#k>#d"+enter;
                msg += "<���� ���� : #i4032101##fs14##r60��#r#fs11# >"+enter;
		msg += "<[���ѽð� :#k #r30��#k] #d���� ���� Ƚ��#k #d: #b"+cm.GetCount(bossname+"c", limit)+"ȸ#k / #r"+limit+"ȸ#k>#k"+enter;
                msg += "#d<���� ī��Ʈ :#k #r5ȸ#k>#k"+enter;
		msg += "#L1##r������ óġ�Ϸ� �̵��ϰڽ��ϴ�.#k";
		cm.sendSimple(msg);
	} else if (status == 1) {
		if(!cm.CountCheck(bossname+"c", limit)) {
			cm.sendOk("�Ϸ翡 "+limit+"���� �����ϴ�ϴ�.");
			cm.dispose();
			return;
		}
		if (cm.getPlayer().getParty() == null) {
			cm.sendOk("��Ƽ�� �ٸ��� �����Ͻñ� �ٶ��ϴ�.");
			cm.dispose();
			return;
		}
		if (!isPartyLeader()) {
			cm.sendOk("��Ƽ���� �ƴϸ� ��û�� �� �����ϴ�.");
			cm.dispose();
			return;
		}
            	if (!cm.allMembersHere()) {
                	cm.sendOk("��Ƽ���� ���� �̰��� ���־�� �մϴ�.");
			cm.dispose();
                	return;
            	}
		if (cm.getPlayerCount(startmap) > 0) {
            		cm.sendOk("�̹� �������� �������Դϴ�.\r\n#b�ٸ� ä���� �̿��� �ּ���.#k");
            		cm.dispose();
			return;
        	}
            	var it = cm.getClient().getChannelServer().getPartyMembers(cm.getParty()).iterator();
            	var countPass = true;
            	while (it.hasNext()) {
                	var chr = it.next();
                	if (!CC(chr, bossname+"c", limit)) {
                    		countPass = false;
                    		break;
                	}
            	}
            	if (!countPass) {
                	cm.sendOk("��Ƽ�� �� ���� ���� Ƚ���� �������� ���� ��Ƽ���� �ֽ��ϴ�.");
                	cm.dispose();
                	return;
            	} else {
            	var it = cm.getClient().getChannelServer().getPartyMembers(cm.getParty()).iterator();
            	var countPass = true;
            	while (it.hasNext()) {
                	var chr = it.next();
			AC(chr, bossname+"c");
            	}
		}
		cm.resetMap(startmap);
		var em = cm.getEventManager("Bomulboss");
		var eim = em.readyInstance();
		eim.setProperty("StartMap", startmap);
		eim.setProperty("SecondMap", secondmap);
		eim.setProperty("ExitMap", exitmap);
		eim.setProperty("BossName", bossname);
		eim.setProperty("Boss_ID", bossid);
		eim.setProperty("Boss_Second", secondboss);
		eim.setProperty("Boss_x", x);
		eim.setProperty("Boss_y", y);
		eim.setProperty("Boss_x_2", x_2);
		eim.setProperty("Boss_y_2", y_2);
		eim.setProperty("KillCount", 0);
		eim.setProperty("Leader", cm.getPlayer().getParty().getLeader().getName());
		//cm.CountAdd(bossname+"c");
		eim.registerParty(cm.getPlayer().getParty(), cm.getPlayer().getMap());
		cm.dispose();
	}
}


function isPartyLeader() {
	if (cm.getPlayer().getParty().getLeader().getId() == cm.getPlayer().getId())
		return true;
	else
		return false;
}

function AC(player, boss) {
	player.setDateKey(boss, Integer.parseInt(player.getDateKey(boss, false)) + 1, false);
}

function CC(player, boss, limit) {
    if (player.getDateKey(boss, false) == null)
      player.setDateKey(boss, "0", false);
    return Integer.parseInt(player.getDateKey(boss, false)) < limit;
}