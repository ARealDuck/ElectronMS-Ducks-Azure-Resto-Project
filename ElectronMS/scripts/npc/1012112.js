var ���� = 4001832;
var �Һ� = 1;

var �޼� = 25000;

function start() {
	status = -1;
	action (1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	}
	if (mode == 0) {
		if (status == 2) {
			cm.sendOk("Please try again later.");
			cm.dispose();
			return;
		} else {
			status--;
		}
	}
	
	switch (status) {
		case 0:
			var m = ""
			m += "#Cgray##e[ AzureMS Methodist NPC : #p" + cm.getNpc() + "# ]#n#k\r\n\r\n"
			m += " I am #z" + ���� + "# To exchange for Meso #p" + cm.getNpc() + "#is. Do you want to exchange? (25,000 meso each)\r\n"
			m += "#b#L0#Yeah, #z" + ���� + "# I would like to exchange.#l\r\n"
			cm.sendSimple(m);
		break;
		case 1:
			���� = cm.itemQuantity(����);
			ȸ�� = parseInt(���� / �Һ�);
			�ִ� = Math.min(����, ȸ��);

			var m = ""
			m += "\r\n#Cgray##e[ AzureMS Present #h #'S data ]#n#k\r\n\r\n"
			m += "- Item Count : " + ���� + " QTY\r\n"
			m += "- Exchangeable : " + �ִ� + " time\r\n"
			m += "- Max meso available : " + (�ִ� * �޼�) + " Mesos\r\n\r\n"
			m += "#h # Is currently #z" + ���� + "# Total " + ���� + " You have " + �ִ� + " Times.\r\n"
			cm.sendGetNumber(m, �ִ�, 1, ȸ��);
		break;
		case 2:
			S = selection;

			if (S > 32767) {
				cm.sendOk("You can only exchange up to 32767 times. Please note that if you are uncomfortable.");
				cm.dispose();
				return;
			}

			var m = ""
			m += "#h #The number of times you entered " + S + "Burned, total #z" + ���� + "# " + (�Һ� * S) + " QTY is consumed. Do you really want to exchange?\r\n"
			cm.sendYesNo(m);
		break;
		case 3:
			if (���� < (S * �Һ�) && S <= 0) {
				cm.sendOk("Bug bug.");
				cm.dispose();
				return;
			} else {
				if (cm.haveItem(����, S * �Һ�) && ���� >= (S * �Һ�)) {
					var m = ""
					m += "Total consumption : #r" + (S * �Һ�) + " QTY#k\r\n"
					m += "Total Acquisition Meso : #b" + (S * �޼�) + " Mesos#k\r\n\r\n"
					m += "The exchange was successful.\r\n"
					cm.gainItem(����, -S * �Һ�);
					cm.gainMeso(�޼� * S);
					cm.sendOk(m);
					cm.dispose();
				} else {
					cm.sendOk("Bug bug.");
					cm.dispose();
					return;
				}
			}
		break;
	}		
}