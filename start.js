const app = require('./app');
const config = require('./config.json');
const host = require('./host.config.json');
const request = require("request");
const fs = require("fs");
const { printLine } = require('./js/logSystem');

if (!fs.existsSync(config.tmp_folder)){
    fs.mkdirSync(config.tmp_folder);
}

if (host.watchdog_host && host.watchdog_id) {
    setInterval(() => {
        request.get(`http://${host.watchdog_host}/watchdog/ping?id=${host.watchdog_id}&entity=Sequenzia-${host.system_name}${(process.env.NODE_APP_INSTANCE) ? '-' + process.env.NODE_APP_INSTANCE : ''}`, async (err, res) => {
            if (err || res && res.statusCode !== undefined && res.statusCode !== 200) {
                console.error(`Failed to ping watchdog server ${host.watchdog_host} as Sequenzia:${host.watchdog_id}${(process.env.NODE_APP_INSTANCE) ? ':' + process.env.NODE_APP_INSTANCE : ''}`);
            }
        })
    }, 60000);
    request.get(`http://${host.watchdog_host}/watchdog/init?id=${host.watchdog_id}&entity=Sequenzia-${host.system_name}${(process.env.NODE_APP_INSTANCE) ? '-' + process.env.NODE_APP_INSTANCE : ''}`, async (err, res) => {
        if (err || res && res.statusCode !== undefined && res.statusCode !== 200) {
            console.error(`Failed to init watchdog server ${host.watchdog_host} as Sequenzia:${host.watchdog_id}${(process.env.NODE_APP_INSTANCE) ? ':' + process.env.NODE_APP_INSTANCE : ''}`);
        }
    })
}
const server = app.listen((process.env.NODE_APP_INSTANCE) ? parseInt(process.env.NODE_APP_INSTANCE.toString()) + parseInt(config.http_port.toString()) : config.http_port, () => {
    printLine('ExpressInit', `Web server is running on port ${server.address().port}`, 'debug');
    process.send('ready');
});