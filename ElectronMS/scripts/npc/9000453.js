/*


�ҽ�: Dbg.client�� DbgPlayer.java�� ������ �߰����ּ���.

    public void tddFame(int famechange) {
        this.fame -= famechange;
    }


*/

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
            	
	       var leaf = cm.itemQuantity(4310057);
	       var chat = "#fn������� Extrabold# �ȳ��ϼ��� #h0#��! ��Ÿ���������� �������� �������ִ���.\r\n";
	       chat += "#fn������� Extrabold# ���� #h0#���� ��Ÿ�����δ� #r#e"+ leaf +" #n#k�� �Դϴ�.#b"
	       chat += "\r\n\r\n           #e#r��Ÿ�� ������ ��� = �˷���������!!><#n#k"
	       chat += "\r\n#b        #fn������� Extrabold##fs13#     #L400#��Ÿ�� ������ �ޱ�#k";
	       cm.sendSimple(chat);

	    }  if (selection == 400) {
		if (cm.haveItem(4310057, 1)) {
		    if (cm.canHold(4310057)) {
		        cm.sendOk("#fn������� Extrabold# ��Ÿ�� �������� ���޵Ǿ����ϴ� !");
                        cm.gainItem(4310057, -1);
	                cm.gainSponserItem(1142322 ,'[�߼�]',1000,500,500);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#fn������� Extrabold# ��Ÿ�� ������ �����մϴ�.");
		    cm.dispose();

}
		}
	}
}



