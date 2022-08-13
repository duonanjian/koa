const redis = require('redis');
const client = redis.createClient(6379, '127.0.0.1');
client.on('ready', function (res) {
  console.log('ready');
});
client.on('end', function (err) {
  console.log('end');
});
client.on('error', function (err) {
  console.log('rrr');
});
client.on('connect', function () {
  console.log('redis connect success!');
});
module.exports = client