importPackage(Packages.server.items);
importPackage(Packages.tools.RandomStream);
importPackage(Packages.packet.creators);

var ���� = [
	
{'itemid' : 1190101, 'qty' : 1, 'price' : 50000},
{'itemid' : 1190302, 'qty' : 1, 'price' : 50000},
{'itemid' : 1190513, 'qty' : 1, 'price' : 50000},
{'itemid' : 1190515, 'qty' : 1, 'price' : 50000},
{'itemid' : 1190517, 'qty' : 1, 'price' : 50000},
{'itemid' : 1190519, 'qty' : 1, 'price' : 50000},
{'itemid' : 1190521, 'qty' : 1, 'price' : 50000},
{'itemid' : 1190530, 'qty' : 1, 'price' : 50000},
{'itemid' : 1190532, 'qty' : 1, 'price' : 50000},
{'itemid' : 1190601, 'qty' : 1, 'price' : 50000},
{'itemid' : 1190701, 'qty' : 1, 'price' : 50000},
{'itemid' : 1190801, 'qty' : 1, 'price' : 50000},
{'itemid' : 1190900, 'qty' : 1, 'price' : 50000},
{'itemid' : 1191001, 'qty' : 1, 'price' : 50000}
]

var enter = "\r\n";
var seld = -1;
var bp = -1;

var �ý����ּ� = 1, �ý����ִ� = 200;
var �����ּ� = 1, �����ִ� = 150;
var �����ּ� = 1, �����ִ� = 30;
var �ý������ּ� = 1, �ý������ִ� = 10;
var �湫�ּ� = 1, �湫�ִ� = 20;

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
		bp = getPoint();
		var msg = "#fs11##dHi. Azure boss point shop.\r\n#dOption Information#k\r\n#rAll Stats#k - 1 ~ 200, #rAttack Power#k - 1 ~ 150\r\n#rBoss Monster Attack Damage#k - 1 ~ 30%\r\n#rAll Stats %#k - 1 ~ 10%\r\n#rIgnore Monster DEF#k - 1 ~ 20%#b#fs11#" +enter;
		msg += "Now #h #'S boss point : "+bp+enter;
		if (cm.getPlayer().isGM()) msg += "#L9999#(GM Debug) 10000 Boss Points"+enter;
		msg += "#L9000##i1002520# #dI want to drill a pocket slot#k#r (BP 100000P)#k"+enter;
		for (i = 0; i < ����.length; i++) msg += "#L"+i+"##b#i"+����[i]['itemid']+"##z"+����[i]['itemid']+"# "+����[i]['qty']+"��#k"+enter+"����Price : #b"+����[i]['price']+"P#k"+enter;

		cm.sendSimple(msg);
	} else if (status == 1) {
		if (sel == 9999) {
			gainP(10000);
			cm.getPlayer().Message("Congratulations! Earned the Boss Point 10000P!");
			cm.dispose();
		} else if (sel == 9000) {
			cm.dispose();
			cm.openNpc(3001208);
		} else {
			seld = sel;
			var msg = "#fs11#Information of the item you want to purchase."+enter;
			msg += "Item : #b#i"+����[seld]['itemid']+"##z"+����[seld]['itemid']+"##k"+enter;
			msg += "Count : #b"+����[seld]['qty']+"�� #k"+enter;
			msg += "Price : "+����[seld]['price']+"P#k"+enter;
			msg += "If you really want to buy please press 'Yes'.";
			cm.sendYesNo(msg);
		}
	} else if (status == 2) {
		item = ����[seld]['itemid'];
		qty = ����[seld]['qty'];
		price = ����[seld]['price'];
		if (bp >= price) {
			//cm.gainItem(item, qty);

			s1 = Randomizer.rand(�ý����ּ�, �ý����ִ�);
			s2 = Randomizer.rand(�����ּ�, �����ִ�);
			s3 = Randomizer.rand(�湫�ּ�, �湫�ִ�);
			s4 = Randomizer.rand(�����ּ�, �����ִ�);
			s5 = Randomizer.rand(�ý������ּ�, �ý������ִ�);
			gainEmblrem(item, s1, s2, s3, s4, s5);

			pay(price);
			cm.sendOk("Your purchase is complete.");
			cm.dispose();
		} else {
			cm.sendOk("#bBoss point#kSeems to lack.");
			cm.dispose();
		}
	}
}

function gainEmblrem(itemid, allstat, atk, ignoredef, bossdmg, altper) {
                ItemInfo = ItemInformation.getInstance().getEquipById(itemid);
		ItemInfo.setStr(allstat);
		ItemInfo.setDex(allstat);
		ItemInfo.setInt(allstat);
		ItemInfo.setLuk(allstat);
		ItemInfo.setWatk(atk);
		ItemInfo.setMatk(atk);
		ItemInfo.setBossDamage(ignoredef);
		ItemInfo.setIgnoreWdef(bossdmg);
		ItemInfo.setAllStatP(altper);

                InventoryManipulator.addFromDrop(cm.getClient(), ItemInfo, false);
}

function getPoint() {
	if (cm.getPlayer().getKeyValue("BossP") == null)
		cm.getPlayer().setKeyValue("BossP", 0);

	return cm.parseInt(cm.getPlayer().getKeyValue("BossP"));
}

function pay(p) {
	ret1 = cm.parseInt(cm.getPlayer().getKeyValue("BossP"));
	fin = ret1 - p;

	cm.getPlayer().setKeyValue("BossP", ""+fin);
}
function gainP(p) {
	ret1 = cm.parseInt(cm.getPlayer().getKeyValue2("BossP"));
	fin = ret1 + p;

	cm.getPlayer().setKeyValue("BossP", ""+fin);
}