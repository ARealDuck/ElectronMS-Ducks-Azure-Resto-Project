importPackage(java.sql);

importPackage(java.util);
importPackage(java.lang);
importPackage(java.io);

importPackage(Packages.client.items);

// �޼� ���� ���� (adddmg : �߰�������, addatk : �߰��ۼ�Ʈ (������ 0))
var enter = "\r\n";
var seld = -1;
var reward = [
	{'adddmg' : 200000000, 'itemid' : 1142900, 'allstat' : 150, 'atk' : 50,'addatk' : 20}, // 1�� �ý��� ����
	{'adddmg' : 200000000, 'itemid' : 1142901, 'allstat' : 200, 'atk' : 50, 'addatk' : 30}, // 2��
	{'adddmg' : 200000000, 'itemid' : 1142902, 'allstat' : 250, 'atk' : 80, 'addatk' : 50}, // 3��
	{'adddmg' : 300000000, 'itemid' : 1142903, 'allstat' : 300, 'atk' : 80, 'addatk' : 50}, // 4��
	{'adddmg' : 300000000, 'itemid' : 1142904, 'allstat' : 400, 'atk' : 120, 'addatk' : 100}, // 5��
	{'adddmg' : 300000000, 'itemid' : 1142905, 'allstat' : 500, 'atk' : 120, 'addatk' : 150}, // 6��
	{'adddmg' : 500000000, 'itemid' : 1142906, 'allstat' : 700, 'atk' : 200, 'addatk' : 150}, // 7��
	{'adddmg' : 500000000, 'itemid' : 1142907, 'allstat' : 900, 'atk' : 200, 'addatk' : 250}, // 8��
	{'adddmg' : 500000000, 'itemid' : 1142908, 'allstat' : 1200, 'atk' : 300, 'addatk' : 300}, // 9��
	{'adddmg' : 800000000, 'itemid' : 1142909, 'allstat' : 1500, 'atk' : 300, 'addatk' : 300}, // 10��
	{'adddmg' : 800000000, 'itemid' : 1142910, 'allstat' : 2000, 'atk' : 450, 'addatk' : 400}, // 11��
	{'adddmg' : 800000000, 'itemid' : 1142911, 'allstat' : 2500, 'atk' : 450, 'addatk' : 400}, // 12��
	{'adddmg' : 1000000000, 'itemid' : 1142912, 'allstat' : 3000, 'atk' : 800, 'addatk' : 400}, // 13��
	{'adddmg' : 1000000000, 'itemid' : 1142913, 'allstat' : 4000, 'atk' : 1000, 'addatk' : 500} // 14��
]

function start() {
	status = -1;
	action(1, 0, 0);
}
function action(mode, type, sel) {
	if (mode == 1) {
		status++;
	} else {
		cm.dispose();
		return;
    	}
	if (status == 0) {
		if (cm.getQuestRecord(201801).getCustomData() == null) {
			cm.sendOk("#fs11#Does not match current rating");
			cm.dispose();
			return;
		}
		//+Integer.parseInt(cm.getQuestRecord(201801).getCustomData())
		var msg = "#fs11# #d�ȳ��ϼ���. ���¶��� ȯ����� ���� �ý��� �Դϴ�.\r\n �ڽ��� ��ް� �´� ������ �����Ͽ� �����Ͻñ�ٶ��ϴ�."+enter;
		for (i = 0; i < reward.length; i++) {
			msg += "#L"+i+"#"+getColor(i+1)+(i+1)+"#fs11#�� �޼� ���� ("+ getEnable(i+1)  +")#fs12#"+enter;
			//msg += "���� ������ : #b#i"+reward[i]['itemid']+"##z"+reward[i]['itemid']+"# (�ý��� : "+reward[i]['allstat']+" ���� : "+reward[i]['atk']+")#k"+enter+enter;
		}
		cm.sendSimple(msg);
	} else if (status == 1) {
		seld = sel + 1;
		if (!isGet(seld)) {
			cm.sendOk("#fs11#�̹� ���� �����Դϴ�.");
			cm.dispose();
			return;
		}
		if (!isOkStar(seld)) {
			var msg = seld+"�� ���� ����� ������ �����ϴ�.#fs11##b"+enter;
			msg += " �߰������� : "+reward[sel]['adddmg']+enter;
			msg += " #fs11##k#k#d#fs11##fUI/GuildMark.img/Mark/Pattern/00004001/9# �߰��ۼ�Ʈ : "+reward[seld - 1]['addatk']+ enter ;
			msg += " ��������� : #i"+reward[sel]['itemid']+"##z"+reward[sel]['itemid']+"# (�ý��� : "+reward[sel]['allstat']+" ���� : "+reward[sel]['atk']+")"+enter;
			cm.sendOk(msg);
			cm.dispose();
			return;
		}
		var msg = seld+"�� ���� ����� ������ �����ϴ�.#fs11##b"+enter;
		msg += " #fs11##k#k#d#fs11##fUI/GuildMark.img/Mark/Pattern/00004001/9# �߰������� : "+reward[sel]['adddmg']+enter;
		msg += " #fs11##k#k#d#fs11##fUI/GuildMark.img/Mark/Pattern/00004001/9# �߰��ۼ�Ʈ : "+reward[seld - 1]['addatk']+enter;
		msg += " #fs11# ��������� : #i"+reward[sel]['itemid']+"##z"+reward[sel]['itemid']+"# (�ý��� : "+reward[sel]['allstat']+" ���� : "+reward[sel]['atk']+")"+enter;
		msg += " #fs11# ���� �����÷��� '��'�� �����ּ���.";
		cm.sendYesNo(msg);
	} else if (status == 2) {
			if (!isGet(seld)) {
				cm.sendOk("#fs11#�̹� ���� �����Դϴ�.");
				cm.dispose();
				return;
			}
			if (!isOkStar(seld)) {
				cm.sendOk("#fs11#���� "+(seld+1)+"���� �´°ǰ���?"); 
				cm.dispose();
				return;
			}
			if (seld != 1) {
				if (cm.getPlayer().getInventory(MapleInventoryType.EQUIPPED).findById(reward[seld-2]['itemid']) != null) {
					cm.sendOk("#fs11#���� �ܰ��� �������� #z" + reward[seld-2]['itemid'] + "# ������ �����Ͽ��ּ���.");
					cm.dispose();
					return;
				}
				cm.gainItem(reward[seld-2]['itemid'], -1);
			} else {
				if (cm.getPlayer().getInventory(MapleInventoryType.EQUIPPED).findById(1142282) != null) {
					cm.sendOk("#fs11#���� �ܰ��� �������� #z1142282# ������ �����Ͽ��ּ���.");
					cm.dispose();
					return;
				}
				cm.gainItem(1142282, -1);
			}
			cm.getPlayer().setAddDamage(cm.getPlayer().getAddDamage() + reward[seld-1]['adddmg']);
                                   	 cm.getPlayer().setDamageHit2(cm.getPlayer().getDamageHit2() + reward[seld-1]['addatk']);
			cm.gainItemAllStat(reward[seld-1]['itemid'], 1, reward[seld-1]['allstat'], reward[seld-1]['atk']);
			cm.getQuestRecord(Integer.parseInt(95951+""+seld)).setCustomData(1);
			cm.sendOk("#fs11# ��� �޼� ������ �����Ͽ����ϴ�");
			cm.dispose();
	}
}
function isGet(name) {
	return cm.getQuestRecord(Integer.parseInt(95951+""+name)).getCustomData() == null ? true : false;
//cm.CountCheck(name, 1) ? true : false;
}

function getColor(name) {
	return isGet(name) ? "#b" : "#r";
}

function getEnable(star) {
	var ret = "";
	if (isGet(star) && Integer.parseInt(cm.getQuestRecord(201801).getCustomData()) >= star) ret = "#b���� ����#k"; else ret = "#r���� �Ұ�#k";
	return ret;
}
function isOkStar(star) {
	return Integer.parseInt(cm.getQuestRecord(201801).getCustomData()) >= star ? true : false;
}