

function enter(pi) {
    if (pi.getQuestRecord(70001).getCustomData() == "3") {
        pi.openNpc(9000396,"jobchoice");
	return true;
    } else {
	pi.getPlayer().message("'�ٹ�' ���� ���� ���� �ɾ��ּ���.");
        return false;
    }
}