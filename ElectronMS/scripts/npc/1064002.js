
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
var allPreqDone = false;

/*	Boss Settings     */

var bossid = 6500001; // Jin Hilla ID
var secondboss = 9999992; // (��õ�, ���츸 ����. 2�� ��)
var startmap = 450010800; // ���� ��
var secondmap = 450004250; // (��õ�, ���츸 ����. 2�� ��)
var exitmap = 970060000; // ����(���� ��)
var bossname = "Jin Hilla"
var limit = 2; // Entry Limit
//1135 48
var x = 600, y = 50; // ���� ��ǥ
var x_2 = 718, y_2 = -490; // (��õ�, ���츸 ����. 2�� ���� ��ǥ)
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
		var msg = "#fs11##d<#fUI/UIWindow2.img/MobGage/Mob/6500001# :: #rJin Hilla#k>#d"+enter;
        msg += "< Extremely Difficult >"+enter;
        msg += "<Boss Reward : #i4001902# >"+enter;
		msg += "< [Time limit :#k #r60 Minutes#k] >#k"+enter;
        msg += "#d<Death count :#k #r15 Times#k>#k"+enter;
		msg += "#L1##rI'm moving to kill the boss.#k";
		cm.sendSimple(msg);
	} else if (status == 1) {
	    if(!allPreqDone) // jank boolean rn but hey it works???
        {
            for(var i = 0; i < cm.getParty().getMembers().size(); i++)
            {
                var partyMemberNames = cm.getParty().getMembers().get(i).getName();
                var partyMembers = cm.getClient().getChannelServer().getPlayerStorage().getCharacterByName(partyMemberNames);
                if(partyMembers.getKeyValue("PurpleTierUnlock") == null)
                {
                    cm.sendOk("Make sure all your party members have done the Purple Tier Prequest.");
                    return cm.dispose();
                }
                else
                {
                    allPreqDone = true;
                }
            }
		}
		if(cm.getPlayer().checkBossClearDB(limit, bossname) != null) {
			cm.sendOk(cm.getPlayer().checkBossClearDB(limit, bossname) + " Left.");
			cm.dispose();
			return;
		}
		if (cm.getPlayer().getParty() == null) {
			cm.sendOk("Have a party and challenge.");
			cm.dispose();
			return;
		}
		if (!isPartyLeader()) {
			cm.sendOk("You cannot apply if you are not the party leader.");
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
            	var it = cm.getClient().getChannelServer().getPartyMembers(cm.getParty()).iterator();
            	var countPass = true;
            	while (it.hasNext()) {
                	var chr = it.next();
                	if (chr.checkBossClearDB(limit, bossname) != null) {
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
		var em = cm.getEventManager("Raidboss");
		var eim = em.readyInstance();
		eim.setProperty("StartMap", startmap);
		eim.setProperty("SecondMap", secondmap);
		eim.setProperty("BossName", bossname);
		eim.setProperty("Boss_ID", bossid);
		eim.setProperty("Boss_Second", secondboss);
		eim.setProperty("Boss_x", x);
		eim.setProperty("Boss_y", y);
		eim.setProperty("Boss_x_2", x_2);
		eim.setProperty("Boss_y_2", y_2);
		eim.setProperty("KillCount", 0);
		eim.setProperty("Leader", cm.getPlayer().getParty().getLeader().getName());
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