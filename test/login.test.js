const test = require('node:test');
const assert = require('node:assert/strict');

const { validateLogin } = require('../src/login');

test('requires a username before logging in', () => {
  assert.deepEqual(validateLogin({ username: '   ', password: 'secret' }), {
    ok: false,
    message: 'Username is required.',
  });
});

test('requires a password before logging in', () => {
  assert.deepEqual(validateLogin({ username: 'alice', password: '' }), {
    ok: false,
    message: 'Password is required.',
  });
});

test('accepts a username and password', () => {
  assert.deepEqual(validateLogin({ username: ' alice ', password: 'secret' }), {
    ok: true,
    message: 'Welcome, alice!',
  });
});
