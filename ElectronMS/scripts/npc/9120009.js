/*
	�� ��ũ��Ʈ�� �������� �����Դϴ�.
	�������� KMS �������� ����������ϴ�.

	���̹� : ����(seonwoo__@naver.com)
*/

var status = 0;

function start() {
	status = -1;
	action(1,0,0);
}


function action(mode , type , selection){
	if (mode == -1) {
		cm.dispose();
	} else {
	if (mode == 0 && (status == 0)) {
		cm.sendOk("Have a nice day!");
		cm.dispose();
	}
	if (mode > 0)
	    status++;
	else
	    status--;
	if (status == 0) {
            cm.sendYesNo("Would you like to open your storage?")
        } else if (status == 1){
    if (cm.getPlayer().getLevel() >= 120) {
                   cm.sendStorage();
                   cm.dispose();

           } else {
               cm.sendOk("â�� �̿��ϽǷ��� 120 �����̻��� �Ǽž��մϴ�.")
               cm.dispose();
           }
        }
        }
}