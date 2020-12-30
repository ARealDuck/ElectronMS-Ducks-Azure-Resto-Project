importPackage(Packages.packet.creators);

function start() {
    status = -1;
    action (1, 0, 0);
}

var START_MATCH = 1;
var START_PARTY = 2;
var TODAY_LIMIT = 3;
function action(mode, type, selection) {

    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        status--;
    }
    if (mode == 1) {
        status++;
    }
    if (status == -1) {
       cm.dispose();
   }
    if (status == 0) {
		cm.sendSpirit("#b�ڳ״� ������ ���ϳ�?#k"
				+"\r\n#L1#�������� (��Ī�� ���� 18�� ����)#l"
				+"\r\n#L2#��Ƽ�÷��� (1�� ~ 18������ ����)#l"
				+"\r\n#L3#������ ���� Ƚ�� Ȯ��)#l",true,0);
		}

	else if(status == 1)
		{
		S1 = selection;
		switch(S1)
			{
			case START_MATCH:
				if(cm.getPlayer().getParty())
					{
					cm.sendOk("�ڳ�, ��Ƽ�� ���� ���±�. ��Ƽ�� �츣������ �����Ϸ��� ��Ƽ�÷��̸� �������ְ�.");
					cm.dispose();
					return;
					} else {
                                                            cm.getClient().getSession().write(UIPacket.OpenUrus());
                                                            }
			break;

			case START_PARTY:
				if(!cm.getPlayer().getParty())
					{
					cm.sendOk("�ڳ�, ��Ƽ�� ���� �ʾұ�. �������� �ٸ� ����� ���� �츣������ �����Ϸ��ŵ� ���������� �����ϰԳ�.");
					cm.dispose();
					return;
					} else
				if(!cm.isLeader())
					{
					cm.sendOk("�̺κ� ���ȶ�... ����... �Ф�");
					cm.dispose();
					return;
					} else {
                                                            cm.getClient().getSession().write(UIPacket.OpenUrus());
                                                            }
			break;

			case TODAY_LIMIT:
			cm.sendNext("������ ���� �ڹ� �� ������ �� �ִٳ�. ��, ���������� ������ ���ѵȴٴ� ���� ��������.");
			cm.dispose();
			break;

			default:
			cm.getPlayer().dropMessage(5, "������� ���� �۾��Դϴ�. �����ڿ��� �����ּ���.");
			cm.dispose();
			break;
			}
		}
}		
