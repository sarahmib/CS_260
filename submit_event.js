document.getElementById('eventForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var eventData = {
        eventName: document.getElementById('event name').value,
        eventDate: document.getElementById('event month').value + '/' + document.getElementById('event day').value + '/' + document.getElementById('event year').value,
        eventTime: document.getElementById('event hour').value + ':' + document.getElementById('event minute').value + ' ' + document.getElementById('am pm').value,
        eventLocation: document.getElementById('event place').value,
        notes: document.getElementById('notes').value
    };

    events = JSON.parse(localStorage.getItem("events"));

    if (!events[eventData.eventDate]){
        events[eventData.eventDate] = [];
    }

    events[eventData.eventDate].push(eventData);

    localStorage.setItem("events", JSON.stringify(events));
});