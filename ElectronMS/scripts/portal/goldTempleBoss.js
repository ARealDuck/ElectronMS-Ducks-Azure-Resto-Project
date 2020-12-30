function enter(pi) {
    if (pi.getQuestStatus(3863) == 1) {
	if (pi.getPlayerCount(925120100) == 0) {
	    pi.warp(925120100,0);
	    pi.spawnMob(9100025,823,513);
	} else {
	    pi.playerMassage("�̹� ��ٳ����� �ο��� ���۵Ǿ����ϴ�.");
	}
    } else {
        var channel = pi.getChannelNumber();
    	if (channel == 6 || channel == 7 || channel == 8) {
	    if (pi.getParty() != null) {
	    	if (pi.getParty().getMembers().size() >= 2) {
		    if (pi.getPlayerCount(252030100) == 0) {
			pi.resetMap(252030100);
			pi.bossTimer(252030000,252030100,60 * 30);
		    	pi.warpParty(252030100);
			pi.spawnMob(8800200,823,513);
		    } else {
		    	pi.playerMessage("�̹� ��ٳ����� �ο��� ���۵Ǿ����ϴ�.");
		    }
	    	} else {
		    pi.playerMessage("2�� �̻� 6�� ���� ��Ƽ�� �����ؼ� ������ �ּ���.");
	    	}
	    } else {
	    	pi.showinfoMessage("��Ƽ���� ���� �̵��� �ּ���.");
	    }
    	} else {
	    pi.showinfoMessage("�� ä�ο����� ������ �� �����ϴ�. 6, 7, 8ä�� �� �� ������ �̵��ϼ���.");
	}
    }
}