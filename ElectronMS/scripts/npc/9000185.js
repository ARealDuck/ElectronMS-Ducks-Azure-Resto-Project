


/*

KMS 1.2.174 �����ý��丮 ������Ʈ




var status = -1;
var select = 0;
importPackage(java.util);
importPackage(java.lang);
importPackage(Packages.hina.tools);

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
    
    if (status == 0) {
        cm.sendSimple("�ȳ�,���� #b���¶���#k�� #r�ξ⽺Ÿ��#k�� ����ϴ�\r\n  ���̸��̾� �Ʒ� ��Ͽ��� �����غ�.\r\n#b#L0#����#b#L3#����#b#L2#�ѹ�#L1#����#n#k#b#L4#����#r#L5##b�Ź�#k#L6##b����#k");
    } else if (status == 1) {
        select = selection;
        if (select == 0) {
            cm.dispose();
            cm.openShop(2491004);
        }
        if (select == 1) {
		cm.dispose();
		cm.openShop(2491007);
        }
        if (select == 2) {
		cm.dispose();
		cm.openShop(2491006);
        }
        if (select == 3) {
		cm.dispose();
		cm.openShop(2491005);
        }
        if (select == 4) {
		cm.dispose();
		cm.openShop(2491008);
        }
        if (select == 5) {
		cm.dispose();
		cm.openShop(2491009);
        }
        if (select == 6) {
		cm.dispose();
		cm.openShop(2491010);
        }
        }
    }

*/
