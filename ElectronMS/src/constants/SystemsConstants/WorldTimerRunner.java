package constants.SystemsConstants;

import client.Character.MapleCharacter;
import launcher.ServerPortInitialize.ChannelServer;

public class WorldTimerRunner implements Runnable {

    @Override
    public void run() {
        for (ChannelServer cserv : ChannelServer.getAllInstances()) {
            for (MapleCharacter hp : cserv.getPlayerStorage().getAllCharacters().values()) {
                Run(hp);
            }
        }
    }

    public static void Run(MapleCharacter player) {

    }

}
