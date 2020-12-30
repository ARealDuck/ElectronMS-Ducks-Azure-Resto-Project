package handlers.Global.JobHandler;

import client.Character.MapleCharacter;
import client.MapleClient;
import client.Skills.ISkill;
import client.Skills.SkillFactory;
import client.Skills.PhantomStealSkill.StealSkillEntry;
import constants.GameConstants;
import connections.Packets.SkillPackets.PhantomSkill;
import connections.Packets.PacketUtility.ReadingMaple;
import server.Maps.MapObject.MapleMapObject;
import server.Maps.MapObject.MapleMapObjectType;

public class PhantomHandler {

    public static void equippedSkill(ReadingMaple rh, MapleClient ha) {
        // B4 01 E9 39 6E 01 2D 46 0F 00
        int baseSkillId = rh.readInt();
        int skillId = rh.readInt();
        if (skillId > 0) {
            StealSkillEntry sse = ha.getPlayer().getStealSkills().getSkillEntryById(skillId);
            ha.getPlayer().getStealSkills().setEquipped(StealSkillEntry.getJobIndex(skillId), sse.getSlot() - 1, true);
            ha.send(PhantomSkill.getUpdateEquippedSkill(baseSkillId, skillId, StealSkillEntry.getJobIndex(skillId), true));
        } else {
            int index = StealSkillEntry.getJobIndexB(baseSkillId);
            StealSkillEntry sse = ha.getPlayer().getStealSkills().getSkillEntryById(ha.getPlayer().getEquippedSkillId(index));
            ha.getPlayer().getStealSkills().setEquipped(index, sse.getSlot()-1, false);
            ha.send(PhantomSkill.getUpdateEquippedSkill(baseSkillId, 0, 0, false));
        }
            ha.getPlayer().fakeRelog();
    }

    public static void steelSkillCheck(ReadingMaple rh, MapleClient ha) {
        int target = rh.readInt();
        MapleMapObject chrobj = ha.getPlayer().getMap().getMapObject(target, MapleMapObjectType.PLAYER);
        if (chrobj == null) {
            ha.send(PhantomSkill.getSteelAvailableSkills(null, false));
            ha.getPlayer().ea();
        }
        MapleCharacter targetchr = null;
        targetchr = (MapleCharacter) chrobj;
        if (targetchr != null && GameConstants.isAdventurer(targetchr.getJob())) {
            ha.send(PhantomSkill.getSteelAvailableSkills(targetchr, true));
        }

    }

    public static void steelSkill(ReadingMaple rh, MapleClient ha) {
        int skillId = rh.readInt();
        int oid = rh.readInt();
        MapleMapObject chrobj = ha.getPlayer().getMap().getMapObject(oid, MapleMapObjectType.PLAYER);
        if (chrobj == null) {
            ha.send(PhantomSkill.getSteelSkillCheck(oid, false, null, false));
            ha.getPlayer().ea();
        }
        MapleCharacter targetchr = (MapleCharacter) chrobj;
        byte action = rh.readByte();
        if (action == 0) { // ��ħ
            assert targetchr != null;
            StealSkillEntry sse = new StealSkillEntry(skillId, targetchr.getSkillLevel(skillId));
            if (!ha.getPlayer().getStealSkills().isExistSkill(skillId)) {
                sse.setSlot(ha.getPlayer().getStealSkills().getNextFreeSlot(StealSkillEntry.getJobIndex(skillId)));
                ha.getPlayer().getStealSkills().addSkill(StealSkillEntry.getJobIndex(skillId), sse);
                ha.send(PhantomSkill.getSteelSkillCheck(oid, true, sse, false));
                ISkill skills = SkillFactory.getSkill(skillId);
                assert skills != null;
                ha.getPlayer().changeSkillLevel(skills, (byte) sse.getSkillLevel(), (byte) skills.getMasterLevel());
            } else {
                // �����ִ� ��ų�� ������ ����
                // �� ���Կ��ִ� ������ ���� -> �ű⿡ ���οų ����
                StealSkillEntry sse2 = ha.getPlayer().getStealSkills().getSkillEntryById(skillId);
                int slot = sse2.getSlot();
                ISkill skills = SkillFactory.getSkill(skillId);
                ha.getPlayer().changeSkillLevel(skills, (byte) 0, (byte) 0);
                ha.getPlayer().getStealSkills().deleteSkill(sse2);

                ha.getPlayer().getStealSkills().addSkill(StealSkillEntry.getJobIndex(skillId), slot, sse);
                ha.send(PhantomSkill.getSteelSkillCheck(oid, true, sse, false));
                assert skills != null;
                ha.getPlayer().changeSkillLevel(skills, (byte) sse.getSkillLevel(), (byte) skills.getMasterLevel());
            }

        } else if (action == 1) { // ����
            StealSkillEntry sse = ha.getPlayer().getStealSkills().getSkillEntryById(skillId);
            if (sse == null) {
                ha.getPlayer().message(1, "�ش� ��ų�� ã�� �� �����ϴ�.");
                System.err.println("[����] ��ƿ ��ų�� �����ϴٰ� ������ �߻��߽��ϴ�. - ��ġ�ϴ� ��ų�� �߰����� ���߽��ϴ�.");
                ha.getPlayer().ea();
                return;
            }
            ha.send(PhantomSkill.getSteelSkillCheck(oid, true, sse, true));
            ha.getPlayer().getStealSkills().deleteSkill(sse);
        }
    }
}
