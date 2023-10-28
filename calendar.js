function display_user() {
    document.getElementById("calendar_name").innerHTML = localStorage.getItem("username")
}

function display_events(event) {
    events = JSON.parse(localStorage.getItem("events"));

    month = document.getElementById("month");
    month = month.name;

    year = document.getElementById("year");
    year = year.name

    dateClicked = event.target;
    dateClicked = dateClicked.id;

    const date = month + '/' + dateClicked + '/' + year;

    if (date in events) {
        events = events.date;
    }

    const eventContainer = document.getElementById('scheduledEvents');

    for (const event of events) {
        const eventDiv = document.createElement('div');
        eventDiv.innerHTML = `
            <h3>${event.eventName}</h3>
            <span>Event name: ${event.eventName}</span> <span>Event date: ${event.eventDate}</span>
            <br>
            <span>Event time: ${event.eventTime}</span> <span>Event location: ${event.eventLocation}</span>
            <br>
            <span>Notes: ${event.notes}</span>
            <br> <br>
        `;

        if(event.comments.length) {
        
            for (const comment of event.comments) {
                const commentSpan = document.createElement('span');
                commentSpan.textContent = comment; // needs to be format of "user: comment"
                eventDiv.appendChild(commentSpan);
                eventDiv.appendChild(document.createElement('br'));
            }
        }

        eventContainer.appendChild(eventDiv);
    }
}