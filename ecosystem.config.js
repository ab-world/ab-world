module.exports = {
    apps: [
        {
            name: "abworld",
            script: "node_modules/next/dist/bin/next",
            args: "start -p 5825",
            cwd: "./",
            instances: 1,
            autorestart: true,
            exec_mode: "fork",
            listen_timeout: 50000,
            kill_timeout: 5000,
        },
    ],
};