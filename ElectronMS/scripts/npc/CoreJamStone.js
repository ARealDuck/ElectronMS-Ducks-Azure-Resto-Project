var status = -1;
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        cm.sendYesNoS("V �ھ� ������ ����Ͽ� �ھ��������� �����Ͻðڼ�?\r\n\r\n#b�ھ������� ���ۿ� �ʿ��� V �ھ� ���� ���� : 45\r\n���� ������ V �ھ� ���� ���� : " + cm.getPlayer().getCoreq(), 4);
    } else {
        if (cm.getPlayer().getCoreq() < 45) {
            cm.sendOkS("�ھ��������� �����ϱ� ���ؼ��� 45���� V �ھ� ������ �ʿ��Ͽ�. �ʿ� ���� �ھ �����ؼ� V �ھ� ������ ���� �� �õ��Ͻÿ�.", 4);
            cm.dispose();
            return;
        }
        if (!cm.canHold(2435719)) {
            cm.sendOkS("�ھ��������� �����ϱ� ���ؼ��� 1ĭ �̻��� �Һ�ĭ�� �ʿ��Ͽ�.", 4);
            cm.dispose();
            return;
        }
        cm.getPlayer().gainCoreq(-45);
        cm.gainItem(2435719, 1);
        cm.sendOkS("V �ھ� ������ #b45��#k ����Ͽ� �ھ��������� �������. �κ��丮�� Ȯ���� ���ÿ�.", 4);
    }
}