function display_user() {
    console.log(localStorage.getItem('username'));
    console.log(document.getElementById("whose_calendar"));
    document.getElementById("calendar_name").innerHTML = localStorage.getItem("username") + "'s calendar";
}

async function display_events(day) {

    // Get the selected month and year
    const month = document.getElementById("month").getAttribute("name");
    const year = document.getElementById("year").getAttribute("name");

    const date = `${month}/${day}/${year}`;

    try {
        const response = await(fetch(`/api/events?day=${date}`));
        specific_day_events = await response.json();
    } catch {
        eventsText = localStorage.getItem('events');
        events = JSON.parse(eventsText);
    }

    if (specific_day_events) {
        for (single_event of specific_day_events) {
            const eventDiv = document.createElement('div');
            eventDiv.innerHTML = `
                <h3>${single_event.eventName}</h3>
                <span>Event name: ${single_event.eventName}</span> <span>Event date: ${single_event.eventDate}</span>
                <br>
                <span>Event time: ${single_event.eventTime}</span> <span>Event location: ${single_event.eventLocation}</span>
                <br>
                <span>Notes: ${single_event.notes}</span>
                <br> <br>
            `;
            eventContainer.appendChild(eventDiv);
        }
    }
}