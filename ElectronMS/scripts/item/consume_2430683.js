importPackage(Packages.tools.RandomStream);

var �ҿ� = [2591085, 2591086, 2591087, 2591088, 2591163, 2591233, 2591264, 2591296, 2591305, 2591314, 2591427, 2591572, 2591590];
var ����Ȯ�� = 30; 

var ���� = 2430683;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
		cm.dispose();
	}

	switch (status) {
		case 0:
			var m = ""
			m += "Hi, I'm giving you a great boss soul with a random chance. The probability of success is 30 per, and 70 per chance is a boom.\r\n"
			m += "#b#L1#I want to pick a soul item.#l\r\n"
			m += "#b#L0#I would like to go through the list of items.#l\r\n"
			cm.sendSimple(m);
		break;
		case 1:
			if (selection == 0) {
				var m = ""
				m += "#Cgray##e[ AzureMS soul item list ]#n#k\r\n\r\n"
				for (i = 0; i < �ҿ�.length; i++) {
					m += "#i" + �ҿ�[i] + "# #b#z" + �ҿ�[i] + "#\r\n"
				}
				cm.sendOk(m);
				cm.dispose();
			} else {
				rand = Randomizer.rand(1, 100);
				
				if (rand < ����Ȯ��) {
					rand2 = Randomizer.nextInt(�ҿ�.length);
					if (cm.canHold(�ҿ�[rand2])) {
						cm.gainItem(�ҿ�[rand2], 1);
						cm.sendOk("Congratulations! #d#z" + �ҿ�[rand2] + "##kIs here. ");
						cm.dispose();
					} else {
						cm.sendOk("There is not enough space in the inventory. Please empty the inventory window and try again.");
						cm.dispose();
					}
				} else {
					cm.sendOk("Ah .. sorry. I have a whack. Please promise!");
					cm.dispose();
				}
				cm.gainItem(����, -1);
			}
	}
}
