function enter(pi) {
    if (pi.getQuestStatus(23033) == 1 || pi.getQuestStatus(23034) == 1 || pi.getQuestStatus(23035) == 1) {
        if (pi.getPlayerCount(931000200) == 0) {
	    pi.setTimer(310050100,931000200,60 * 15);
	    pi.warp(931000200,0);
	    pi.getPlayer().spawnAll();
	} else {
	    pi.playerMessage("�̹� �ٸ� �������� ����Ʈ�� �����ϰ� �ֽ��ϴ�.");
    	}
    } else {
	pi.playerMessage("����Ʈ�� ���� �� �϶��� ������ �����մϴ�.");
    }
}