function enter(pi) {
    if (pi.getPlayer().getLevel() < 30) {
	pi.getPlayer().message(5, "���� 30�̻� ���� �����մϴ�.");
	return false;
    }
    pi.playPortalSE();
    pi.setSavedMapId(pi.getMapId());
    pi.warp(910001000, 0);
    return true;
}
