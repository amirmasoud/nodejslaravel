var CronJob = require('cron').CronJob;
var exec = require("child_process").exec;
new CronJob('*/5 * * * * *', function() {
    console.log('Every 5 seconds...')
    exec("php /path/to/laravel/artisan command:run");
    // Add as many as you wish
}, null, true, 'America/Los_Angeles');
