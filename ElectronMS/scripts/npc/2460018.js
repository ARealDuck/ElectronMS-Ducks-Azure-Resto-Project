// Jackell Orb

importPackage(Packages.tools.RandomStream);
importPackage(Packages.constants);

var enter = "\r\n";
var seld = -1, seld2 = -1;

var xitemcode = 4001910, xqty = 1;

var list = [
//{'item' : 4310156, 'chance' : 9000},
//{'item' : 4310199, 'chance' : 9000},
//{'item' : 2439614, 'chance' : 300},
{'item' : 2591314, 'chance' : 500},
//{'item' : 1182285, 'chance' : 500},
//{'item' : 2046991, 'chance' : 500},
//{'item' : 2046992, 'chance' : 500},
//{'item' : 2047814, 'chance' : 500}
]

// chance = chance, 100 is 1 fur, 10000 is 100 fur

var �������� = 4310156;

var ���������� = [];

var �ּҿý��� = 1, �ִ�ý��� = 1000;
var �ּҰ��� = 1, �ִ���� = 1000;

var �����ý��� = -1, �������� = -1;

var ���������� = [];

var sss = false;

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
		xqty = cm.itemQuantity(xitemcode);

		var msg = "#fs11##dHi #rFragment of Fate#k #dExchange system.\r\nBoss #rFragment of Fate#k#dYou can get items with.\r\nBoss Ornament Options Information - #rBall, hemp 1 to 1000 / all stat 1 to 1000#k#fs11#"+enter;
		msg += "#d�ʿ��� ���� : #r#i"+xitemcode+"##z"+xitemcode+"# "+xqty+"��#b"+enter+enter;
		for (i = 0; i < list.length; i++) {
			per = list[i]['chance'] / 100;
			msg += "#i"+list[i]['item']+"##z"+list[i]['item']+"# ("+per+"%)"+enter;
		}
		if (xqty == 1) {
			msg += enter+"#fs11##rPlease press 'Yes' to really win.";
			cm.sendYesNo(msg);
		} else if (xqty > 1) {
			sss = true;
			cm.sendGetNumber(msg+enter+"#rHow many fragments of fate do you use.", 1, 1, xqty);
		} else if (xqty < 1) {
			msg += enter+"#fs11##rThere's not enough fragments of fate.";
			cm.sendOk(msg);
			cm.dispose();
		}
	} else if (status == 1) {
		if (sss)
			xqty = sel;
		if (!cm.haveItem(xitemcode, xqty)) {
			cm.sendOk("#fs11#Please check if the ingredients are not enough.");
			cm.dispose();
			return;
		}
		var msg = "#fs11# The following items came out! #fs11##b"+enter;
		for (i = 0; i < xqty; i++) {
			it1 = Randomizer.rand(1, list.length) - 1, it2 = Randomizer.rand(1, list.length) - 1;
			if (Randomizer.rand(1, 10000) <= list[it1]['chance']) ����������.push(list[it1]['item']);

			if (Randomizer.rand(1, 10000) <= list[it2]['chance']) ����������.push(list[it2]['item']);

			if (����������.length == 0) ����������.push(��������);

			for (a = 0; a < ����������.length; a++) {
				if (GameConstants.isEquip(����������[a])) {
					�����ý��� = Randomizer.rand(�ּҿý���, �ִ�ý���);
					�������� = Randomizer.rand(�ּҰ���, �ִ����);
					cm.gainItemAllStat(����������[a], 1, �����ý���, ��������, 5);
					msg += "#i"+����������[a]+"##z"+����������[a]+"# ATK : "+��������+" / All Stats : "+�����ý���+enter;
				} else {
					cm.gainItem(����������[a], 1);
					msg += "#i"+����������[a]+"##z"+����������[a]+"#"+enter;
				}
				//����������.push(����������[a]);
				���������� = [];
			}
			cm.gainItem(xitemcode, -1);
		}
                Packages.tools.LoggerChatting.writeLog("��������.txt", "[ "+cm.getItemName(xitemcode)+" "+xqty+"�� ] Nickname : "+cm.getPlayer().getName()+" /  AccountID : "+cm.getPlayer().getAccountID());
		cm.sendOk(msg);
		cm.dispose();
	}
}

function isEquip(id) {
	// 1272016
	return id / 1000000 == 1;
}