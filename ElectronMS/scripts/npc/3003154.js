
var k = "#fUI/UIToolTip/Item/Equip/Star/Star#"

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
            cps = "                     #e<AzureMS Store>#n\r\n";
            cps = "#fUI/CashShop.img/CSStatus/BtN/normal/0# #fnSharing Gothic Extrabold##fs15##b#h ##k #fnSharing Gothic Extrabold##fs15# 'S Info.#fnSharing Gothic Extrabold##fs12#\r\n Level : "+ cm.getPlayer().getLevel() +"��Meso : " + cm.getPlayer().getMeso()+ " Won#n\r\n\r\n";
            cps += "#L100006##fs 13##i2920006##e#r  Accessories Store\n";
           cps += "#L100007##fs 13##i1190900##e#r  Emblem\n\r\n";
           cps += "#L74##fs 13##i1182064##e#r  Badge\n";
           cps += "#L9000081##fs 13##i1162025##e#r  Pocket\n\r\n";
           cps += "#L2142100##fs 13##i1672073##e#rAndroid Heart Store\n";
           cps += "#L1201000##fs 13##i1662036##e#rAndroid Store#n\r\n\r\n";
            cm.sendSimple(cps);         
        } else if (selection == 100000) {
                cm.sendSimple ("#r#e[ Warrior Armor ]#n#k\r\n" +
            "#k#L0#����" +
            "#k#L1#����" +
            "#k#L2#����" +
            "#k#L3#�Ź�" +
            "#k#L4#����" +
            "#k#L5#�尩" +
            "#k#L6#����\r\n\r\n\r\n\r\n" +

            "#l#b#e[ Warrior Weapons ]#n#k\r\n" +
            "#k#L7#�������" +
            "#k#L8#�Ѽյ���" +
            "#k#L9#�μյ���" +
            "#k#L10#�Ѽյб�\r\n" +
            "#k#L11#�μյб�" +
            "#k#L12#�Ѽհ�" +
            "#k#L13#�μհ�" +
            "#k#L14#â" +
            "#k#L15#����" +
            "#k#L76#�ڵ�ĳ��");
        } else if (selection == 100001) {
                cm.sendSimple ("#r#e[ Wizard Armor ]#n#k\r\n" +
            "#k#L16#����" +
            "#k#L7#����" +
            "#k#L18#����" +
            "#k#L19#����" +
            "#k#L20#�Ź�" +
            "#k#L21#�尩" +
            "#k#L22#����\r\n\r\n\r\n\r\n" +

            "#l#b#e[ Wizard Weapons ]#n#k\r\n" +
            "#k#L23#���̴׷ε�" +
            "#k#L24#�巡�����" +
            "#k#L25#�ϵ�" +
            "#k#L26#������");
        } else if (selection == 100002) {
                cm.sendSimple ("#r#e[ Archer Armor ]#n#k\r\n" +
            "#k#L27#����" +
            "#k#L28#����" +
            "#k#L29#����" +
            "#k#L30#����" +
            "#k#L31#�Ź�" +
            "#k#L32#�尩\r\n\r\n\r\n\r\n" +

            "#l#b#e[ Archer Weapons ]#n#k\r\n" +
            "#k#L33#Ȱ" +
            "#k#L34#����" +
            "#k#L35#����" +
            "#k#L36#����ȭ��" +
            "#k#L37#ȭ��");
        } else if (selection == 100003) {
                cm.sendSimple ("#r#e[ Thief Armor ]#n#k\r\n" +
            "#l#L38##b����" +
            "#k#L39##b����" +
            "#k#L40##b����" +
            "#k#L41##b����" +
            "#k#L42##b�Ź�" +
            "#l#L43##b�尩" +
            "#l#L44##b ����\r\n\r\n\r\n\r\n" +

            "#l#b#e[ Thief Weapons ]#n#k\r\n" +
            "#l#L45#�������ҵ�" +
            "#l#L46#�ܰ�" +
            "#l#L47#�ƴ�" +
            "#l#L48#���̵�" +
            "#l#L49#����" +
            "#l#L50#ī��" +
	    "#k\r\n#L51#ǥâ");
        } else if (selection == 100004) {
                cm.sendSimple ("#r#e[ Pirate Armor ]#n#k\r\n" +
            "#k#L52#����" +
            "#k#L53#����" +
            "#k#L54#�Ź�" +
            "#k#L55#�尩\r\n\r\n\r\n\r\n" +

            "#l#b#e[ Pirate Weapons ]#n#k\r\n" +
            "#k#L56#��Ŭ" +
            "#k#L57#��" +
            "#k#L58#�ڵ�ĳ��" +
            "#l#L59#�ҿｴ��" +
            "#k#L60#�Ҹ�");
        } else if (selection == 100005) {
                cm.sendSimple ("#r#e[ Arcane shops ]#n#k\r\n" +
            "#k#L66#Weapons" +
            "#k#L67#Armor");
        } else if (selection == 100006) {
                cm.sendSimple ("#r#e[ Accessories Store ]#n#k" +
            "\r\n#L69#Face Accessory" +
            "#L70#Eye Accessory" +
            "#L71#Pendant" +
            "#L75#Ring" +
            "#L72#Shoulders" +
            "#L76#Earrings");
        } else if (selection == 100007) {
            cm.dispose();
            cm.openNpc(1002006);
        } else if (selection == 100008) {
            cm.dispose();
            cm.openNpc(1530210);
        } else if (selection == 100009) {
            cm.dispose();
            cm.openNpc(2411025);
        } else if (selection == 100010) {
            cm.dispose();
            cm.openNpc(1002003);         
        } else if (selection == 100011) {
            cm.dispose();
            cm.openNpc(3003228);
        } else if (selection == 100012) {
            cm.dispose();
            cm.openNpc(2520024);
        } else if (selection == 100013) {
            cm.dispose();
            cm.openNpc(9201023);
        } else if (selection == 100014) {
            cm.dispose();
            cm.openNpc(2450023);
        } else if (selection == 100015) {
            cm.dispose();
            cm.openNpc(1512003);
        } else if (selection == 100016) {
            cm.dispose();
            cm.openNpc(9001119);
        } else if (selection == 75) {
            cm.dispose();
            cm.openShop(2134004);
        } else if (selection == 76) {
            cm.dispose();
            cm.openShop(10112);
        } else if (selection == 1201000) {
            cm.dispose();
            cm.openShop(1201000);
        } else if (selection == 2142100) {
            cm.dispose();
            cm.openShop(2142100);
        } else if (selection == 100017) {
            cm.dispose();
            cm.openNpc(9001119);
        } else if (selection == 9000081) {
            cm.dispose();
            cm.openShop(9000081);
        } else if (selection >= 0) {
            cm.CollectivelyShop(selection, 1530429);
            cm.dispose();
 } else if (s == 1) {
  cm.openNpc (9010095);
 } else if (s == 2) {
  cm.openNpc (1012000);
 } else if (s == 3) {
  cm.openNpc (9001076);
 } else if (s == 4) {
  cm.openNpc (1540850);
 } else if (s == 5) {
  cm.openNpc (1540106);
        }
    }
}