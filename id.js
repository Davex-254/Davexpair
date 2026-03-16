const { randomUUID } = require('crypto');

const SESSION_PREFIX = 'DAVE-X:~';

function makeid() {
  return randomUUID().replace(/-/g, '').slice(0, 16);
}

module.exports = { makeid, SESSION_PREFIX };
