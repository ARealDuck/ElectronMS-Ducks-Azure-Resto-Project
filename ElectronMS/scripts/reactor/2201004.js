function act(){
    rm.mapMessage(5, "������ �տ��� <���� �տ��� ����> ���� ä�������ϴ�!");
    rm.changeMusic("Bgm09/TimeAttack");
    rm.spawnMonster(8500000, -410, -400);
    rm.closeMapDoor(220080000, 3600);
    rm.scheduleTimeMoveMap(220080000, 220080001, 3600, true);
    rm.mapMessage(6, "[�˸�] ���� ���̵� Ÿ�Ӿƿ��Ŵ��� - ��Ǯ������ - �۵��Ǿ����ϴ�. ����� ���ϴ�!");
    rm.mapMessage(5, "[���] ���� ���̵尡 ���۵Ǿ� ���� ä�ο� ���� ���� ��Ÿ���� ���۵˴ϴ�.");
}