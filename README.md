### Share the Day

Tired of messages for hangout plans getting buried in the group chat? Forgetting details of plans you've made? Share the day fixes this problem by allowing the group access to a shared calendar where you can easily create, view, and respond to all those fun events! In just a few clicks, everyone will know the time, date, location, and nature of your event, leaving you free to see what everyone else is planning. Allow yourself and your friends to let loose and Share the Day!

![Login page of the site](https://github.com/sarahmib/CS_260/blob/main/20230923_130253.jpg?raw=true)

![Main page of the site (what you see when you login)](https://github.com/sarahmib/CS_260/blob/main/20230923_130246.jpg?raw=true)

#####Features:
  -Visibility of all events input into the calendar (updated live)
  -Ability to input event name, date, time, place, and extra notes
  -Ability to comment on events submitted to the calendar
  -Clicking on an event will show that event's information to the right of the calendar
    -By default, the event shown on the right will be the next event on the calendar

#####Technology usage:
  **Authentication**
  While each user will not have a specific login, the calendar itself will have a login, with the calendar's name being displayed at the     top. When the user inputs a *unique* calendar name (it cannot have been used before by another or the same user) along with a password, a calendar is created; this calendar can then be accessed by the others in the user's group using the same credentials.

  **Database data**
  The events that users input will be stored in the websites database and shown to the user whenever they are logged into the calendar

  **Websocket data**
  The calendar with all events and comments input by other users is updated live.
