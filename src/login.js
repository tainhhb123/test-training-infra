function validateLogin(input) {
  const username = typeof input?.username === 'string' ? input.username.trim() : '';
  const password = typeof input?.password === 'string' ? input.password : '';

  if (!username) {
    return { ok: false, message: 'Username is required.' };
  }

  if (!password) {
    return { ok: false, message: 'Password is required.' };
  }

  return { ok: true, message: `Welcome, ${username}!` };
}

function renderMessage(element, result) {
  element.textContent = result.message;
  element.className = result.ok ? 'success' : 'error';
}

function initLoginForm() {
  const form = document.querySelector('#login-form');
  const message = document.querySelector('#message');

  if (!form || !message) {
    return;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const result = validateLogin({
      username: form.elements.username.value,
      password: form.elements.password.value,
    });

    renderMessage(message, result);
  });
}

if (typeof document !== 'undefined') {
  initLoginForm();
}

if (typeof module !== 'undefined') {
  module.exports = { validateLogin };
}
