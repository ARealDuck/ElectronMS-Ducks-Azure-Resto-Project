importPackage(Packages.handling.world)
importPackage(Packages.tools.packet);

��� = [["��޾���",0], ["��ī��",20000], ["����Ʈ",50000], ["�����",100000], ["������",250000], ["Ŀ�Ǵ�",500000], ["������",1000000], ["����","����"]];
���2 = ["����", "��ΰ�", "��Ʃ��", "�Ŀ���ΰ�", "������ ��Ʈ����"];

�� = "#fUI/FarmUI.img/objectStatus/star/whole#";
star = "#fUI/UIToolTip.img/Item/Equip/Star/Star#"
star0 = "#fUI/UIToolTip.img/Item/Equip/Star/Star0#"
star1 = "#fUI/UIToolTip.img/Item/Equip/Star/Star1#"

Btstar = "#fUI/UIWindow7.img/Medal_15th/BtStar/normal/0#"
count = true;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == 1) {
	if (selection == 100 && status == 0) {
		if (count) {
			count = false;
		} else {
			count = true;
		}
	} else {
		status++;
	}
    } else {
	cm.dispose();
	return;
    }
	if (status == 0) {
		if (cm.getPlayer().getKeyValue(20190824, "hongbostack_blog") == -1) {
			cm.getPlayer().setKeyValue(20190824, "hongbostack_blog", 0);
		}
		if (cm.getPlayer().getKeyValue(20190824, "hongbostack_youtube") == -1) {
			cm.getPlayer().setKeyValue(20190824, "hongbostack_youtube", 0);
		}
		var a = "#fn�������#";
		a += count ? Btstar + "#fs16##fc0xFF7758A5# �����̼�#k" : Btstar + "#fs16##fc0xFF7758A5# ����Ʈ#k"
		a += count ? "                                    #fs14##L100##fc0xFFF361A6#<����ġ>#k#l\r\n" : "                                           #fs14##L100##fc0xFFF361A6#<����ġ>#k#l\r\n"
		a += "       "+star+" #fs14##b#e#h0##k#n ���� #rStatus#k\r\n#fs12#";
		a += count ? "               "+star1+" #fc0xFF6799FF#�����̼�#k ����Ʈ : #r"+cm.getPlayer().getDPoint()+"#k\r\n" : "               "+star1+" #fc0xFF6799FF#����Ʈ#k ����Ʈ : #r"+cm.getPlayer().getHPoint()+"#k\r\n"
		a += count ? "               "+star1+" #fc0xFF6799FF#���Ͼ�#k ��ũ : #r"+���[cm.getPlayer().getKeyValue(190823, "grade")][0]+"#k\r\n" : "               "+star1+" #fc0xFF6799FF#����Ʈ#k ��� : #r"+���2[0]+"#k\r\n"
		a += count ? "               "+star1+" #fc0xFF6799FF#���� �±�#k�� �ʿ��� ����Ʈ : #r"+���[(cm.getPlayer().getKeyValue(190823, "grade") + 1)][1]+"#k\r\n" : "               "+star1+" #fc0xFF6799FF#��α�#k ���� ������ : #r"+cm.getPlayer().getKeyValue(20190824, "hongbostack_blog")+" ����#k\r\n"
		if (!count) {
		    a += "               "+star1+" #fc0xFF6799FF#��Ʃ��#k ���� ��Ʈ���� : #r"+cm.getPlayer().getKeyValue(20190824, "hongbostack_youtube")+" ����#k\r\n"
		}
		a += "#fs12##e����������������������������������������������������������#n#fs#\r\n";
		a += Btstar + "#fs16##fc0xFF7758A5# �޴�#k\r\n";
		a += count ? "   #L0#"+star+" #fs14##fc0xFF9FC93C#�����̼� ����#k#l\r\n" : "   #L0#"+star+" #fs14##fc0xFF9FC93C#����Ʈ ����#k#l\r\n"
		a += count ? "   #L1#"+star+" #fs14##fc0xFF9FC93C#�����̼� ��ũ �±�#k#l\r\n" : "   #L10#"+star+" #fs14##fc0xFF9FC93C#����Ʈ ��������#k#l\r\n"
		a += count ? "   #L2#"+star+" #fs14##fc0xFF9FC93C#��ũƯ��#k#l\r\n" : ""
		a += "\r\n#fs12##e����������������������������������������������������������#n#fs#";
		cm.sendSimpleS(a, 2);
	} else if (status == 1) {
		st = selection
		if (selection == 0) {
			cm.dispose();
			ccount = count ? 0 : 1;
			cm.openNpcCustom(cm.getClient(), 9001048, "DShop_"+ccount);
		} else if (selection == 1) {
			if (cm.getPlayer().getKeyValue(190823, "grade") >= 6) {
			    cm.sendOkS("�ְ� ��ũ�� �����ؼ� �� �̻� �±��� �Ұ����ϴ�.",2);
			    cm.dispose();
			    return;
			}
			var text = "���� �� ��ũ�� #fEtc/ZodiacEvent.img/0/icon/"+cm.getPlayer().getKeyValue(190823, "grade")+"/0# #r"+���[cm.getPlayer().getKeyValue(190823, "grade")][0]+"#k �̴�.\r\n";
			text += "���� ��ũ�� #fEtc/ZodiacEvent.img/0/icon/"+(cm.getPlayer().getKeyValue(190823, "grade") + 1)+"/0# #b"+���[(cm.getPlayer().getKeyValue(190823, "grade") + 1)][0]+"#k ��(��) �±��ϱ� ���ؼ� #r"+���[(cm.getPlayer().getKeyValue(190823, "grade") + 1)][1]+"#k #fc0xFF6799FF#�����̼� ����Ʈ#k�� �ʿ��ϴ�\r\n";
			text += "#fc0xFF6799FF#�����̼� ����Ʈ#k�� ����ؼ� ���� ��ũ�� �±��ұ�?";
			cm.sendYesNoS(text,0x26);
		} else if (selection == 2) {
			cm.dispose();
			cm.openNpc(9000226);
		} else if (selection == 10) {
			cm.dispose();
			cm.openNpcCustom(cm.getClient(), 9000226, "Suppoting");
		}
	} else if (status == 2) {
		if (st == 1) {
		    if (cm.getPlayer().getDPoint() < ���[(cm.getPlayer().getKeyValue(190823, "grade") + 1)][1]) {
			cm.sendOkS("#fc0xFF6799FF#�����̼� ����Ʈ#k �� �����մϴ�.",2);
			cm.dispose();
			return;
		    }
		    var text = "#b#e[��ũ�±�]#k#n\r\n\r\n";
		    text += "#fEtc/ZodiacEvent.img/0/icon/"+cm.getPlayer().getKeyValue(190823, "grade")+"/0# #r"+���[cm.getPlayer().getKeyValue(190823, "grade")][0]+"#k";
		    text += "  ��  ";
		    text += "#fEtc/ZodiacEvent.img/0/icon/"+(cm.getPlayer().getKeyValue(190823, "grade") + 1)+"/0# #b"+���[(cm.getPlayer().getKeyValue(190823, "grade") + 1)][0]+"#k";
		    cm.sendOkS(text,2);
		    cm.getPlayer().gainDPoint(-���[(cm.getPlayer().getKeyValue(190823, "grade") + 1)][1]);
		    cm.setZodiacGrade(cm.getPlayer().getKeyValue(190823, "grade") + 1);
		    World.Broadcast.broadcastMessage(CField.getGameMessage(9, "[���Ͼ� ��ũ] �������ּ���. "+cm.getPlayer().getName()+" ���� [ "+���[cm.getPlayer().getKeyValue(190823, "grade")][0]+" ] ��(��) �±��ϼ̽��ϴ�!"));
		    cm.dispose();
		    return;
		} else {
		    cm.dispose();
		    return;
		}
	}
}