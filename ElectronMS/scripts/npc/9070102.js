var status = -1;

var coin = 20;
var mob = 8881000; //��ȯ�� �� �ڵ�
var check = "�츣��";//üũ�� �� �̸�
map = 970072300;//�� �ڵ�
var x = -40;//x��ǥ
var y = 86;//y��ǥ
var hp = "14 �� 21 ��";

importPackage(Packages.constants);

function start() {
 action(1, 0, 0);
}

function action(mode, type, selection) {

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
 if (cm.getPlayer().getMapId() == 970072300) {
    if (cm.getPlayer().getStat().getHp() == 0) {
    cm.sendSimple("#fn������� Extrabold#�̷�.. �ڳ�.. ���°� ���� �ʾ� ���̴±�..\r\n#fs13##L3##b[��Ȱ]#k #dĳ���� ü�� ȸ��#k #r(500 �� �޼�)#k#l");
    } else {
    cm.sendSimple("     #fn������� Extrabold##d"+check+"#k �� �Ϸ縶��#Cgray##fs10#(12�� ����) #fs15##r1��#k #fs12#�� ��ȯ�� �����մϴ�.\r\n\r\n                 #fs13##d��� :#k #r�����̾�#k          #dü��#k : #r"+hp+"#k\r\n\r\n           #L1##bâ���� ���� ����#k #r" + coin + " ��#k - #d"+check+" ��ȯ#k#l\r\n                   #L2##fs11##b"+ServerConstants.serverName+" ���� �������� ����#k#l\r\n");
    }
 } else {
 cm.dispose();
 }
  } else if(selection == 1) {
            if (cm.getPlayer().getParty() == null) {
            cm.sendOk("#fn������� Extrabold##fs13##r                   ��ȯ�Ϸ��� ��Ƽ�� �ʿ��մϴ�.");
            cm.dispose();
            }
            if (!cm.isLeader()) {
	  cm.sendOk("#fn������� Extrabold##fs13##r                    ��Ƽ�常 ��ȯ�� �����մϴ�.");
                cm.dispose();
            }
            if (!cm.allMembersHere()) {
	cm.sendOk("#fn������� Extrabold##fs13##r                ��Ƽ�� ������ �̰��� �־�� �մϴ�.");
                cm.dispose();
           }
           if (cm.getMonsterCount(map) > 0) {
	cm.dispose();
	cm.openNpc(9010017);
            } else {
 if(cm.BossCheck(""+check+"", 1)) {
 if(cm.haveItem(4033364,coin)) {
 cm.gainItem(4033364,-coin);
 cm.spawnMob(mob, x, y);
 cm.BossAdd(""+check+"");
 cm.playerMessage(-1,"[�˸�] ���� ��ȯ�� �Ϸ� �Ǿ����ϴ�.");
 cm.dispose();
} else {
	cm.sendOk("#fn������� Extrabold##fs13#                   #râ���� ���� ������ �����մϴ�.#k");
	cm.dispose();
}
} else {
	cm.sendOk("     #fn������� Extrabold##d"+check+"#k �� �Ϸ縶��#Cgray##fs10#(12�� ����) #fs15##r1��#k #fs12#�� ��ȯ�� �����մϴ�.");
	cm.dispose();
	}
	}
  } else if (selection == 2) {
   cm.warp(680000000, 0);
   cm.dispose();
  } else if (selection == 3) {
   if(cm.getMeso() >= 5000000) {
   cm.gainMeso(-5000000);
   cm.getPlayer().getStat().heal(cm.getPlayer());
   cm.getPlayer().dispelDebuffs();
   cm.sendOk("#fn������� Extrabold##fs13#              #bĳ������ ü���� ��� ȸ�� �Ǿ����ϴ�.#k");
   cm.dispose();
   } else {
   cm.sendOk("#fn������� Extrabold##fs13#                #rü�� ȸ���� ���� �޼Ұ� �����մϴ�.#k");
   cm.dispose();
   }
  }
}
