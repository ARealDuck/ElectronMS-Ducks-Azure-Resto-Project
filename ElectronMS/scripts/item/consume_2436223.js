importPackage(Packages.tools.RandomStream);
importPackage(java.lang);

var enter = "\r\n";
var seld = -1;

var need = 2436223, qty = 1; // Box code, count

var �ߵ��ּ� = 50000000;
var �ߵ��ִ� = 200000000;

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
		var msg = "#i"+need+"##z"+need+"#Get 50 million to 200 million additional damage using!"+enter;
		msg += "#fs11##bPlease press '��' to really use it.";
		cm.sendYesNo(msg);
	} else if (status == 1) {
		if (!cm.haveItem(need, qty)) {
			cm.sendOk("I don't have enough items.");
			cm.dispose();
			return;
		}
		cm.gainItem(need, -qty);
		rc = Randomizer.rand(�ߵ��ּ�, �ߵ��ִ�);
                        cm.getPlayer().gainAddDamage(rc);
		cm.getPlayer().Message(rc+" Obtained additional damage.");
		cm.sendOk(rc+" Additional damage is paid.");
		cm.dispose();
	}
}