function display_user() {
    console.log(localStorage.getItem('username'));
    console.log(document.getElementById("whose_calendar"));
    document.getElementById("calendar_name").innerHTML = localStorage.getItem("username") + "'s calendar";
}

async function display_events(day) {

    try {
        const response = await(fetch('/api/scores'));
        events = await response.json();

        localStorage.setItem('events', JSON.stringify(events));
    } catch {
        eventsText = localStorage.getItem('events');
        events = JSON.parse(eventsText);
    }

    // Get the selected month and year
    const month = document.getElementById("month").getAttribute("name");
    const year = document.getElementById("year").getAttribute("name");

    const date = `${month}/${day}/${year}`;

    // Check if events exist for the selected date
    if (events && events[date]) {
        const eventContainer = document.getElementById('scheduledEvents');
        eventContainer.innerHTML = ''; // Clear the previous events
        
        const selectedEvents = events[date];
        
        for (single_event of selectedEvents) {
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
            
            /*
            if (single_event.comments.length) {
                for (const comment of single_event.comments) {
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
                    console.log(single_event);
                    console.log('this worked 1');
                    updated_event = postComment(single_event, commentText);
                    
                    const commentSpan = document.createElement('span');
                    commentSpan.textContent = `User: ${commentText}`;
                    eventDiv.appendChild(commentSpan);
                    eventDiv.appendChild(document.createElement('br'));

                    single_event = updated_event;
                    localStorage.setItem('events', JSON.stringify(events));
                }
            });

            eventDiv.appendChild(addCommentSpan);
            eventDiv.appendChild(commentInput);
            eventDiv.appendChild(commentButton);
            */

            eventContainer.appendChild(eventDiv);
        }
    }
}

// COMMENT FUNCTIONALITY BUGGED. REMOVED FOR NOW
/*
async function postComment(event, comment) {
    try {
        console.log('this worked 2')
        event_and_comment = [event, comment]
        const response = await fetch('/api/comment', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(event_and_comment)
        });

        const updated_event = await response.json();
        return updated_event;
    } catch{
        event.comments.push(`User: ${comment}`);
        localStorage.setItem("events", JSON.stringify(events));
        return event;
    }
}
*/