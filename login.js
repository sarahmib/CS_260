async function login() {
  const userName = document.querySelector('#name')?.value;
  const password = document.querySelector('#password')?.value;
  const response = await fetch('/api/auth/login', {
    method: 'post',
    body: JSON.stringify({ email: userName, password: password }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  if (response.ok) {
    localStorage.setItem(userName, uname.value);
    window.location.href = "calendar.html";
  }
  }

async function createUser() {
  const userName = document.querySelector('#name')?.value;
  const password = document.querySelector('#password')?.value;
  const response = await fetch('/api/auth/create', {
    method: 'post',
    body: JSON.stringify({ email: userName, password: password }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  if (response.ok) {
    localStorage.setItem(userName, uname.value);
    window.location.href = "calendar.html";
  }
}