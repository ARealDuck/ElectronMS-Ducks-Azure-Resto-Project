var status = -1;

function start() {
    action (1, 0, 0);
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
	cm.sendYesNo("���� �����ϴ°ž�? �׷��ϱ� �ڸ����� ����� ���ݾ�.");
    } else if (status == 1) {
	cm.dispose();
	cm.warp(925020002);
	cm.openNpcCustom(cm.getClient(), 0, "dojo_exit");
    }
}