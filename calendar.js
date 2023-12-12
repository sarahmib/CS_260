function display_user() {
    console.log(localStorage.getItem('username'));
    console.log(document.getElementById("whose_calendar"));
    document.getElementById("calendar_name").innerHTML = localStorage.getItem("username") + "'s calendar";
}

async function display_events(day) {

    // Get the selected month and year
    const month = document.getElementById("month").getAttribute("name");
    const year = document.getElementById("year").getAttribute("name");
    const eventContainer = document.getElementById("scheduledEvents");


    const date = `${month}/${day}/${year}`;
    console.log(date)
    try {
        const response = await(fetch(`/api/events?day=${date}`));
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