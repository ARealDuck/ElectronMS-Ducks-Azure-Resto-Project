/*
���� : ������(skymin0307)
*/
/**
������� ���� NPC
**/
var status = 0;
var musicplayer

function start() {
 status = -1;
 action(1, 0, 0);
}

function action(mode, type, selection) {
 if (mode == -1) {
  cm.dispose();
 } else {
 if (mode == 0) {
  cm.sendOk("��� ���� �Ͻô� �κ���?");
  cm.dispose();
 }
  status++;
  if(status == 0) {
   cm.sendSimple ("#h ##k������ �ݰ���.\r\n���� BGM DJ#n#k  #b���ǽ�#k#n��� �Ѵ�. \r\n ��� �����Ϸ��� 1,000,000 ������ �Ѵ�, ������ ����Ұ�쿡�� �� �ʿ� ���� �ִ� ����� ��� �ȴ�. ���� �����ϴ� ����� ���� ����ؾ� ������ �ִ�. \r\n#e���ϴ� ��������� ������. \r\n#I#L44# [iKON - ����� �ߴ� (LOVE SCENARIO)] \r\n#I#L45# [���ö - �׳�ó��] \r\n#I#L46# [���� - �ٸ������ ����ϰ� �־�] \r\n#I#L47# [���� - ���ΰ�] \r\n#I#L48# [����������� - ù���] \r\n#I#L49# [���� - �����] \r\n#I#L51# [�赿�� - ����] \r\n#I#L52# [��θ��� - ����] \r\n#I#L53# [DEAN - instagram] \r\n#I#L54# [EXO - Universe] \r\n#I#L55# [Camila Cabello - Havana] \r\n#I#L56# [TWICE - Heart Shaker] \r\n#I#L57# [û�� - Roller Coaster] \r\n#I#L58# [��ġ - ���� �Ǵϱ�] \r\n#I#L59# [���� - ���� ��] \r\n#I#L60# [����- Lonely] \r\n#I#L61# [��ź�ҳ�� - DNA] \r\n#I#L62# [�β� - ������] \r\n#I#L63# [����ģ�� - ��] \r\n#I#L64# [�ҷ� - ��������] \r\n#I#L65# [���Ͽ� - �غ�] \r\n#I#L66# [������ - ���� �����¹�] \r\n#I#L67# [Jessie J -Price Tag] \r\n#I#L68# [�þ��ؼ� - ����] \r\n#I#L69# [Sia - Chandelier] \r\n#I#L70# [Coldplay - Something Just Like This] \r\n#I#L71# [Ed Sheeran - Shape of you] \r\n#I#L72# [Justin Bieber ? Despacito ] \r\n#I#L73# [BTOB - Only one for me] \r\n#I#L74# [�̺��� - ���� (Feat. �����) ] \r\n#I#L75# [V.O.S - �� ����] \r\n#I#L76# [Wanna One - Ļ�ŷ� ] \r\n#I#L77# [������(V.O.S) - �����������] \r\n#I#L78# [����ũ - �ѵζѵ�] \r\n#I#L79# [�⸮���� - flex] \r\n#I#L80# [nafla - wu]  \r\n#I#L81# [��Ƽ�� - ����̼�]");
  } else if(status == 1) {
musicplayer = cm.getChar().getName();
    if (selection == 44) {
    if(cm.getMeso() > 1000000 == true) { 
     cm.gainMeso(-1000000);
     cm.changeMusic("Jukebox/1");
     cm.sendOk("#fMap/MapHelper.img/mark/Orbis##e iKON - ����� �ߴ� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� 027 iKON - ����� �ߴ����� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 45) {
    if(cm.getMeso() > 1000000 == true) { 
     cm.gainMeso(-1000000);
     cm.changeMusic("Jukebox/2");
     cm.sendOk("#fMap/MapHelper.img/mark/Orbis##e ���ö - �׳�ó�� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ���ö - �׳�ó������ �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 46) {
    if(cm.getMeso() > 1000000 == true) { 
     cm.gainMeso(-1000000);
     cm.changeMusic("Jukebox/3");
     cm.sendOk("#fMap/MapHelper.img/mark/Orbis##e ���� - �ٸ������ ����ϰ� �־� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ���� - �ٸ������ ����ϰ� �־����� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 47) {
    if(cm.getMeso() > 1000000 == true) { 
     cm.gainMeso(-1000000);
     cm.changeMusic("Jukebox/4");
     cm.sendOk("#fMap/MapHelper.img/mark/Orbis##e ���� - ���ΰ� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ���� - ���ΰ����� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 48) {
    if(cm.getMeso() > 1000000 == true) { 
     cm.gainMeso(-1000000);
     cm.changeMusic("Jukebox/5");
     cm.sendOk("#fMap/MapHelper.img/mark/Orbis##e ����������� - ù��� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ����������� - ù������� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 49) {
    if(cm.getMeso() > 1000000 == true) { 
     cm.gainMeso(-1000000);
     cm.changeMusic("Jukebox/6");
     cm.sendOk("#fMap/MapHelper.img/mark/Orbis##e ���� - ����� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ���� - ��������� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 51) {
    if(cm.getMeso() > 1000000 == true) { 
     cm.gainMeso(-1000000);
     cm.changeMusic("Jukebox/8");
     cm.sendOk("#fMap/MapHelper.img/mark/Orbis##e �赿�� - ���� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �赿�� - �������� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 52) {
    if(cm.getMeso() > 1000000 == true) { 
     cm.gainMeso(-1000000);
     cm.changeMusic("Jukebox/9");
     cm.sendOk("#fMap/MapHelper.img/mark/Orbis##e ��θ��� - ���� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ��θ��� - �������� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 53) {
    if(cm.getMeso() > 1000000 == true) { 
     cm.gainMeso(-1000000);
     cm.changeMusic("Jukebox/10");
     cm.sendOk("#fMap/MapHelper.img/mark/Orbis##e DEAN - instagram ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� DEAN - instagram���� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 54) {
    if(cm.getMeso() > 1000000 == true) { 
     cm.gainMeso(-1000000);
     cm.changeMusic("Jukebox/11");
     cm.sendOk("#fMap/MapHelper.img/mark/Orbis##e EXO - Universe ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� EXO - Universe���� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 55) {
    if(cm.getMeso() > 1000000 == true) { 
     cm.gainMeso(-1000000);
     cm.changeMusic("Jukebox/12");
     cm.sendOk("#fMap/MapHelper.img/mark/Orbis##e Camila Cabello - Havana ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� Camila Cabello - Havana ���� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 56) {
    if(cm.getMeso() > 1000000 == true) { 
     cm.gainMeso(-1000000);
     cm.changeMusic("Jukebox/13");
     cm.sendOk("#fMap/MapHelper.img/mark/Orbis##e TWICE (Ʈ���̽�) - Heart Shaker ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� TWICE (Ʈ���̽�) - Heart Shaker���� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 57) {
    if(cm.getMeso() > 1000000 == true) { 
     cm.gainMeso(-1000000);
     cm.changeMusic("Jukebox/14");
     cm.sendOk("#fMap/MapHelper.img/mark/Orbis##e û�� - Roller Coaster ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� û�� - Roller Coaster���� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 58) {
    if(cm.getMeso() > 1000000 == true) { 
     cm.gainMeso(-1000000);
     cm.changeMusic("Jukebox/15");
     cm.sendOk("#fMap/MapHelper.img/mark/Orbis##e ��ġ(Punch) - ���� �Ǵϱ� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ��ġ(Punch) - ���� �Ǵϱ����� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 59) {
    if(cm.getMeso() > 1000000 == true) { 
     cm.gainMeso(-1000000);
     cm.changeMusic("Jukebox/16");
     cm.sendOk("#fMap/MapHelper.img/mark/Orbis##e ���� - ���� �� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ���� - ���� �� ���� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 60) {
    if(cm.getMeso() > 1000000 == true) { 
     cm.gainMeso(-1000000);
     cm.changeMusic("Jukebox/17");
     cm.sendOk("#fMap/MapHelper.img/mark/Orbis##e ���� - Lonely (Feat. �¿�) ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ���� - Lonely (Feat. �¿�)���� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 61) {
    if(cm.getMeso() > 1000000 == true) { 
     cm.gainMeso(-1000000);
     cm.changeMusic("Jukebox/18");
     cm.sendOk("#fMap/MapHelper.img/mark/Orbis##e ��ź�ҳ�� - DNA ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ��ź�ҳ�� - DNA���� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 62) {
    if(cm.getMeso() > 1000000 == true) { 
     cm.gainMeso(-1000000);
     cm.changeMusic("Jukebox/19");
     cm.sendOk("#fMap/MapHelper.img/mark/Orbis##e �β� - ������ ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �β� - ���������� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 63) {
    if(cm.getMeso() > 1000000 == true) { 
     cm.gainMeso(-1000000);
     cm.changeMusic("Jukebox/20");
     cm.sendOk("#fMap/MapHelper.img/mark/Orbis##e ����ģ�� - �� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ����ģ�� - ������ �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 64) {
    if(cm.getMeso() > 1000000 == true) { 
     cm.gainMeso(-1000000);
     cm.changeMusic("Jukebox/21");
     cm.sendOk("#fMap/MapHelper.img/mark/Orbis##e �ҷ� - �������� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �ҷ� - ������������ �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 65) {
    if(cm.getMeso() > 1000000 == true) { 
     cm.gainMeso(-1000000);
     cm.changeMusic("Jukebox/22");
     cm.sendOk("#fMap/MapHelper.img/mark/Orbis##e ���Ͽ� - �غ� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ���Ͽ� - �غ����� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 66) {
    if(cm.getMeso() > 1000000 == true) { 
     cm.gainMeso(-1000000);
     cm.changeMusic("Jukebox/23");
     cm.sendOk("#fMap/MapHelper.img/mark/Orbis##e ������ - ���� �����¹� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ������ - ���� �����¹����� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 67) {
    if(cm.getMeso() > 1000000 == true) { 
     cm.gainMeso(-1000000);
     cm.changeMusic("Jukebox/24");
     cm.sendOk("#fMap/MapHelper.img/mark/Orbis##e Jessie J -Price Tag ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� Jessie J -Price Tag���� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 68) {
    if(cm.getMeso() > 1000000 == true) { 
     cm.gainMeso(-1000000);
     cm.changeMusic("Jukebox/25");
     cm.sendOk("#fMap/MapHelper.img/mark/Orbis##e �þ��ؼ� - ���� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �þ��ؼ� - �������� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 69) {
    if(cm.getMeso() > 1000000 == true) { 
     cm.gainMeso(-1000000);
     cm.changeMusic("Jukebox/26");
     cm.sendOk("#fMap/MapHelper.img/mark/Orbis##e Sia - Chandelier ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� Sia - Chandelier���� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 70) {
    if(cm.getMeso() > 1000000 == true) { 
     cm.gainMeso(-1000000);
     cm.changeMusic("Jukebox/27");
     cm.sendOk("#fMap/MapHelper.img/mark/Orbis##e Coldplay - Something Just Like This ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� Coldplay - Something Just Like This ���� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 71) {
    if(cm.getMeso() > 1000000 == true) { 
     cm.gainMeso(-1000000);
     cm.changeMusic("Jukebox/28");
     cm.sendOk("#fMap/MapHelper.img/mark/Orbis##e Ed Sheeran - Shape of you ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� Ed Sheeran - Shape of you���� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
}
    } else if (selection == 72) {
    if(cm.getMeso() > 1000000 == true) { 
     cm.gainMeso(-1000000);
     cm.changeMusic("Jukebox/29");
     cm.sendOk("#fMap/MapHelper.img/mark/Orbis##e Justin Bieber ? Despacito�� ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� Justin Bieber ? Despacito���� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
}
    } else if (selection == 73) {
    if(cm.getMeso() > 1000000 == true) { 
     cm.gainMeso(-1000000);
     cm.changeMusic("Jukebox/30");
     cm.sendOk("#fMap/MapHelper.img/mark/Orbis##e [MV] ������ - Only one for me�� ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ������ - Only one for me���� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
}
    } else if (selection == 74) {
    if(cm.getMeso() > 1000000 == true) { 
     cm.gainMeso(-1000000);
     cm.changeMusic("Jukebox/31");
     cm.sendOk("#fMap/MapHelper.img/mark/Orbis##e [����2 Final] �̺��� - ���� �� ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �̺��� - ���� ���� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
}
    } else if (selection == 75) {
    if(cm.getMeso() > 1000000 == true) { 
     cm.gainMeso(-1000000);
     cm.changeMusic("Jukebox/32");
     cm.sendOk("#fMap/MapHelper.img/mark/Orbis##e V.O.S - �� ���� �� ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� V.O.S - �� ���� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
}
    } else if (selection == 76) {
    if(cm.getMeso() > 1000000 == true) { 
     cm.gainMeso(-1000000);
     cm.changeMusic("Jukebox/33");
     cm.sendOk("#fMap/MapHelper.img/mark/Orbis##e ���ʿ� - Ļ�ŷ� �� ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ���ʿ� - Ļ�ŷ� ���� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
}
    } else if (selection == 77) {
    if(cm.getMeso() > 1000000 == true) { 
     cm.gainMeso(-1000000);
     cm.changeMusic("Jukebox/34");
     cm.sendOk("#fMap/MapHelper.img/mark/Orbis##e V.O.S - ������������� ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� V.O.S - ��������������� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
}
    } else if (selection == 78) {
    if(cm.getMeso() > 1000000 == true) { 
     cm.gainMeso(-1000000);
     cm.changeMusic("Jukebox/35");
     cm.sendOk("#fMap/MapHelper.img/mark/Orbis##e ����ũ - �ѵζѵ��� ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ����ũ - �ѵζѵ����� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
}
    } else if (selection == 79) {
    if(cm.getMeso() > 1000000 == true) { 
     cm.gainMeso(-1000000);
     cm.changeMusic("Jukebox/36");
     cm.sendOk("#fMap/MapHelper.img/mark/Orbis##e �⸮���� - flex �� ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �⸮���� - flex���� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
}
    } else if (selection == 80) {
    if(cm.getMeso() > 1000000 == true) { 
     cm.gainMeso(-1000000);
     cm.changeMusic("Jukebox/37");
     cm.sendOk("#fMap/MapHelper.img/mark/Orbis##e nafla - Wu �� ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� nafla - Wu ���� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
}
    } else if (selection == 81) {
    if(cm.getMeso() > 1000000 == true) { 
     cm.gainMeso(-1000000);
     cm.changeMusic("Jukebox/38");
     cm.sendOk("#fMap/MapHelper.img/mark/Orbis##e ��Ƽ��-����̼� �� ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ��Ƽ��-����̼�  ���� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
}
   }
  }
 }
}