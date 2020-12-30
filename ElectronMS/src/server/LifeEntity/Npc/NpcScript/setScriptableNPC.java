package server.LifeEntity.Npc.NpcScript;

import java.util.ArrayList;
import java.util.List;

import client.MapleClient;
import connections.Packets.MainPacketCreator;
import tools.Pair;

public class setScriptableNPC {

    private static List<Pair<Integer, String>> npcs = new ArrayList<>();

    public static void load() {
        npcs.add(new Pair<>(1033221, "���� �����ּ���~��")); // ������� �ﷹ��
        npcs.add(new Pair<>(1012107, "�ȳ��ϼ���~")); // ��Ÿ...
        npcs.add(new Pair<>(1012102, "��ǳ���� ĳ�÷� ��ȯ�ϰ� �;��.")); // �Ǿ�
        npcs.add(new Pair<>(2144016, "��ų�� �ް� �;��.")); // �ð��� ���� ����

        npcs.add(new Pair<>(9001001, "1")); //
        npcs.add(new Pair<>(9001002, "2")); //
        npcs.add(new Pair<>(9001005, "3")); //
    }

    public static void sendPacket(MapleClient ha) {
        ha.send(MainPacketCreator.setNPCScriptable(npcs));
    }

}
