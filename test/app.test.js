const test = require('node:test');
const assert = require('node:assert');
const request = require('supertest');
const app = require('../app');

test('root URL shows the page title', async () => {
  const res = await request(app).get('/');
  assert.strictEqual(res.status, 200);
  assert.match(res.text, /Getting Your First Green Build on CircleCI/);
});
