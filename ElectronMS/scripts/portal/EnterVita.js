function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, sel) {
    if (mode == 1) {
        status++;
    } else {
        cm.sendOk("�� �����߾�YO! �� ��ٿ����� ��YO!");
        cm.dispose();
        return;
    }
    if (status == 0) {
        cm.sendYesNo("�༺ #b#e��Ÿ#k#n�� �����Ͻðڳ�YO?");
    } else if (status == 1) {
        cm.warp(993016000);
        cm.dispose();
    }
}