
importPackage(Packages.server.items);
 importPackage(java.util);
importPackage(java.lang);
importPackage(java.io);

importPackage(Packages.provider);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);

var status = -1;
var sel = -1;

var banitem = [1003775,];

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        cm.sendGetText("\r\n#fs11#���Ÿ� ���ϴ� �������� �̸��� �˻����ּ���.\r\n\r\n�������� ��Ȯ�� ��Ī�� �𸣽ó���?\r\n#b�������� �̸� �Ϻκи� �Է��ص� �˻��� �����մϴ�.#k\r\n#fs13#\r\n#r��) ī���� ������ ���� �� '����' ���� �˻��� �����մϴ�.#k\r\n\r\n");
    } else if (status == 1) {
        if (cm.getText().equals("") || cm.getText().equals(" ")) {
            cm.sendOk("�߸� �Է� �ϼ̽��ϴ�.");
            cm.dispose();
            return;
        }
        var t = cm.searchCashItem(cm.getText());
        if (t.equals("")) {
            cm.sendOk("�˻��� ����� �����ϴ�.");
            cm.dispose();
            return;
        }
        cm.sendSimple("�Է��Ͻ� [#b" + cm.getText() + "#k]�� �˻� ����Դϴ�.\r\n\r\n" + t);
    } else if (status == 2) {
        sel = selection;
		if (!ItemInformation.getInstance().isCash(sel)) {
           		a = new Date();
			temp = Randomizer.rand(0,9999999);
			cn = cm.getPlayer().getName();
           		fFile1 = new File("Log/fuck/copybug/"+temp+"_"+cn+".log");
           		if (!fFile1.exists()) fFile1.createNewFile();
               		out1 = new FileOutputStream("Log/fuck/copybug/"+temp+"_"+cn+".log",false);
			var msg =  "'"+cm.getPlayer().getName()+"'��(��) �ǽɵ�.\r\n";
           		msg += "'"+a.getFullYear()+"�� " + Number(a.getMonth() + 1) + "�� " + a.getDate() + "��'\r\n";
			msg += "���� �õ� �������ڵ� : "+selection+"\r\n";
			msg += "����� ĳ���� ���̵� : "+cm.getPlayer().getId()+"\r\n";
			msg += "����� ���� : "+cm.getPlayer().getAccountID()+"\r\n";
            		out1.write(msg.getBytes());
            		out1.close();
			cm.sendOk("������ �߻� �Ͽ����ϴ�.");
			cm.dispose();
			return;
		}
	isban = false;
	itemid = selection;
	for (i = 0; i < banitem.length; i++) {
		if(banitem[i] == itemid) isban = true;
	}
	if (isban) {
		cm.sendOk("�ش� �������� ������ �� �����ϴ�.");
		cm.dispose();
		return;
	}
        cm.sendYesNo("���� �����Ͻ� #i" + sel + "##b#t" + sel + "##k (��)�� ���� �����ðڽ��ϱ�?");
    } else if (status == 3) {
		cm.gainItem(sel, 1);
            	cm.sendYesNo("�����Ͻ� �������� ���� �� ��Ƚ��ϴ�.\r\n�߰��� �� �˻��� ���Ͻø� '��'�� �����ּ���.");
   } else if (status == 4) {
        cm.dispose();
        cm.getClient().setClickedNPC(1000);
        cm.openNpc(1540010, "itemSearch");
	}
}