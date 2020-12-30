package launcher.ServerPortInitialize;

import constants.Data.ServerType;
import constants.ServerConstants;
import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelOption;
import io.netty.channel.EventLoopGroup;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioServerSocketChannel;
import launcher.LauncherHandlers.ChracterTransfer;
import handlers.CashShop.CashShopPlayerHolder;
import launcher.Utility.netty.MapleNettyDecoder;
import launcher.Utility.netty.MapleNettyEncoder;
import launcher.Utility.netty.MapleNettyHandler;

public class CashShopServer { 

    private final int PORT = ServerConstants.CashShopPort;
    private CashShopPlayerHolder players;
    private static final CashShopServer instance = new CashShopServer();

    public static final CashShopServer getInstance() {
        return instance;
    }

    public final void InitConfig() {
 
        players = new CashShopPlayerHolder();

        EventLoopGroup bossGroup = new NioEventLoopGroup();
        EventLoopGroup workerGroup = new NioEventLoopGroup();

        try {
            ServerBootstrap bootstrap = new ServerBootstrap();
            bootstrap.group(bossGroup, workerGroup).channel(NioServerSocketChannel.class)
                    .childHandler(new ChannelInitializer<SocketChannel>() {
                        @Override
                        public void initChannel(SocketChannel ch) {
                            ch.pipeline().addLast("decoder", new MapleNettyDecoder());
                            ch.pipeline().addLast("encoder", new MapleNettyEncoder());
                            ch.pipeline().addLast("handler", new MapleNettyHandler(ServerType.CASHSHOP, -1));
                        }
                    }).option(ChannelOption.SO_BACKLOG, 128).childOption(ChannelOption.SO_KEEPALIVE, true);
            ChannelFuture f = bootstrap.bind(PORT).sync(); // (7)
            System.out.println("[Notification] Cash Shop Server " + PORT + " Successfully opened port.");
        } catch (InterruptedException e) {
            System.err.println("[Error] Cash Shop Server " + PORT + " Failed to open port.");
        }
        Runtime.getRuntime().addShutdownHook(new Thread(new ShutDownListener()));
    }

    public final CashShopPlayerHolder getPlayerStorage() {
        return players;
    }

    public final void shutdown() {
        players.disconnectAll();
    }

    private final class ShutDownListener implements Runnable {

        @Override
        public void run() {
            System.out.println("Saving all connected clients...");
            players.disconnectAll();
        }
    }

    public void ChannelChange_Data(ChracterTransfer transfer, int characterid) {
        getPlayerStorage().registerPendingPlayer(transfer, characterid);
    }

    public final boolean isCharacterInCS(String name) {
        return getPlayerStorage().isCharacterConnected(name);
    }
}
