importPackage(Packages.constants);

var status = -1;
var sel = 0;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    blockgamelimit = cm.getPlayer().getBlockGameLimit(cm.getC().getAccountName());
    blockgamedays = cm.getPlayer().getBlockGameDays(cm.getC().getAccountName());
    todays = GameConstants.getCurrentDate_NoTime();
    if (blockgamedays != todays) {
	cm.getPlayer().setBlockGameLimit(5, cm.getC().getAccountName());
	cm.getPlayer().setBlockGameDays(todays, cm.getC().getAccountName());
    }
    switch (status) {
        case 0:
            var t = "�츮�� ����� ��Ű���� ��. �츮�� ������ ����� �ž�.\r\n\r\n";
	t += "#h #���� �÷��� ���� ȸ�� : " + blockgamelimit + "��\r\n"
            t += "#L0##b�ͱۿͱ� �Ͽ콺�� �����ϰ� �;��.\r\n";
            t += "#L1#�ͱۿͱ� �Ͽ콺�� ���� �˰� �;��.\r\n#l";
            t += "#L2#�ͱۿͱ� ������ �̿� �ϰ� �;��.#l";
            cm.sendSimple(t);
            break;
        case 1:
            sel = selection;
            if (sel == 0) {
                cm.sendYesNo("���ݹٷ� #b#e�ͱۿͱ� �Ͽ콺#n#k�� �����Ұž�?\r\n��¼�� �̹� �ͱۿͱ� �Ͽ콺������ ������.\r\n\r\n#r#e(���� �߿��� �ػ󵵰� 1024x768�� ���� �˴ϴ�.)#n#k");
            } else if (sel == 1) {
                cm.sendNext("#r#e�ͱۿͱ� �Ͽ콺#n#k�� �ſ� ���� ����. ������ �����Ե� �ʿ��� �۾��̾�. ����ϴٰ� �͸��� ������ �״ϱ�.... �����϶�!");
            } else if (sel == 2) {
                cm.dispose();
                cm.openNpc(3003102);
            }
            break;
        case 2:
            if (sel == 1) {
                cm.sendNextPrev("�� �� �� ���� ������ ��Ÿ�� �ž�. #r#espace#n#kŰ�� ������ ���� �� �ִµ�. �ٷ� �������� �������� �ʿ�����.");
            } else if (sel == 0) {
		if (blockgamelimit > 0) {
			if (cm.getPlayer().getLevel() < 160) {
            			cm.sendOk("#e#h ##n���� ������ #e#b160 �̻�#k#n�� ���� �����Ƿ� �ͱۿͱ� �Ͽ콺�� ���� �� �� �����ϴ�.");
            			cm.dispose();
			}else{
	    			cm.getPlayer().setBlockGameLimit(blockgamelimit - 1, cm.getC().getAccountName());
	   			cm.BlockGameTimeMove(993017000, 993017200, 5 * 60);
                			cm.StartBlockGame();
                			cm.dispose();
			}
		} else {
			cm.sendNext("������ �̹� �ִ� �̿� �����ϽŸ�ŭ �̿��� �ϼ̽��ϴ�.");
			cm.dispose();
		}
            }
            break;
        case 3:
            cm.sendNextPrev("���� ���� ���� ���� ���߸� ��¦�̴� ����Ʈ�� �Բ� ���� ���� ������ ȹ���� �� ����.\r\n\r\n");
            break;
        case 4:
            cm.sendNextPrev("�� ���� ���� ���� ������ ���ߴٰ� �ϴ��� ������ �����ϴ� �� �ƴϾ�. �ٸ� �״� ���� ���� �پ�� ������.");
            break;
        case 5:
            cm.sendNextPrev("���� �پ����� ���� �ױ� �� ��ƴٴ� �� �� �� �ص� �˰���? �׷��� �������� �ʿ��� �۾��̶�� �ž�.");
            break;
        case 6:
            cm.sendNextPrev("10������ ����� ����� �� �� ���� ���ܳ��� �� ������ �׾Ҵ��� �ñ��ϸ� ���� ��� ����� �ٶ��.");
            break;
        case 7:
            cm.sendPrev("������ ���� �׾� �ø����� ��! �� ���⼭ ������ ���Ѻ��� �ְھ�.");
            cm.dispose();
            return;
            break;
    }
}
