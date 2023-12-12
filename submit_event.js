async function submit_event() {
    var eventData = {
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

    if (!events[event.eventDate]){
        events[event.eventDate] = [];
    }

    events[event.eventDate].push(event);

    localStorage.setItem("events", JSON.stringify(events));

    window.location.href = "submit_event.html";
}