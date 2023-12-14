function display_user() {
    document.getElementById("calendar_name").innerHTML = localStorage.getItem("userName") + "'s calendar";
}

async function display_events(day) {

    // Get the selected month and year
    const month = document.getElementById("month").getAttribute("name");
    const year = document.getElementById("year").getAttribute("name");
    const eventContainer = document.getElementById("scheduledEvents");

    const userName = localStorage.getItem('userName');
    const date = `${month}/${day}/${year}`;
    console.log(date)
    try {
        const response = await(fetch(`/api/events?day=${date}&username=${userName}`));
        specific_day_events = await response.json();
        console.log(response)
    } catch {
        eventsText = localStorage.getItem('events');
        events = JSON.parse(eventsText);
    }

    if (specific_day_events) {
        for (single_event of specific_day_events) {
            info = single_event.event
            console.log(info)
            const eventDiv = document.createElement('div');
            eventDiv.innerHTML = `
                <h3>${info.eventName}</h3>
                <span>Event name: ${info.eventName}</span> <span>Event date: ${info.eventDate}</span>
                <br>
                <span>Event time: ${info.eventTime}</span> <span>Event location: ${info.eventLocation}</span>
                <br>
                <span>Notes: ${info.notes}</span>
                <br> <br>
            `;
            eventContainer.appendChild(eventDiv);
        }
    }
}

function configureWebSocket() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    
    this.socket.onmessage = async (event) => {
      const msg = JSON.parse(await event.data.text());
      if (msg.type === GameEndEvent) {
        this.displayMsg('player', msg.from, `scored ${msg.value.score}`);
      } else if (msg.type === GameStartEvent) {
        this.displayMsg('player', msg.from, `started a new game`);
      }
    };
  };

  function displayMsg(cls, from, msg) {
    const chatText = document.querySelector('#player-messages');
    chatText.innerHTML =
      `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
  };

  function broadcastEvent(from, type, value) {
    const event = {
      from: from,
      type: type,
      value: value,
    };
    this.socket.send(JSON.stringify(event));
  };