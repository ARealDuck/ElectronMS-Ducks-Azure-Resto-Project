var status = 0;

importPackage(Packages.constants);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
           var chat = "#fn������� Extrabold##fs13# ���¶����� #r�����ý���#k�� ����� ���ڶ���մϴ� #k";
           chat += "               #fn������� Extrabold##fs11#                   #d�����̿뿡 ���� ��ɵ��� �ִ�ϴ�#k\r\n";


	chat += "#L1##v2434620# ���� �ý��� #fs11##Cgray#(Futures system)#k#l\r\n";
	chat += "#L2##v1662043# �ȵ���̵������� #fs11##Cgray#(Server ranking)#k#l\r\n";
	//chat += "#L3##v3014005# ��ŷ �ý��� #fs11##Cgray#(Server ranking)#k#l\r\n";
	chat += "#L5##v3080000# Īȣ ����Ʈ #fs11##Cgray#(Warehouse System)#k#l\r\n";
	//chat += "#L4##v2434767# â�� �ý��� #fs11##Cgray#(Warehouse System)#k#l\r\n";
	cm.sendSimple(chat);

	} else if (status == 1) {

	if (selection == 1) {
	cm.dispose();
	cm.openNpc(9010009);
	
	} else if (selection == 2) {
	cm.dispose();
	cm.openNpc(1540641);

	} else if (selection == 3) {
	cm.dispose();
	cm.openNpc(2192002);

	} else if (selection == 4) {
	cm.dispose();
	cm.openNpc(2400002);

	} else if (selection == 5) {
	cm.dispose();
	cm.openNpc(9000202);

	} else if (selection == 6) {
	cm.dispose();
	cm.openNpc(9000027);

	} else if (selection == 7) {
	cm.dispose();
	cm.openNpc(9010041);
			}
		}
	}
}