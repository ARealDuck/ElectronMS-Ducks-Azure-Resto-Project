function enter(pi) {
    if (pi.getMap().getAllMonstersThreadsafe().size() != 0) {
	pi.playerMessage("���� ���Ͱ� �����ֽ��ϴ�.");
    } else {
	if (pi.getPlayer().getMapId() == 925076300) {
		pi.warp(925020003, 1);
	} else {
		pi.dojowarp(pi.getPlayer().getMapId() + 100);
	}
    }
}