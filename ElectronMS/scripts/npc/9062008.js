importPackage(Packages.database);
importPackage(Packages.client);
importPackage(java.lang);
importPackage(Packages.launch);
importPackage(Packages.tools);

var buymeso = "#fUI/UIMesoMarket.img/bidding/button:Buy/normal/0#"
var sellmeso = "#fUI/UIMesoMarket.img/bidding/button:Sell/normal/0#" 
var maxmeso = 7200000000000000000;

/*
	
*/

var status = -1;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) { status++; }
	if (mode == 0) { cm.dispose(); return; }
	if (mode == -1) { status--; }

	Ƚ�� = cm.getPlayer().getDateKey("mesomarket");
	if (Ƚ�� == null) {
		cm.getPlayer().setDateKey("mesomarket", 5);
	}
	
	if (cm.getC().getChannel() != 0) {
		cm.sendOk("�޼� ������ #r1ä��#k������ �̿��� �����մϴ�.");
		cm.dispose();
		return;
	}

	if (status == 0) {
		level = cm.getPlayer().getLevel();
		if (level < 100) {
			cm.sendNext("100���� ���ĺ��� ������ ã�ƿ� �ּ���. ������ ���� ���͵帱�� ����Դϴ�.");
			cm.dispose();
		}
		var a = ""
		a += "������ �޼� ���Ͽ� ���� ���� ȯ���մϴ�. ���� �Ϸ� ���� ã�ƿ��̳���?\r\n\r\n"
		a += buymeso + "\r\n"
		a += "#L0##b�޼� �����ϱ� (ų����Ʈ �� �޼�)#l\r\n"
		a += "#L4##r�Ǹ� ���� �޼� ����� ���� �;��#l\r\n\r\n\r\n"
		a += sellmeso + "\r\n"
		a += "#L1##b�޼� �Ǹ��ϱ� (�޼� �� ų����Ʈ)#l\r\n"
		a += "#L5##b�Ǹ� ų���ޱ� (�Ǹ��� �޼�)#l\r\n"
		a += "#L2##r�޼� �Ǹ� ����� ����ϰ� �;��#l\r\n"
		a += "#L3##Cgray#�޼� ���Ͽ� ���� �˰� �;��#l\r\n"
		cm.sendSimple(a);
	} else if (status == 1) {
		sel = selection;
		if (sel == 0) {
			var a = ""
			a += "�󸶸�ŭ�� �޼Ҹ� �����Ͻð� ��������?\r\n\r\n"
			a += "���� �����Ͻ� ų����Ʈ : #b" + cm.getPlayer().getNX() + " ����Ʈ#k\r\n"
			cm.sendGetText(a);
		} else if (sel == 1) {
			if (Ƚ�� <= 0) {
				cm.sendOk("�޼� �Ǹ� ����� �Ϸ翡 �ִ� 5�������� �����մϴ�.");
				cm.dispose();
				return;
			}
			var a = ""
			a += "�󸶸�ŭ�� �޼Ҹ� �Ǹ��Ͻðھ��?\r\n\r\n"
			a += "���� �����Ͻ� �޼� : #b" + cm.getMeso() + " �޼�#k\r\n"
			cm.sendGetText(a);
		} else if (sel == 2) {
			mySellList(cm.getPlayer().getName());
		} else if (sel == 3) {
			var text = " ������ �޼� ������ ���Ե� ���� ų����Ʈ �� �޼� �ŷ��� ���� ������ �����Դϴ�.";
			text += "\r\n\r\n �� �������� #b�޼Ҹ� ����#Cgray##fs11#(ų����Ʈ�� �Ǹ�)#fs12##k�ϰų� #b�޼Ҹ� �Ǹ�#Cgray##fs11#(ų����Ʈ�� ����)#k#fs12#�� �� �ֽ��ϴ�."
			text += "\r\n\r\n #e#r�� #b�޼� ���� ��û ����ϱ� #k(ų����Ʈ �� �޼�)#n\r\n";
			text += " #fs11#10,000 ų����Ʈ ������ ���ϴ� �޼Ҹ� ����� �� �ֽ��ϴ�. �� �� ����� ų����Ʈ�� ȸ���� �Ұ����Ͽ��� ������ �������ֽñ� �ٶ��ϴ�.\r\n";
			text += "\r\n#fs12# #e#r�� #b�޼� �Ǹ� ��û ����ϱ� #k(�޼� �� ų����Ʈ)#n\r\n";
			text += " #e�� #fs11#�޼� & ������ ����Ʈ ã��#n�� �����ø� �ǸŸ� ���ϴ� �޼�#Cgray#(���Ÿ� ���ϴ� ų����Ʈ)#k ������ �˻����ּ���. �˻� ����� �ִٸ� ���� ��ϵ� ������ \"#b�Ǹ��� ���̵�#k �� #r(����)#k\"�� ��µ˴ϴ�. ���Ͻô� ������ �����Ͻø� �˴ϴ�.";
			text += "\r\n#fs12# #e�� #fs11#��� �ŷ����� ����#n�� �����ø� ���� �ֱٿ� ��ϵ� ������ �ŷ��� �����մϴ�. ���� �ֱٿ� ��ϵ� ������ ���� ���� Ȯ���� �����մϴ�~ #r������ ���� �ŷ��� �ٷ� ����#k�ǹǷ� ������ �������ּ���!!";
			text += "\r\n\r\n#fs12# �޼� ���� ��û�� �� �� ������ ������ ���� �������� ���Ÿ� �Ͽ��� ���������� �޼Ұ� ���Ű� �ǿ��� �Ƚ��ϰ� ���� ���Ḧ ���ּŵ� �˴ϴ�.";
			text += "\r\n\r\n#fs12# #e#r �޼� ������ �̿��� �ü� ���� �� ���� ������ ������ ��ġ�� �ൿ�� �� ��� ���� ���� ��ġ �� Ȩ������ ���� ���� ���� �ſ� ������ ���簡 ������ �����̹Ƿ� �������ֽñ� �ٶ��ϴ�.";
			text += "\r\n\r\n#fs12# #b#n �޼� ������ �̿��� �������� �� ������ �а� �޼� ���� �̿� �ȳ��� ������ ������ ���ֵ˴ϴ�. �̰� �����ôٸ� �����ڿ��� ������ öȸ�� �� �ֽ��ϴ�. (���� ����)";
			cm.sendNext(text);
			cm.dispose();
		} else if (sel == 4) {
			getAllSellMesoList();
		} else if (sel == 5) {
			getCompleteSell(cm.getPlayer().getName());
		}
	} else if (status == 2) {
		if (sel == 0) {
			meso = Long.parseLong(cm.getText());
			var a = ""
			a += "���� ���̳ʽ� ������ �������ּ���.\r\n\r\n"
			a += "���� �Է��Ͻ� ���� �޼� : #b" + meso + " �޼�#k\r\n"
			cm.sendGetText(a);
		} else if (sel == 1) {
			meso = Long.parseLong(cm.getText());
			if (meso > cm.getMeso()) {
				cm.sendOk("�ڽ��� ������ �޼Һ��� �� ū �ݾ��� �Է��Ͻ� ���� �����ϴ�.");
				cm.dispose();
				return;
			}
			if (meso < 0 || meso == 0) {
				cm.sendOk("���� �������������. �����ϴ�.");
				cm.dispose();
				return;
			}
			var a = ""
			a += "�޼Ҹ� ���� ų����Ʈ�� �Ǹ��Ͻðھ��?\r\n\r\n"
			a += "���� �Է��Ͻ� �Ǹ� �޼� : #b" + meso + " �޼�#k\r\n"
			cm.sendGetText(a);
		} else if (sel == 2) {
			if (cm.getMeso() + Long.parseLong(getColum(selection, "l", "sellmeso")) < maxmeso) {
				cancelSellMeso(selection);
				cm.sendNext("�Ǹ� ����� ���������� ��ҵǾ����ϴ�");
				cm.dispose();
			} else {
				cm.sendNext("�Ǹ� ����� ��Ҹ� �Ͻ� �� �޼Ұ� 100�� �̻��Դϴ�. �ٽ� �õ��Ͽ��ּ���.");
				cm.dispose();
			}
		} else if (sel == 5) {
			gainKillpo(selection, cm.getPlayer().getName());
		}
	} else if (status == 3) {
		if (sel == 0) {
			minor = Long.parseLong(cm.getText());
			var a = ""
			a += "���� �÷��� ������ �������ּ���.\r\n\r\n"
			a += "���� �Է��Ͻ� ���� �޼� : #b" + meso + "#k\r\n"
			a += "���� �Է��Ͻ� ���̳ʽ� ���� : #r" + minor + "#k\r\n"
			cm.sendGetText(a);
		} else if (sel == 1) {
			mesokp = parseInt(cm.getText());
			var a = ""
			a += "�Ǹ��Ͻ� �޼� : #b" + meso + " �޼�#k\r\n"
			a += "�Ǹ��Ͻ� ���� : #d" + mesokp + " ų����Ʈ#k\r\n\r\n"
			a += "�Է��Ͻ� ������ �������� �ѹ� �� Ȯ���Ͻ� ��, ���� �̴�� ����� �Ͻð����� '��'�� �����ּ���.\r\n"
			cm.sendYesNo(a);
		}
	} else if (status == 4) {
		if (sel == 0) {
			plus = Long.parseLong(cm.getText());
			var a = ""
			a += "�����Ͻ� �޼� : #b" + meso + "#k\r\n"
			a += "���̳ʽ� ���� : #r" + minor + "#k\r\n"
			a += "�÷��� ���� : #r" + plus + "#k\r\n\r\n"
			a += "�Է��Ͻ� ������ �������� �ѹ� �� Ȯ���Ͻ� ��, ���� ������ �°� �Ǹ� ���� �޼Ұ� �ִ��� ã�� �����ø� '��'�� �����ּ���.\r\n"
			cm.sendYesNo(a);
		} else if (sel == 1) {
			if (meso <= 0 || mesokp <= 0) {
				cm.sendNext("������ �Է��Ͻ� �� �����ϴ�.\r\n���縦 �õ��� ������ �ν�ó�� �Ǿ�, �α׸� ����ϴ�. �������ֽñ� �ٶ�ڽ��ϴ�.");
				cm.dispose();
				return;
			}
			if (mesokp <= 2100000000 && meso < maxmeso) {
				var ps = MYSQL.getConnection().prepareStatement("INSERT INTO meso_market(sellname, sellmeso, sellmesokp, selldate) VALUES(?, ?, ?, now())");
				ps.setString(1, cm.getPlayer().getName());
				ps.setLong(2, meso);
				ps.setInt(3, mesokp);
				ps.executeUpdate();
				ps.close();
				cm.gainMeso(-meso);
				cm.getPlayer().setDateKey("mesomarket", Ƚ�� - 1);
				cm.sendNext("�Ǹ� ����� �Ϸ�Ǿ����ϴ�.");
				cm.dispose();
			} else {
				cm.sendNext("ų����Ʈ�� �ִ� 21������� ����� �����մϴ�.");
				cm.dispose();
			}
		}
	} else if (status == 5) {
		if (sel == 0) {
			getSellMesoList(meso, minor, plus);
		}
	} else if (status == 6) {
		buysel = selection;
		if (sel == 0) {
			selectmeso = Long.parseLong(getColum(buysel, "l", "sellmeso"));
			selectkp = parseInt(getColum(buysel, "i", "sellmesokp"));
			selectname = getColum(buysel, "s", "sellname");
			selectdate = getColum(buysel, "s", "selldate");
			var a = ""
			a += "�޼� �Ǹ��� : #b" + selectname + "��#k\r\n"
			a += "�޼� �Ǹŷ� : #b" + selectmeso + " �޼�#k\r\n"
			a += "�޼� �ǸŰ��� : #b" + selectkp + " ų����Ʈ#k\r\n"
			a += "�޼� �Ǹ� ����� : #d" + selectdate + "#k\r\n\r\n"
			a += "#h #�Բ��� �����Ͻ÷��� �����Ͻ� �޼Ҵ� ���� �����ϴ�. ���� ���Ÿ� �����Ͻðڽ��ϱ�?\r\n"
			cm.sendYesNo(a);
		}
	} else if (status == 7) {
		if (sel == 0) {
			if (cm.getPlayer().getName() == getColum(buysel, "s", "sellname")) {
				cm.sendNext("�ڽ��� ����� �޼Ҵ� �����Ͻ� �� �����ϴ�.");
				cm.dispose();
				return;
			}
			if (cm.getPlayer().getNX() >= selectkp && cm.getMeso() + selectmeso < maxmeso) {
				buyMeso(buysel, cm.getPlayer().getName());
				cm.getPlayer().modifyCSPoints(1, -selectkp, true);
				cm.gainMeso(selectmeso);
				cm.sendNext("���Ű� ���������� �̷�������ϴ�.");
				cm.dispose();
			} else {
				cm.sendNext("ų����Ʈ�� �����Ͻðų�, �޼Ҹ� �����Ͻ� ���� �޼Ұ� 100�� �̻��Դϴ�. �ٽ� �õ��Ͽ��ּ���.");
				cm.dispose();
			}
		}
	}
}

function gainKillpo(selection, chrname) {
	var ps = MYSQL.getConnection().prepareStatement("SELECT * FROM meso_market WHERE id = ? AND status = 1");
	ps.setInt(1, selection);
	var rs = ps.executeQuery();

	if (rs.next()) {
	id = rs.getInt("id");
	name = getColum(id, "s", "sellname");
	kp = getColum(id, "i", "sellmesokp");
	if (name == chrname) {
		cm.getPlayer().modifyCSPoints(1, kp, true);
		cm.sendOk("���������� ó���Ǿ����ϴ�.");
		cm.dispose();
	} else {
		cm.sendOk("�� ������");
		cm.dispose();
		return;
	}
	}

	var del = MYSQL.getConnection().prepareStatement("DELETE FROM meso_market WHERE id = ?");
	del.setInt(1, id);
	del.executeUpdate();
	del.close();
}

function getCompleteSell(name) {
	var list = ""
	var number = 0;
	var ps = MYSQL.getConnection().prepareStatement("SELECT * FROM meso_market WHERE sellname = ? AND status = 1");
	ps.setString(1, name);
	var rs = ps.executeQuery();
	list += "���� #h #���� �޼� �� �Ǹŵ� ����Դϴ�.\r\n"
	list += "�ǹ��� �����ϱ⸦ �����ø� ��� ���ɵ˴ϴ�.\r\n"
	while (rs.next()) {
		number++;
		id = rs.getInt("id");
		meso = getColum(id, "l", "sellmeso");
		killpo = getColum(id, "i", "sellmesokp")
		list += "#Cgray##L" + getColum(id, "i", "id") + "# - " + meso + "�޼� �ǸſϷ� (" + killpo + " ų����Ʈ)\r\n"
	}
	if (number == 0) {
		cm.sendOk("���� �Ǹ� �Ϸ�� �޼Ұ� �������� �ʽ��ϴ�.");
		cm.dispose();
		return;
	}
	ps.close();
	rs.close();
	cm.sendSimple(list);
}

function cancelSellMeso(id) {
	var ps = MYSQL.getConnection().prepareStatement("DELETE FROM meso_market WHERE id = ?");

	cm.gainMeso(Long.parseLong(getColum(id, "l", "sellmeso")));

	ps.setInt(1, parseInt(getColum(id, "i", "id")));
	ps.executeUpdate();
	ps.close();
}

function mySellList(name) {
	var list = ""
	var number = 0;
	var ps = MYSQL.getConnection().prepareStatement("SELECT * FROM meso_market WHERE sellmeso > 0 AND sellname = ? AND status = 0 LIMIT 100");
	ps.setString(1, name);
	var rs = ps.executeQuery();
	list += "���� #h #���� �Ǹ� ����Ͻ� �޼� ����Դϴ�.\r\n"
	list += "�Ǹ� ����� ����Ͻ� ����� �����Ͽ��ּ���.\r\n"
	list += "#Cgray#(�ִ� 100�ٱ����� ��µ˴ϴ�)#k\r\n"
	while (rs.next()) {
		number++;
		select = rs.getInt("id");
		sname = rs.getString("sellname");
		smeso = rs.getLong("sellmeso");
		skp = rs.getInt("sellmesokp");
		list += "#L" + select + "##b" + number + ". " + sname + "��, " + smeso + " �޼� [" + skp + " ų����Ʈ]#l\r\n"
	}
	if (number == 0) {
		cm.sendNext("���� #h #���� �Ǹ� ����Ͻ� �޼� �� #r���Ǹ�#k ���� �޼Ұ� �������� �ʽ��ϴ�.");
		cm.dispose();
	}
	ps.close();
	rs.close();
	cm.sendSimple(list);
}

function buyMeso(id, name) {
	var ps = MYSQL.getConnection().prepareStatement("UPDATE meso_market SET buyname = ?, buydate = now(), status = ? WHERE id = ?");

	var rs = MYSQL.getConnection().prepareStatement("SELECT * FROM characters WHERE name = ?");
	rs.setString(1, getColum(id, "s", "sellname"));
	var rss = rs.executeQuery();
	rss.next();

	if (cm.getC().getAccID() == rss.getInt("accountid")) {
		cm.sendNext("���� �������� �޼Ҵ� �����Ͻ� �� �����ϴ�.");
		cm.dispose();
		return;
	}
	rs.close();
	rss.close();

	var iter = ChannelServer.getAllInstances().iterator();

	while (iter.hasNext()) {
	var ch = iter.next();
	chr = ch.getPlayerStorage().getCharacterByName(getColum(id, "s", "sellname"));
	if (chr != null) {
		chr.dropMessage(5, "[�˸�] " + cm.getPlayer().getName() + "�Բ��� " + getColum(id, "s", "sellname") + "���� �Ǹ� ����Ͻ� " + getColum(id, "l", "sellmeso") + " �޼Ҹ� �����ϼ̽��ϴ�.");
	} else {
		cm.getPlayer().sendNote(getColum(id, "s", "sellname"), cm.getPlayer().getName() + "�Բ��� " + getColum(id, "s", "sellname") + "���� �Ǹ� ����Ͻ� " + getColum(id, "l", "sellmeso") + " �޼Ҹ� �����ϼ̽��ϴ�.");
	}
	}
	ps.setString(1, name);
	ps.setInt(2, 1);
	ps.setInt(3, id);
	ps.executeUpdate();
	ps.close();

	FileoutputUtil.log(FileoutputUtil.���Ϸα�, "�Ǹ��� : " + getColum(id, "s", "sellname") + " / ������ : " + cm.getPlayer().getName() + " [ �Ǹ� �޼� : " + getColum(id, "l", "sellmeso") + ", ���� ų�� : " + getColum(id, "i", "sellmesokp") + " ]");
}

function getColum(id, type, str) {
	var list = ""
	var ps = MYSQL.getConnection().prepareStatement("SELECT * FROM meso_market WHERE id = ?");
	ps.setInt(1, id);
	var rs = ps.executeQuery();
	if (rs.next()) {
		if (type == "i") { // int
			list += rs.getInt(str);
		} else if (type == "l") { // long
			list += rs.getLong(str);
		} else if (type == "s") { // string
			list += rs.getString(str);
		}
		ps.close();
		rs.close();
	}
	return list;
}

function getAllSellMesoList() {
	var list = ""
	var number = 0;
	var ps = MYSQL.getConnection().prepareStatement("SELECT * FROM meso_market WHERE sellmeso > 0 AND status = 0 ORDER BY sellmesokp DESC LIMIT 100").executeQuery();
	list += "���� �������� �޼� ���� ��Ȳ�Դϴ�.\r\n"
	list += "#Cgray#(�ִ� 100�ٱ����� ��µ˴ϴ�)#k\r\n\r\n"
	while (ps.next()) {
		number++;
		select = ps.getInt("id");
		sname = ps.getString("sellname");
		smeso = ps.getLong("sellmeso");
		skp = ps.getInt("sellmesokp");
		list += "#b" + number + ". " + sname + "��, " + smeso + " �޼� [" + skp + " ų����Ʈ]\r\n"
	}
	if (number == 0) {
		cm.sendNext("���� �������� �Ǹ� ��ϵ� �޼Ұ� �������� �ʽ��ϴ�.");
		cm.dispose();
	}
	ps.close();
	cm.sendSimple(list);
}

function getSellMesoList(wantMeso, minor, plus) {
	var list = ""
	var number = 0;
	if (wantMeso <= minor) {
		cm.sendNext("���� ���̳ʽ� ������ �����Ͻ÷��� �޼� ���Ϸ� �����Ͻ� �� �����ϴ�.");
		cm.dispose();
		return;
	}
	if ((wantMeso + plus) >= maxmeso) {
		cm.sendNext("���� �÷��� ������ �����Ͻ÷��� �޼ҿ��� ���� " + maxmeso + " �̻� �Ѱ� �����Ͻ� �� �����ϴ�.");
		cm.dispose();
		return;
	}
	var minorlength = wantMeso > minor ? (wantMeso - minor) : wantMeso;
	var pluslength = (wantMeso + plus) < maxmeso ? (wantMeso + plus) : wantMeso;
	var ps = MYSQL.getConnection().prepareStatement("SELECT * FROM meso_market WHERE sellmeso >= " + minorlength + " And sellmeso <= " + pluslength + " AND status = 0 ORDER BY sellmesokp DESC LIMIT 100").executeQuery();
	list += "���� �������� �޼� ���� ��Ȳ�Դϴ�.\r\n"
	list += "[��������] ���̳ʽ� : #r" + minor + "#k, �÷��� : #r" + plus + "#k\r\n"
	list += "#Cgray#(�ּ� " + minorlength + " �޼Һ��� �ִ� " + pluslength + " �޼ұ��� ��µ˴ϴ�)#k\r\n"
	while (ps.next()) {
		number++;
		select = ps.getInt("id");
		sname = ps.getString("sellname");
		smeso = ps.getLong("sellmeso");
		skp = ps.getInt("sellmesokp");
		if (smeso >= minorlength && smeso <= pluslength) {
			list += "#L" + select + "##b" + number + ". " + sname + "��, " + smeso + " �޼� [" + skp + " ų����Ʈ]#l\r\n"
		}
	}
	if (number == 0) {
		cm.sendNext("���� �޼� ���Ͽ� �Է��Ͻ� ���ǿ� �°� �ǸŰ� ��� �� �޼Ұ� �������� �ʽ��ϴ�.");
		cm.dispose();
	}
	ps.close();
	cm.sendSimple(list);
}