


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Guardian Project Development Source Script)

	���Ǹ��Ŵ��� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 1012007

	���ǽ� �̸� : ���ε�

	���ǽð� �ִ� �� : ��׽ý� : ���å�� (100000202)

	���ǽ� ���� : ���û�


*/

var status = -1;

function start() {
    status = -1;
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
        cm.warp(100000000,0);
        //cm.gainItem(4310218,1); Arcane coins
        //cm.gainItem(2431289,1); // Box not working
        cm.gainItem(4310241,1); // Chair Coin
        cm.gainItem(2450001,1); // exp coupon
        cm.gainItem(4310185, 500) // Purple orb
        cm.dispose();
        return;
    }
}
