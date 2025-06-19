const cron = require('node-cron');
const { checkUsageAndSendAlerts } = require('../controllers/projectController');

// Schedule the check every hour
cron.schedule('0 * * * *', () => {
  console.log('Running usage limit check...');
  checkUsageAndSendAlerts();
});