async function submit_event() {
    var eventData = {
        username: localStorage.getItem('userName'), 
        eventName: document.getElementById('event name').value,
        eventDate: document.getElementById('event month').value + '/' + document.getElementById('event day').value + '/' + document.getElementById('event year').value,
        eventTime: document.getElementById('event hour').value + ':' + document.getElementById('event minute').value + ' ' + document.getElementById('am pm').value,
        eventLocation: document.getElementById('event place').value,
        notes: document.getElementById('notes').value,
        comments: []
    };

    try {
        const response = await fetch('/api/event', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(eventData)
        });

        const events = await response.json();
        localStorage.setItem('events', JSON.stringify(events));
        window.location.href = "submit_event.html";
    } catch {
        update_events_local(eventData);
    }
}

function update_events_local(event) {

    events = JSON.parse(localStorage.getItem("events"));

    events.push(event);

    localStorage.setItem("events", JSON.stringify(events));

    window.location.href = "submit_event.html";
};

function configureWebSocket() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    
    socket.onmessage = async (event) => {
      const msg = JSON.parse(await event.data.text());
      displayMsg('New event: ', msg);
    }
};

function displayMsg(cls, msg) {
    //TODO
};