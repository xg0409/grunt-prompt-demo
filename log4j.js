var log4js = require('log4js');

log4js.configure({
    appenders: [
        { type: 'console' },
        {
            type: 'file',
            filename: 'logs/error.log',
            pattern: '-yyyy-MM-dd',
            maxLogSize: 1024,
            alwaysIncludePattern: false,
            backups: 4,
            category: 'info'
        },
    ],
    replaceConsole: true
});

module.exports = log4js.getLogger('logger');