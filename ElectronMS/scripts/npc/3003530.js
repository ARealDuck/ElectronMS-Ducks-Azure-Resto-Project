/*
MelonK
*/
/*importPackage(Packages.tools.packet);
importPackage(java.util);
var status = 0;

qnum = 4; // ����Ʈ ������ȣ (��ġ���� ������ ��);
questlist = [
[8644500, 200, "mob"],
[8644501, 200, "mob"],
[8644502, 200, "mob"],
[8644503, 200, "mob"],
[8644504, 200, "mob"],
[8644505, 200, "mob"],
[8644506, 200, "mob"],
[8644507, 200, "mob"],
[8644508, 200, "mob"],
[8644509, 200, "mob"],
[4036398, 50, "item"],
[4036399, 50, "item"],
[4036400, 50, "item"],
[4036401, 50, "item"],
[4036402, 50, "item"],
[4036403, 50, "item"],
[4036404, 50, "item"],
[4036405, 50, "item"],
[4036406, 50, "item"],
[4036407, 50, "item"],
[4036408, 50, "item"]
]


//Don't Touch :D
count1 = 0;
count2 = 0;
isnewed = true;
qarr = [];
questarray = [];
color = ["b", "b", "b", "b", "b"];

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    data = new Date();
    month = data.getMonth() < 10 ? "0" + (data.getMonth() + 1) : (data.getMonth() + 1) + "";
    date2 = data.getDate() < 10 ? "0" + data.getDate() : data.getDate() + ""
    date = (data.getYear() + 1900) + "" + month + "" + date2;
    a = cm.getPlayer().getKeyValue_new(201901, date + "_quest_" + qnum);
    if (mode == -1 || mode == 0) {
        if (status == 0 && statusplus == true) {
            isnewed = false;
            status = 3;
        } else {
            cm.dispose();
            return;
        }
    }
    if (mode == 1) {
        if (status == -1) {
            b = a;
        }
        if (b < 0 && status == 2 && selection != 100) {
            if (color[selection] == "b") {
                color[selection] = "k";
            } else {
                color[selection] = "b";
            }
        } else {
            status++;
        }
    }
    if (b <= 0) { // ��������Ʈ�� ���� �ʾ�����
        if (status == 0) {
            cm.getPlayer().setKeyValue_new(201901, date + "_quest_" + qnum, 0);
            for (i = 0; i < questlist.length; i++) {
                if (b < 0) {
                    clearquest(questlist[i][0]);
                }
                qarr.push(questlist[i]);
            }
            if (b < 0) {
                for (i = 0; i < 5; i++) {
                    rd = Math.floor(Math.random() * questlist.length)
                    cm.getPlayer().setKeyValue_new(201901, date + "_" + questlist[rd][0] + "_count", 0);
                    cm.getPlayer().setKeyValue_new(201901, date + "_" + questlist[rd][0] + "_" + questlist[rd][2] + "q", questlist[rd][1]);
                    cm.getPlayer().setKeyValue_new(201901, date + "_" + questlist[rd][0] + "_isclear", 0);
                    questlist.splice(rd, 1); // �ߺ� ����
                }
            } else {
                listed = 0;
                while (listed < 5) {
                    for (i = 0; i < questlist.length; i++) {
                        if (cm.getPlayer().getKeyValue_new(201901, date + "_" + qarr[i][0] + "_mobq") > 0) {
                            questlist.splice(i, 1);
                            listed++;
                            break;
                        }
                    }
                }
            }
            dialogue = "#b#e<��������Ʈ : ������ �ٴ� '�������'>#k#n\r\n\r\n";
            dialogue += "�ȳ��Ͻʴϱ�! ������ ��ɿ��� �̷� �͵��� �ֽ��ϴ�.\r\n\r\n"
            for (i = 0; i < qarr.length; i++) {
                if (cm.getPlayer().getKeyValue_new(201901, date + "_" + qarr[i][0] + "_mobq") > 0) {
                    dialogue += "#b#e[���� ����Ʈ] #o" + qarr[i][0] + "# " + qarr[i][1] + "���� ��ġ \r\n"
                    questarray.push(qarr[i]);
                } else if (cm.getPlayer().getKeyValue_new(201901, date + "_" + qarr[i][0] + "_itemq") > 0) {
                    dialogue += "#b#e[���� ����Ʈ] #z" + qarr[i][0] + "# " + qarr[i][1] + "�� ����\r\n"
                    questarray.push(qarr[i]);
                }

            }
            cm.sendNext(dialogue);
        } else if (status == 1) {
            cm.sendYesNo("��ɿ� ������� �����ʴϱ�? ���ο� ��� ��û�ϰڽ��ϴ�.\r\n\r\n#b(�Ϻ� ��� Ȥ�� ��ü ��ɸ� ���ܽ�Ű�� ����� �籸�� �մϴ�.)#k");
        } else if (status == 2) {
            newcheck = true;
            dialogue = "�ٲٰ� ���� ��ɸ� ��󺸽ʽÿ�.\r\n\r\n"
            for (i = 0; i < questarray.length; i++) {
                if (cm.getPlayer().getKeyValue_new(201901, date + "_" + questarray[i][0] + "_mobq") > 0) {
                    dialogue += "#L" + i + "##" + color[i] + "#e[���� ����Ʈ] #o" + questarray[i][0] + "# " + questarray[i][1] + "���� ��ġ#k#n#l\r\n"
                } else if (cm.getPlayer().getKeyValue_new(201901, date + "_" + questarray[i][0] + "_itemq") > 0) {
                    dialogue += "#L" + i + "##" + color[i] + "#e[���� ����Ʈ] #z" + questarray[i][0] + "# " + questarray[i][1] + "�� ����#k#n#l\r\n"
                }
            }
            dialogue += "\r\n#L100##r#e�� �̻� �����ϰ� ���� ����� ����."
            cm.sendSimple(dialogue);
        } else if (status == 3) {
            for (i = 0; i < qarr.length; i++) {
                clearquest(qarr[i][0]);
            }
            talk = "";
            if (isnewed) {
	    talk += "���ܵ� ��� ��� ���ο� ����� �˷��帮�ڽ��ϴ�."
	}
	talk+= "������ ����� ��� 5�����Դϴ�.\r\n\r\n";
            for (i = 0; i < 5; i++) {
                if (color[i] == "k") { // ���ܵǾ����� (������ �Ǵ�)
                    isnewed = true;
                    rd = Math.floor(Math.random() * questlist.length)
                    questarray[i] = questlist[rd];
                    questlist.splice(rd, 1); // �ߺ� ���� (questlist �迭�� rd��°�� ����)
                }
                isnew = color[i] == "k" ? "#r#e[NEW]#k#n" : "#k#n"
                if (questarray[i][2] == "mob") {
                    talk += "#b#e[���� ����Ʈ] #o" + questarray[i][0] + "# " + questarray[i][1] + "���� ��ġ#k#n " + isnew + "\r\n"
                    cm.getPlayer().dropMessage(6, questarray[i][0]);
                } else {
                    talk += "#b#e[���� ����Ʈ] #z" + questarray[i][0] + "# " + questarray[i][1] + "�� ����#k#n " + isnew + "\r\n"
                    cm.getPlayer().dropMessage(6, questarray[i][0]);
                }
                cm.getPlayer().setKeyValue_new(201901, date + "_" + questarray[i][0] + "_count", 0);
                cm.getPlayer().setKeyValue_new(201901, date + "_" + questarray[i][0] + "_" + questarray[i][2] + "q", questarray[i][1]);
                cm.getPlayer().setKeyValue_new(201901, date + "_" + questarray[i][0] + "_isclear", 0);
            }
            cm.sendNext(talk);
	    cm.getPlayer().setKeyValue_new(201901, date + "_quest_" + qnum, 1);
            cm.dispose();
        }
    } else {
        if (status == 0) {
            dialogue = "#b#e<��������Ʈ : ������ �ٴ� '�������'>#k#n\r\n\r\n"
            dialogue += "�ñ׳ʽ� ���� ��Ʈ����Ŀ �δ� �Ҽ� �ø��Դϴ�!\r\n"
            dialogue2 = "";
            dialogue3 = "";
            if (a >= 5) {
	cm.sendOk("���� ���డ���� ����� ���� ��ġ�̽��ϴ�. ���� �ٽ� ã�ƿ��ֽñ� �ٶ��ϴ�.");
                cm.dispose();
                return;
            }
            for (i = 0; i < questlist.length; i++) {
                if (cm.getPlayer().getKeyValue_new(201901, date + "_" + questlist[i][0] + "_mobq") > 0 && cm.getPlayer().getKeyValue_new(201901, date + "_" + questlist[i][0] + "_isclear") < 2) {
                    ������ = "#L" + i + "##d[���� ����Ʈ] #o" + questlist[i][0] + "# " + questlist[i][1] + "���� ��ġ#k"
                    if (cm.getPlayer().getKeyValue_new(201901, date + "_" + questlist[i][0] + "_count") >= cm.getPlayer().getKeyValue_new(201901, date + "_" + questlist[i][0] + "_mobq")) {
                        count1++;
                        dialogue2 += ������ + " (�Ϸ� ����)\r\n"
                    } else {
                        count2++;
                        dialogue3 += ������ + " (���� ��)\r\n"
                    }
                } else if (cm.getPlayer().getKeyValue_new(201901, date + "_" + questlist[i][0] + "_itemq") > 0 && cm.getPlayer().getKeyValue_new(201901, date + "_" + questlist[i][0] + "_isclear") < 2) {
                    ������ = "#L" + i + "##d[���� ����Ʈ] #z" + questlist[i][0] + "# " + questlist[i][1] + "�� ����#k"
                    if (cm.itemQuantity(questlist[i][0]) >= cm.getPlayer().getKeyValue_new(201901, date + "_" + questlist[i][0] + "_itemq")) {
                        count1++;
                        dialogue2 += ������ + " (�Ϸ� ����)\r\n"
                    } else {
                        count2++;
                        dialogue3 += ������ + " (���� ��)\r\n"
                    }
                }
            }
            if (count1 >= 1) {
                dialogue += "\r\n#fUI/UIWindow2.img/UtilDlgEx/list3#\r\n" // �Ϸ� ������ ����Ʈ UI
            }
            dialogue += dialogue2;
            dialogue += "\r\n"
            if (count2 >= 1) {
                dialogue += "#fUI/UIWindow2.img/UtilDlgEx/list0#\r\n" // ������ ����Ʈ UI
            }
            dialogue += dialogue3;
            cm.sendSimple(dialogue);
        } else if (status == 1) {
            if ((cm.getPlayer().getKeyValue_new(201901, date + "_" + questlist[selection][0] + "_mobq") > 0 && cm.getPlayer().getKeyValue_new(201901, date + "_" + questlist[selection][0] + "_count") >= cm.getPlayer().getKeyValue_new(201901, date + "_" + questlist[selection][0] + "_mobq")) ||
                (cm.getPlayer().getKeyValue_new(201901, date + "_" + questlist[selection][0] + "_itemq") > 0 && cm.itemQuantity(questlist[selection][0]) >= cm.getPlayer().getKeyValue_new(201901, date + "_" + questlist[selection][0] + "_itemq"))) {
	    cm.gainItem(1712006,1); // �ɺ�
	    cm.gainItem(2432222,1); // ��ȥ����
	    var text2 = "�ӹ��� ��ġ�̽��ϱ�? �ӹ� ���࿡ ���� �������� �������� �����ص帮�ڽ��ϴ�.\r\n\r\n";
	    text2 += "#fUI/UIWindow2.img/QuestIcon/4/0#\r\n";
	    text2 += "#i1712006# #b#z1712006# #r#e1 ��#k#n\r\n";
	    text2 += "#i2432222# #b#z2432222# #r#e1 ��#k#n\r\n";
                cm.sendOk(text2);
                if (cm.getPlayer().getKeyValue_new(201901, date + "_" + questlist[selection][0] + "_itemq") > 0) {
                    cm.gainItem(questlist[selection][0], -cm.getPlayer().getKeyValue_new(201901, date + "_" + questlist[selection][0] + "_itemq"));
                }
                cm.getPlayer().setKeyValue_new(201901, date + "_" + questlist[selection][0] + "_isclear", 2);
                cm.getPlayer().setKeyValue_new(201901, date + "_quest_" + qnum, cm.getPlayer().getKeyValue_new(201901, date + "_quest_" + qnum) + 1);
                cm.dispose();
            } else {
	   cm.sendOk("����� ���� �ϼ����� ���ϼ̽��ϴ�.");
            }
            cm.dispose();
            return;

        }
    }
}

function clearquest(paramint) {
    cm.getPlayer().setKeyValue_new(201901, date + "_" + paramint + "_count", -1);
    cm.getPlayer().setKeyValue_new(201901, date + "_" + paramint + "_mobq", -1);
    cm.getPlayer().setKeyValue_new(201901, date + "_" + paramint + "_itemq", -1);
    cm.getPlayer().setKeyValue_new(201901, date + "_" + paramint + "_isclear", -1);
}*/