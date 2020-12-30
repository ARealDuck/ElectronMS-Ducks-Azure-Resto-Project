/*
 * Mady By Spirit(Spiritcube)
 */
/*var items = new Array(new Array(1190100,1,100), new Array(1190101,1,100), new Array(1190300,1,100), new Array(1190301,1,100), new Array(1190302,1,100), new Array(1190400,1,100));

function start() {
 var txt = "� ������ �����Ͻðڽ��ϱ�?  (����1000����)\r\n";
 for (var i = 0; i < items.length; i++) {
 txt += "#L"+i+"# #i"+items[i][0]+"# #z"+items[i][0]+"# (x "+items[i][1]+")\r\n";
 }
 cm.sendSimple(txt);
}

function action(m,t,s) {
 meso = items[s][2] * 100000;
 if (cm.getMeso() >= meso) {
 cm.gainMeso(-meso);
 cm.gainItem(items[s][0], items[s][1]);
 cm.sendOk("���������� �����Ͽ����ϴ�.");
 } else {
 cm.sendOk("�޼Ұ� �����մϴ�.\r\n#b(������ ���� : "+meso+")");
 }
 cm.dispose();
}
 -------------------------------------------------------------------------------------------------------------------------------------------------------------------
 **/

// Magnus Boss



importPackage(Packages.client.items);

importPackage(Packages.server.items);
importPackage(Packages.tools);
importPackage(java.util);
importPackage(java.lang);
importPackage(java.io);
importPackage(java.awt);
importPackage(Packages.server);
importPackage(Packages.tools.packet);
importPackage(Packages.server.LifeEntity.MobEntity);
var enter = "\r\n";
var data, date, day;
var allPreqDone = false;

/*	Boss Information Settings	*/

var bossid = 8880000; // Boss mob code
var startmap = 401060200; // Boss map
var bossname = "Magnus" // In Hangul
var limit = 5; // Number of admissions allowed per day
var time = 30; // Time limit
//1135 48
var x = 2818, y = -1583; // Boss coordinates
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
		var msg = "#fs11##d<#i2591264# :: #r Magnus#k>#d"+enter;
        msg += "<Boss Reward : #i4001901# >"+enter;
		msg += "<Time limit : #r"+time+" Minutes#k #dDaily entries#k #d: #b"+cm.GetCount(bossname+"c", limit)+" Time#k / #r"+limit+"Times#k>#k"+enter;
        msg += "#d<Death Count :#k #r10 Times#k>#k"+enter;
		msg += "#L1##rI'm moving to kill the boss.#k";
		cm.sendSimple(msg);
	} else if (status == 1) {
	    if(!allPreqDone) // jank boolean rn but hey it works???
        {
            for(var i = 0; i < cm.getParty().getMembers().size(); i++)
            {
                var partyMemberNames = cm.getParty().getMembers().get(i).getName();
                var partyMembers = cm.getClient().getChannelServer().getPlayerStorage().getCharacterByName(partyMemberNames);
                if(partyMembers.getKeyValue("BlueTierUnlock") == null)
                {
                    cm.sendOk("Make sure all your party members have done the Blue Tier Prequest.");
                    return cm.dispose();
                }
                else
                {
                    allPreqDone = true;
                }
            }
		}
		if(!cm.CountCheck(bossname+"c", limit)) {
			cm.sendOk("Per day "+limit+"Only one time.");
			cm.dispose();
			return;
		}
		if (cm.getPlayer().getParty() == null) {
			cm.sendOk("Have a party and challenge.");
			cm.dispose();
			return;
		}
		if (!isPartyLeader()) {
			cm.sendOk("If you are not the party leader, you cannot apply.");
			cm.dispose();
			return;
		}
        if (!cm.allMembersHere()) {
            cm.sendOk("All party members should be here.");
			cm.dispose();
            return;
            	}
		if (cm.getPlayerCount(startmap) > 0) {
            cm.sendOk("Someone is already challenging.\r\n#bPlease try another channel.#k");
            cm.dispose();
			return;
        	}
        if (cm.getPlayer().getEventInstance() != null) {
            cm.getPlayer().getEventInstance().unregisterPlayer(cm.getPlayer());
			cm.sendOk("Event instance is duplicated.\r\nPlease try again.");
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
                	cm.sendOk("There are some party members who have no dungeon entry.");
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
		var em = cm.getEventManager("hboss");
		var eim = em.readyInstance();
		eim.setProperty("StartMap", startmap);
		eim.setProperty("BossName", bossname);
		eim.setProperty("Boss_ID", bossid);
		eim.setProperty("Boss_x", x);
		eim.setProperty("Boss_y", y);
		eim.setProperty("KillCount", 0);
		eim.setProperty("Leader", cm.getPlayer().getParty().getLeader().getName());
		eim.registerParty(cm.getPlayer().getParty(), cm.getPlayer().getMap());
		cm.dispose();
	}
}


function AC(player, boss) {
	player.setDateKey(boss, Integer.parseInt(player.getDateKey(boss, false)) + 1, false);
}

function CC(player, boss, limit) {
    if (player.getDateKey(boss, false) == null)
      player.setDateKey(boss, "0", false);
    return Integer.parseInt(player.getDateKey(boss, false)) < limit;
}
function isPartyLeader() {
	if (cm.getPlayer().getParty().getLeader().getId() == cm.getPlayer().getId())
		return true;
	else
		return false;
}
