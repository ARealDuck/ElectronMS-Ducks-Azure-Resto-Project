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
    if (!cm.getPlayer().isGM()) {
	cm.sendOk("GM�� ������ ���� �ɾ� ������ ������ �� �ִٱ�YO!\r\n");
	cm.dispose();
	return;
    }
    if (status == 0) {
        var str = "";
        str += "#e#r�� �� ��#k#n ¥������ #e#b100�� ���� <���� �����>!#k#n#l\r\n";
        str += "���ӿ� �����ϰڳ�YO?\r\n";
        str += "������ �ٸ� ������ ��ٸ��� �ִٱ�YO!\r\n";
        str += "�̰� ��ȭ�ı�YO!\r\n";
        str += "���ǿ� �ּ� 5���� �־�� ����ȴ�YO!\r\n\r\n";
        str += "#b('��'�� ������ ������������� �̵� �ȴٱ�YO!)#k#l";
        cm.sendYesNo(str);
    } else if (status == 1) {
        if (cm.getPlayer().getMapId() == 922290000) {
            cm.StartBingoGame();
            cm.dispose();
        }
    }
}
