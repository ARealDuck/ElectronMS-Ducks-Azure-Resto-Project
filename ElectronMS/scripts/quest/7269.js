/*

	���� KMS �� �ҽ��� ��ũ��Ʈ �Դϴ�.

	���ǽþ��̵� : 
	
	���ǽ� �̸� : ����

	���ǽð� �ִ� �� : �����̵���

	���ǽ� ���� : ����Ʈ


*/

var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
		qm.forceCompleteQuest(7269);
		qm.dispose();
        }
    }
}