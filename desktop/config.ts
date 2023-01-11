export default {
    title: "Team · IDE",
    // 开启 关闭窗口 最小化
    openCloseWindowMinimize: true,
    // 开启 启动最小化
    openStartMinimized: false,
    tray: {
        toolTip: "Team · IDE",
    },

    // 服务配置
    server: {
        // 服务根目录
        dir: "./assets/server",
        // so、dll库等
        libDir: "./assets/server/lib",
        // darwin 系统服务配置
        darwin: {
            exec: "./server",
            args: ["--isElectron"],
        },
        // linux 系统服务配置
        linux: {
            exec: "./server",
            args: ["--isElectron"],
        },
        // win 系统服务配置
        win: {
            exec: "./server.exe",
            args: ["--isElectron"],
        }
    },
}