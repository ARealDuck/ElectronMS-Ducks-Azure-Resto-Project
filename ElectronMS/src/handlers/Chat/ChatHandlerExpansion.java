package handlers.Chat;

import client.Character.MapleCharacter;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

import connections.Packets.ChatPacket;
import launcher.AdminGUI.AdminTool;
import launcher.AdminGUI.AdminToolPacket;
import launcher.ServerPortInitialize.ChannelServer;

public class ChatHandlerExpansion {

    public static Map<Integer, MapleChatClient> session = new HashMap<>();
    private static final Lock mutex = new ReentrantLock();

    public static void registerMCC(final MapleChatClient mc) {
        mutex.lock();
        try {
            session.put(mc.getSenderAID(), mc);
        } finally {
            mutex.unlock();
        }
    }

    public static void removeMCC(final MapleChatClient mc) {
        mutex.lock();
        try {
            session.remove(mc.getSenderAID());
        } finally {
            mutex.unlock();
        }
    }

    public static MapleChatClient getMCC(final int cid) {
        mutex.lock();
        try {
            return session.getOrDefault(cid, null);
        } finally {
            mutex.unlock();
        }
    }

    public static void buddyChat(final MapleChatClient mc, final String text, final int cid) {
        for (MapleChatClient mcc : session.values()) {
            for (ChannelServer cs : ChannelServer.getAllInstances()) {
                final MapleCharacter chr = cs.getPlayerStorage().getCharacterById(mcc.getSenderCID());
                if (chr != null) {
                    if (chr.getBuddylist().containsVisible(cid) || chr.getId() == cid) {
                        mcc.sendPacket(ChatPacket.OnFriendChatMessage(mc, text));
                        if (chr.getId() == cid) {
                            AdminTool.broadcastMessage(AdminToolPacket.sendChatText("[ģ��][Ch." + chr.getClient().getChannel() + "]" + chr.getName() + " : " + text));
                        }
                    }
                }
            }
        }

    }

    public static void guildChat(final MapleChatClient mc, final String text, final int gid) {
        for (MapleChatClient mcc : session.values()) {
            for (ChannelServer cs : ChannelServer.getAllInstances()) {
                final MapleCharacter chr = cs.getPlayerStorage().getCharacterById(mcc.getSenderCID());
                if (chr != null) {
                    if (chr.getGuild() != null) {
                        if (chr.getGuild().getId() == gid) {
                            mcc.sendPacket(ChatPacket.OnGuildChatMessage(mc, text));
                            if (chr.getId() == mc.getSenderCID()) {
                                AdminTool.broadcastMessage(AdminToolPacket.sendChatText("[Friend][Ch." + chr.getClient().getChannel() + "]" + chr.getName() + " : " + text));
                            }
                        }
                    }
                }
            }
        }
    }
}
