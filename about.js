function displayQuote(data) {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        const containerEl = document.querySelector('#quote');
  
        const quoteEl = document.createElement('p');
        quoteEl.classList.add('quote');
        document.createElement('break');
        const authorEl = document.createElement('p');
        authorEl.classList.add('author');
  
        quoteEl.textContent = data.content;
        authorEl.textContent = data.author;
  
        containerEl.appendChild(quoteEl);
        containerEl.appendChild(authorEl);
      });
  }
 
  displayQuote();

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
};