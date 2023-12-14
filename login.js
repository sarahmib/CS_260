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

  localStorage.setItem('userName', userName);
  window.location.href = "calendar.html";
  }

async function createUser() {
  const userName = document.querySelector('#name')?.value;
  const password = document.querySelector('#password')?.value;
  const response = await fetch('/api/auth/create', {
    method: 'post',
    body: JSON.stringify({ userName: userName, password: password }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  
  localStorage.setItem('userName', userName);
  window.location.href = "calendar.html";
  
}

const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

socket.onmessage = async (event) => {
  const msg = JSON.parse(await event.data.text());
  displayMsg('New event: ' + msg);
}

function displayMsg(msg) {
const banner = document.getElementById('banner');
messageElement = document.createElement('div');
messageElement.textContent = msg;

banner.appendChild(messageElement);

banner.style.display = 'block';

setTimeout(() => {
  messageElement.remove();
  banner.style.display = 'none';
}, 5000);
}