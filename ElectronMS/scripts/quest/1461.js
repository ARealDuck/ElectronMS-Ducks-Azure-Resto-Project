/* 

   MapleTespia Scripts Source

   [�׸�����] ����ġ

   QuestNumber : 2968

   QuestName : [����ġ] �̽��� ���
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;

        else if (status == 0){
              qm.dispose();
              return;
	} else
	    status--;
	if (status == 0) {
	    qm.sendOk("#e���� �ٴ�3#n���� ���� ���� �������� ��� #b���� ���� 30��#k�� �����ּ���. �Ƹ� �׷� ���� �丮�� ���� �� �����ſ���.");
        } else if (status == 1) {
	    qm.forceStartQuest();
            qm.dispose();
	}
}

function end(mode, type, selection) {
if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1)
	    status++;
	else
	    status--;
	if (status == 0) {
	    qm.sendOk("�̰����� ���� �Ǹ��� �丮�� ���� �� �ְھ��. ���߿� ��ſ��Ե� ���� �� �� �ִ� ��ȸ�� �帮�ھ��.");
	    qm.dispose();		
	}
    }
}