/*
���� : (Dhae) dhae0107
���� : ���ι� ������
�ڵ� : 11100 (@����[�����ϱ�] - ���)
���� : ���� ���� ���ǽ�
*/

importPackage(Packages.constants);
importPackage(Packages.server.items);
importPackage(Packages.client.items);
importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);
importPackage(Packages.client);

�� = "#fUI/UIToolTip/Item/Equip/Star/Star#"
����1 = "#fUI/UIWindow4.img/monsterCollection/number/1#"
����2 = "#fUI/UIWindow4.img/monsterCollection/number/2#"

���� = (50000); // Currency that is necessary for rebirth
���� = (250) // Transformation level
�̵� = (109090200) // Where is former N Fish



function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
    	cm.dispose();	
        return;	
    }
    if (status == 3 && mode == 0) {
    	cm.sendOk("Please choose carefully.");	
        cm.dispose();	
        return;	
    }
    if (mode == -1) {
        cm.dispose();	
        return;
    
    }
    if (mode == 0) {
    	status --;	
    }
    if (mode == 1) {
    	status++;	
    }

if (status == 0) {
	cm.sendOk("#r#e��Cautions when changing��#k#n\n#fs20#\r\n\r\n"+����1+"#fs# Before rebirth #b#eUnmount all items being equipped#n#k Do.\r\n"+����2+"\r\n\r\n#fnSunny gothic##e#d< We are not responsible for any disadvantages caused by not knowing the above items.\r\n#r#eYou will not gain Rebirth Points if you change job.\r\nBecause this is basically a reward.");
        //cm.sendOk("#rSoon Re-enabled.");
	
}else if(status == 1){
	�� = "Hi #b#h ##ksir\r\n\r\n"
	��+= "#fnSunny gothic##k#n#e#b#h ##k'S level : #d"+cm.getPlayerStat("LVL") + " / "+����+  "#n#k#fn#\r\n\r\n"
	��+= "#L0#"+��+" #b#eWe proceed transformation#n I'll do it.\r\n"
	��+= "#L1#"+��+" #eWhat is rebirth #nIs it?"
	cm.sendSimple(��);


}else if(status == 2){
	if (selection == 0) {
	if (cm.getPlayer().getLevel() >= ����) {
	�� = "#b#e< Adventurer & Cygnus >#k#n\r\n"
	��+= "#L0# Adventurer #L301# Pathfinder #L1000# Cygnus #L5000# Mikhail \r\n\r\n\r\n#l"
	��+= "#b#e< Hero Class >#k#n\r\n"
	��+= "#L2000# Aran #L2001# Evan #L2002# Mercedes #L2003# Phantom #L2004# Luminous #L2005# Silverwall\r\n\r\n\r\n#l"
	��+= "#b#e< Resistance >#n#k\r\n"
	��+= "#L3000# Resistance #L3001# Daemon #L3002# Xenon\r\n\r\n\r\n#l"
	��+= "#b#e< Nova >#n#k\r\n"
	��+= "#L6000# Kaiser #L6001# Angelic Buster #L6002# Cadena\r\n\r\n\r\n#l "
	��+= "#b#e< Lev >#n#k\r\n"
	��+= "#L15500# Ark \r\n\r\n\r\n#l "
	cm.sendSimple(��);
}else{
	cm.sendOk("#e#b#h ##k'S Level : #r"+cm.getPlayerStat("LVL")+"#k / #dRequired level#k :#r "+����+"");
	cm.dispose();
    }

	}else if(selection == 1) {
	cm.sendOk("#e#b< With Rebirth & Changing Job? >#n#k\r\n\r\nGo back to level 10\r\n#r#eHaving a new class#n#k.\r\nWhen chose another job..\r\n#r#e[Keystored] skills are reset.\r\n#b#e*Hint* (Except Phantom skills)#n#k.");
	cm.dispose();
    }


}else if(status == 3){
	���� = selection;
	if (���� == 0) {
	�̸� = "#b< Adventurer >#k��" 
	}else if(���� == 1000) {
	�̸� = "#b< Cygnus >#k��"
	}else if(���� == 301) {
	�̸� = "#b< Pathfinder >#k��"
	}else if(���� == 2000) {
	�̸� = "#b< Aran >#k��"
	}else if(���� == 2001) {
	�̸� = "#b< Evan >#k��"
	}else if(���� == 2002) {
	�̸� = "#b< Mercedes >#k��" 
	}else if(���� == 2003) {
	�̸� = "#b< Phantom >#k��"
	}else if(���� == 2004) {
	�̸� = "#b< Luminous >#k��"
	}else if(���� == 2005) {
	�̸� = "#b< Silverwall >#k��"
	}else if(���� == 3000) {
	�̸� = "#b< Resistance >#k��"
	}else if(���� == 3001) {
	�̸� = "#b< Daemon >#k��"
	}else if(���� == 3002) {
	�̸� = "#b< Xenon >#k��"
	}else if(���� == 5000) {
	�̸� = "#b< Mikhail >#k��"
	}else if(���� == 6000) {
	�̸� = "#b< Kaiser >#k��"
	}else if(���� == 6001) {
	�̸� = "#b< Angelic Buster >#k��"
	}else if(���� == 6002) {
	�̸� = "#b< Cadena >#k��"
	}else if(���� == 15500) {
	�̸� = "#b< Ark >#k��"
	}if (���� != 1){
	cm.sendYesNo("The job you choose "+�̸�+" Is that correct?");}


}else if(status == 4){
    
        cm.getPlayer().setReborns(cm.getPlayer().getReborns() + 1);
        cm.warp(�̵�);
	cm.unequipEverything();
	//cm.getPlayer().skillReset();
	cm.changeJob(����);
	cm.getPlayer().setLevel(1);
        
        //cm.getPlayer().PhantomSkillDelete();
	cm.fakeRelog();
	cm.updateChar();
        cm.sendOk("#fs 50##fnRebirth# #bSuccessful!#k");;
        cm.dispose();
}
}