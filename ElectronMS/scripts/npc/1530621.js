// Damien Boss
// Script : 1530621

importPackage(java.util);
importPackage(java.lang);
importPackage(java.io);
importPackage(java.awt);
importPackage(Packages.server);
importPackage(Packages.tools.packet);
importPackage(Packages.server.LifeEntity.MobEntity);
importPackage(Packages.server.LifeEntity.NpcEntity);
importPackage(Packages.scripting.EventManager);
importPackage(Packages.server.LifeEntity.MobEntity.BossEntity);
importPackage(Packages.server.LifeEntity.MobEntity.MonsterEntity);
importPackage(Packages.launcher.Utility);
importPackage(Packages.connections.Packets);
importPackage(Packages.connections.Packets.PacketUtility);
importPackage(Packages.connections.Packets.BossPacket);
importPackage(Packages.connections.Packets.PacketUtility.WritingPacket);

var enter = "\r\n";
var data, date, day;
var seld = -1;
var allPreqDone = false;

/*	Boss Information Settings	*/

var bossid = 9300890; // Damien phase 1
var secondboss = 8880131; // Damien Phase 2
var startmap = 350160100; // First Phase map
var secondmap = 350160240; // Second Phase map
var bossname = "Damien" // In Hangul
var limit = 3; // Entry Limit
var time = 25; // Time limit
//1135 48
var x = -10, y = -16; // Boss coordinates of Damien phase 1
var x_2 = 765, y_2 = 19; // Boss coordinates of Damien phase 2

/*------------------------------*/

var bossname2 = "Damien2";
var limit2 = 3;
var 파티보스피1 = 500000000000000;
var 파티보스피2 = 1000000000000000;


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
		if (cm.getPlayer().getReborns() < 100 && !cm.getPlayer().isGM()) {
			cm.sendOk("A boss who can challenge only one character over 100 rebirths.");
			cm.dispose();
			return;
		}
                
		var msg = "#fs11##d<#i2591572# :: #r Legionary Damien #k>#d"+enter;
        msg += "Boss compensation : #i4001912#>"+enter;
		msg += "<Time limit : #r"+time+"time#k>"+enter;
        msg += "#d<Death count :#k #r45 Minute#k>#k"+enter;
		msg += "#L1#[Party] I'm moving to kill the boss. <#b"+cm.GetCount(bossname2+"c", limit2)+"time / #r"+limit2+"time#k>"+enter;
		cm.sendSimple(msg);

	} else if (status == 1) {
	    if(!allPreqDone) // jank boolean rn but hey it works???
        {
            for(var i = 0; i < cm.getParty().getMembers().size(); i++)
            {
                var partyMemberNames = cm.getParty().getMembers().get(i).getName();
                var partyMembers = cm.getClient().getChannelServer().getPlayerStorage().getCharacterByName(partyMemberNames);
                if(partyMembers.getKeyValue("PinkTierUnlock") == null)
                {
                    cm.sendOk("Make sure all your party members have done the Pink Tier Prequest.");
                    return cm.dispose();
                }
                else
                {
                    allPreqDone = true;
                }
            }
		}
		seld = sel;
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
		if (cm.getPlayerCount(startmap) > 0 || cm.getPlayerCount(secondmap) > 0) {
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
	   var dd = 0;
       var countPass = true;
            while (it.hasNext()) {
                var chr = it.next();
			    dd++;
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
			if (dd != 1 && sel == 2) {
                		cm.sendOk("Not suitable for solo mode conditions."+dd);
                		cm.dispose();
                		return;
			}
            		var it = cm.getClient().getChannelServer().getPartyMembers(cm.getParty()).iterator();
            		var countPass = true;
            		while (it.hasNext()) {
                		var chr = it.next();
				AC(chr, bossname+"c");
            		}


		}

		cm.resetMap(startmap);
		cm.resetMap(secondmap);
		var msg = cm.getPlayer().getName() + "'S party is challenging Damien!";
		WorldBroadcasting.broadcastMessage(MainPacketCreator.serverNotice(6, msg));
		var em = cm.getEventManager("hboss");
		var eim = em.readyInstance();
		eim.setProperty("StartMap", startmap);
		eim.setProperty("SecondMap", secondmap);
		eim.setProperty("BossName", bossname);
        eim.setProperty("PHp1", 파티보스피1);
        eim.setProperty("PHp2", 파티보스피2);
		eim.setProperty("Boss_ID", bossid);
		eim.setProperty("Boss_Second", secondboss);
		eim.setProperty("Boss_x", x);
		eim.setProperty("Boss_y", y);
		eim.setProperty("Boss_x_2", x_2);
		eim.setProperty("Boss_y_2", y_2);
		eim.setProperty("KillCount", 0);
		eim.setProperty("Leader", cm.getPlayer().getParty().getLeader().getName());
		eim.registerParty(cm.getPlayer().getParty(), cm.getPlayer().getMap());
        cm.warpParty(startmap);
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
