


/*

	ǻ�� �¶��� �ҽ� ���� ��ũ��Ʈ �Դϴ�.

        ���� : ��ũ��

	���ǽþ��̵� : 
	
	���ǽ� �̸� :

	���ǽð� �ִ� �� : 

	���ǽ� ���� : 


*/

var status = -1;
importPackage(Packages.tools.RandomStream);
importPackage(Packages.client.items);

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
    
    if (status == 0) {
        cm.sendYesNo("Do you want to open the cache box? Maximum cache limit is 900,000 caches.");
    } else if (status == 1) {
        var leftslot = cm.getPlayer().getNX();
        if (leftslot >= 900000) {
            cm.sendOk("The maximum cache limit is 900,000 caches. This box cannot be opened because it is currently out of cache.");
            cm.dispose();
            return;
        }
        cm.gainItem(2430026, -1);
        var cash = Randomizer.rand(10000, 100000);
        cm.getPlayer().modifyCSPoints(1, cash, true);
        cm.sendOk("The following items came out from the sealed lock.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n\r\n#e#b"+cash+" Cash");
        
        cm.dispose();
    }
}


