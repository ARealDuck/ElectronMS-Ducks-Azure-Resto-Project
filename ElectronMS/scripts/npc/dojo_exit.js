function start() {
	cm.getPlayer().setDojoStartTime(0);
	cm.getPlayer().setDojoStopTime(0);
	cm.getPlayer().setDojoCoolTime(0);

	time = Packages.tools.FileoutputUtil.CurrentReadable_Time();
	txt = "��, ��� ���Ҿ�. ��� �����غ����.\r\n";
	txt += "(���� �ð� :" + time.substring(2, 4) + "/" + time.substring(5, 7) + "/" + time.substring(8, 10) + ", " + time.substring(11, 13) + "�� " + time.substring(14, 16) + "��)\r\n";
	txt += "\r\n";
	txt += "<�ֱ� ��� ����>\r\n#b";
	txt += " -��ŷ ����: ���\r\n";
	txt += " -Ŭ���� ��: " + cm.getPlayer().getKeyValue_new(3, "dojo") + " ��\r\n";
	txt += " -�ɸ� �ð�: " + cm.getPlayer().getKeyValue_new(3, "dojo_time") + " ��\r\n";
	txt += "\r\n#k";
	txt += "���� ��Ϻ��� ���� ����� �޼��ߴٸ� #r���� ����ǥ#k�� �ڵ����� ��ϵ� �ž�.\r\n";
	txt += "��Ͽ� �ð��� ���� �ɸ� ���� ������ �˾Ƶζ��.";
	cm.sendOkS(txt, 4, 2091005);
	cm.getPlayer().saveToDB(false, false);
	cm.dispose();
}