/*
	�����(mst_totoro@naver.com) ����
*/

importPackage(Packages.client.items);

var item = 4310184; // ����Ʈ ��� �ڵ�, ���� ������ ������ �ø��� �ʹٸ� [4000000, 40000001] �̷������� ����
var cost = 1000; // ����Ʈ ��� ����, ���� ���� ����
var gain = 1142101; // ����Ʈ ���� �ڵ�

// ���⼭����
var icon_start = "#fUI/UIWindow2/UtilDlgEx/list1#"
var icon_doing = "#fUI/UIWindow2/UtilDlgEx/list0#"
var icon_complete = "#fUI/UIWindow2/UtilDlgEx/list3#"
var icon_etc = "#fUI/UIWindow2/UtilDlgEx/list2#"
var icon_getitem = "#fUI/UIWindow2/QuestIcon/4/0#"
// ������� ����Ʈ ������, �ǵ����� ��

var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0 && status == 2) {
       cm.sendNext("��ſ� #d���¶���#k �Ǽ���"); // ����Ʈ ���� ���� ���� �� ������ �� �޼���
       cm.dispose();
       return;
    }
    if (mode == 0) {
        status --;
    }
    if (mode == 1) {
        status++;
    }
   // ���⼭����
   quest = cm.getQuestRecord(19021500);
   if (quest.getCustomData() == null) {
	quest.setStatus(0);
	quest.setCustomData("0");
   }
   // ������� ����Ʈ ����, �ǵ����� ��

    if (status == 0) {
	qstatus = quest.getStatus(); // ����Ʈ ���൵
	for (i = 0; i < item.length; i++) {
		itemcheck = (cm.haveItem(item[i], cost[i]) && cm.itemQuantity(item[i]) >= cost[i]); // ����Ʈ ��� üũ
		cm.getPlayer().dropMessage(5, "" + itemcheck);
	}
	var ms = ""
	ms += "��.. ���� �̸� ��� �ϸ� ������..\r\n\r\n" // ����Ʈ �޼���
	if (qstatus != 2) {
		if (qstatus == 0) {
			//ms += icon_start + "\r\n"
		} else if (qstatus == 1 && !itemcheck) {
			//ms += icon_doing + "\r\n"
		} else if (qstatus == 1 && itemcheck) {
			//ms += icon_complete + "\r\n"
		}
		ms += "#b#L0#����Ʈ �����Դϴ�.#l\r\n" // ����Ʈ ���� �̸�
		if (qstatus != 0) {
			ms += "\r\n\r\n"
			//ms += icon_etc + "\r\n"
			ms += "#b#L1#����Ʈ�� �����ϰڽ��ϴ�.#l\r\n" // ����Ʈ ���� �̸�
		}
		cm.sendNext(ms);
	} else {
		cm.sendNext("�̹� �� ����Ʈ�� �����߽��ϴ�."); // ����Ʈ �̹� �Ϸ� ���� �� �޼���
		cm.dispose();
	}
    } else if (status == 1) {
	sel = selection;
	if (sel == 0) {
		if (qstatus == 0) {
			cm.sendNext("����Ʈ ���� �޼���"); // ����Ʈ ������ �� �޼��� ù��°
		} else if (qstatus == 1 && !itemcheck) {
			var ms = ""
			ms += "���� �ʿ��� �������� �� ��ƿ��� ���ϼ̴µ���?\r\n\r\n"
			ms += "#r#e< �ʿ��� ������ >#k#n\r\n\r\n"
			for (i = 0; i < item.length; i++) {
				ms += "- #i" + item[i] + "# #b#z" + item[i] + "# " + cost[i] + "��#k\r\n"
			}
			cm.sendNext(ms); // ����Ʈ ���� ���� �� �޼���
			cm.dispose();
		} else if (qstatus == 1 && itemcheck) {
			cm.sendNext("�ʿ��� ��� �������� ��ƿ� �ּ̱���!\r\n"); // ����Ʈ �Ϸ��� �� �޼���, ù��°
		}
	} else if (sel == 1) {
		quest.setCustomData("0");
		quest.setStatus(0);
		cm.sendNext("�ƽ�����.. ������ �ð��� ���Ŵٸ� �� �ٽ� ����ּ���.\r\n"); // ����Ʈ ������ �� �޼���
		cm.dispose();
	}
    } else if (status == 2) {
	if (qstatus == 0) {
		cm.sendYesNo("����Ʈ ���� ���� ����"); // ����Ʈ �����ϰڳİ� ��� �޼���
	} else if (qstatus == 1 && itemcheck) {
		equipslot = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getNumFreeSlot(); // ���ĭ ���� üũ
		if (equipslot >= 1) {
			var ms = ""
			ms += "����Ʈ �Ϸ� �޼���\r\n\r\n" // ����Ʈ �Ϸ��� �� �޼���, �ι�°
			ms += icon_getitem + "\r\n"
			ms += "#i" + gain + "# #b#z" + gain + "# 1��#k\r\n"
			quest.setStatus(2);
			quest.setCustomData("2");
			for (i = 0; i < item.length; i++) {
				cm.gainItem(item[i], -cost[i]);
			}
			cm.gainItem(gain, 1);
			cm.sendNext(ms);
			cm.dispose();
		} else {
			cm.sendNext("�κ��丮 ��� ������ 1ĭ �̻� ����ּ���."); // ���ĭ ���� �� �޼���
			cm.dispose();
		}
	}
    } else if (status == 3) {
	if (qstatus == 0) {
		quest.setStatus(1);
		quest.setCustomData("1");
		cm.sendNext("����Ʈ ������ �� �޼���"); // ����Ʈ �����Ѵٰ� ���� �� ���� �޼���
		cm.dispose();
	}
    }
}
