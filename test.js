require('dotenv').config();
const { formatDate } = require('./utils');

let passed = 0;

function assert(label, condition) {
  if (!condition) { console.error('FAIL:', label); process.exit(1); }
  console.log('ok -', label);
  passed++;
}

assert('formatDate returns a string', typeof formatDate(new Date()) === 'string');
assert('formatDate has correct format', /^\d{4}-\d{2}-\d{2}$/.test(formatDate(new Date())));

console.log(`\n${passed} tests passed`);
