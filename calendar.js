function display_user() {
    console.log(localStorage.getItem('username'));
    console.log(document.getElementById("whose_calendar"));
    document.getElementById("calendar_name").innerHTML = localStorage.getItem("username") + "'s calendar";
}

function display_events(event) {
    // Parse the events from localStorage
    const events = JSON.parse(localStorage.getItem("events"));

    // Get the selected date from the clicked cell
    const dateClicked = event.target.id;

    // Get the selected month and year
    const month = document.getElementById("month").getAttribute("name");
    const year = document.getElementById("year").getAttribute("name");

    const date = `${month}/${dateClicked}/${year}`;

    // Check if events exist for the selected date
    if (events && events[date]) {
        const eventContainer = document.getElementById('scheduledEvents');
        eventContainer.innerHTML = ''; // Clear the previous events
        
        const selectedEvents = events[date];
        
        for (const event of selectedEvents) {
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

            if (event.comments.length) {
                for (const comment of event.comments) {
                    const commentSpan = document.createElement('span');
                    commentSpan.textContent = comment; // Should be in the format "user: comment"
                    eventDiv.appendChild(commentSpan);
                    eventDiv.appendChild(document.createElement('br'));
                }
            }

            const addCommentSpan = document.createElement('span');
            addCommentSpan.textContent = "Add comment: ";
            const commentInput = document.createElement('input');
            commentInput.setAttribute("type", "text");
            commentInput.setAttribute("placeholder", "Enter your comment");
            const commentButton = document.createElement('button');
            commentButton.textContent = "Submit Comment";

            commentButton.addEventListener('click', () => {
                const commentText = commentInput.value;
                if (commentText) {
                    event.comments.push(`User: ${commentText}`);
                    // Update the events array in localStorage here if necessary
                    localStorage.setItem("events", JSON.stringify(events));
                    
                    const commentSpan = document.createElement('span');
                    commentSpan.textContent = `User: ${commentText}`;
                    eventDiv.appendChild(commentSpan);
                    eventDiv.appendChild(document.createElement('br'));
                }
            });

            eventDiv.appendChild(addCommentSpan);
            eventDiv.appendChild(commentInput);
            eventDiv.appendChild(commentButton);

            eventContainer.appendChild(eventDiv);
        }
    }
}