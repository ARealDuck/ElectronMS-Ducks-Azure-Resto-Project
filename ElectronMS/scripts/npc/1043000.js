
importPackage(Packages.constants);
importPackage(Packages.client.Item);
importPackage(Packages.client.inventory);
importPackage(Packages.client);
importPackage(Packages.client.stats);

/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Guardian Project Development Source Script)

	���Ǹ��Ŵ��� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 1012007

	���ǽ� �̸� : ���ε�

	���ǽð� �ִ� �� : ��׽ý� : ���å�� (100000202)

	���ǽ� ���� : ���û�


*/

/*var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        status --;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {
        cm.warp(910130100, 0);
        cm.dispose();
        return;
    }
}*/

// Donation Shop


/*var enter = "\r\n";
var shop = [
	//{'itemid' : 2023654, 'qty' : 15, 'price' : 999999999},
        //{'itemid' : 2023207, 'qty' : 15, 'price' : 999999999},
        //{'itemid' : 2436289, 'qty' : 1, 'price' : 999999999},03015804
        {'itemid' : 2430495, 'qty' : 5, 'price' : 1000},
        {'itemid' : 3015155, 'qty' : 1, 'price' : 40000},
        {'itemid' : 5121060, 'qty' : 5, 'price' : 10000}
        

];

var need = cm.getPlayer().getRC();

var seld = -1;

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
		var msg = "#fs11##k#k#d#fs11##fUI/FarmUI.img/objectStatus/star/whole# #dGood morning. Azure Donation Point Shop.#k"+enter;
		msg += "#fs11##k#k#k#fs11##fUI/FarmUI.img/objectStatus/star/whole# Current DP : #r["+cm.getPlayer().getRC()+"P] #kAvailable."+enter;
		for (i = 0; i < shop.length; i++) {
			msg += "#L"+i+"##r#i"+shop[i]['itemid']+"##z"+shop[i]['itemid']+"# "+shop[i]['qty']+"#k"+enter;
			msg += "���� Required DP : #r"+shop[i]['price']+"#k"+enter;
		}
		cm.sendSimple(msg);
	} else if (status == 1) {
		seld = sel;
		var msg = "#fs11#Information of the item you want to purchase."+enter;
		msg += "*- Item : #r#i"+shop[seld]['itemid']+"##z"+shop[seld]['itemid']+"##k"+enter;
		msg += "*- Count�� : #r"+shop[seld]['qty']+" #k"+enter;
		msg += "*- Price�� : #i"+need+"##z"+need+"# #r"+shop[seld]['price']+"#k"+enter+enter;
		msg += "*- #bIf you really want to buy please press 'Yes'.";
		cm.sendYesNo(msg);
	} else if (status == 2) {
		item = shop[seld]['itemid'];
		qty = shop[seld]['qty'];
		price = shop[seld]['price'];

                cm.sendYesNo("Really chosen #i" + shop[seld]['itemid'] + "##b#t" + sel + "##k Would you like to be paid?\r\nYou will use ["+price+"] #b DP.");
                
                }
             else if (status == 3) {
             if (cm.getPlayer().getRC() < price) {
                    
                    cm.sendOk("�� #rYou don't have enough donation points.");
                    cm.dispose();
                    
                }
                
                else {
                cm.getPlayer().gainRC(-price)
		cm.gainItem(shop[seld]['itemid'], shop[seld]['qty']);
            }
                
            }
}*/

importPackage(java.mysql);
importPackage(java.lang);
importPackage(Packages.database);
var ���� = [
	{'itemid' : 2439291, 'qty' : 1, 'price' : 2250},
        
	//{'itemid' : 5121060, 'qty' : 1, 'price' : 5000},
	{'itemid' : 5062010, 'qty' : 10, 'price' : 5000},
	{'itemid' : 5062500, 'qty' : 10, 'price' : 8000},
	{'itemid' : 2049360, 'qty' : 1, 'price' : 13500}
	//{'itemid' : 4310156, 'qty' : 1, 'price' : 5000},
	//{'itemid' : 2470003, 'qty' : 1, 'price' : 5000},
	//{'itemid' : 4310235, 'qty' : 100, 'price' : 5000}
]

var enter = "\r\n";
var seld = -1;
var bp = -1;

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
		bp = cm.getPlayer().getVPoints();
		var msg = "#fs11##dGood Morning! #dMy name is Toben Mage, and I manage a Vote Points store.#b#fs11#" +enter+enter;
		msg += "#h # Vote Points : "+bp+enter;
		for (i = 0; i < ����.length; i++) msg += "#L"+i+"##b#i"+����[i]['itemid']+"##z"+����[i]['itemid']+"# "+����[i]['qty']+" QTY#k"+enter+" ��Price : #b"+����[i]['price']+"P#k"+enter;

		cm.sendSimple(msg);
	} else if (status == 1) {
		seld = sel;
		var msg = "#fs11#Information about the item you want to purchase."+enter;
		if (sel != 999) {
			msg += " Item : #b#i"+����[seld]['itemid']+"##z"+����[seld]['itemid']+"##k"+enter;
			msg += " Count : #b"+����[seld]['qty']+" QTY #k"+enter;
			msg += " Price : "+����[seld]['price']+"P#k"+enter;
		} else {
			msg += " Item : #b"+�ߵ�+"Additional Damage#k"+enter;
			msg += " Price : #b"+�ߵ�����+"P#k"+enter;
		}
		msg += " Please press '��' to really buy.";
		cm.sendYesNo(msg);
	} else if (status == 2) {
		item = ����[seld]['itemid'];
		qty = ����[seld]['qty'];
		price = ����[seld]['price'];
		if (bp >= price) {
			cm.gainItem(item, qty);
			cm.getPlayer().gainVPoints(-price);
			cm.sendOk("Your purchase is complete.");
			cm.dispose();
		} else {
			cm.sendOk("#bVote Points#k seems to be lacking.");
			cm.dispose();
		}
	}
}