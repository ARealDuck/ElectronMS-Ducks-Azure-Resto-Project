var status = -1;

function start() {
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
�� = "#fUI/UIToolTip/Item/Equip/Star/Star#"
var choose ="";
�� = "#fUI/UIToolTip/Item/Equip/Star/Star#"
        choose += "#fn������� Extrabold##fs16##fs16#"+��+"#b���¶���#k#l�����ý���#k"+��+"#l";
        choose += "\r\n#L0##e#i5044000##g ĳ�ü� �̿��ϱ�#l\r\n\r\n";
        if (cm.getPlayer().hasGmLevel(10)){
        choose += "";
}
	if (selection == 0) {
		cm.dispose();
		cm.openCS();
        }
    }
}
        
