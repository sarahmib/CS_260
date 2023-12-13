# Share the Day

Tired of messages for hangout plans getting buried in the group chat? Forgetting details of plans you've made? Share the day fixes this problem by allowing the group access to a shared calendar where you can easily create, view, and respond to all those fun events! In just a few clicks, everyone will know the time, date, location, and nature of your event, leaving you free to see what everyone else is planning. Allow yourself and your friends to let loose and Share the Day!

![Login page of the site](https://github.com/sarahmib/CS_260/blob/main/20230923_130253.jpg?raw=true)

![Main page of the site (what you see when you login)](https://github.com/sarahmib/CS_260/blob/main/20230923_130246.jpg?raw=true)

### Features:  

  -Visibility of all events input into the calendar (updated live)  
  
  -Ability to input event name, date, time, place, and extra notes  
  
  -Ability to comment on events submitted to the calendar  
  
  -Clicking on an event will show that event's information to the right of the calendar  

  -By default, the event shown on the right will be the next event on the calendar  
  

### Technology usage:

  **Authentication:**  
  While each user will not have a specific login, the calendar itself will have a login, with the calendar's name being displayed at the     top. When the user inputs a *unique* calendar name (it cannot have been used before by another or the same user) along with a password, a calendar is created; this calendar can then be accessed by the others in the user's group using the same credentials.

  **Database data:**  
  The events that users input will be stored in the websites database and shown to the user whenever they are logged into the calendar

  **Websocket data:**  
  The calendar with all events and comments input by other users is updated live.

## HTML deliverable
* HTML pages - Four HTML page that represent the ability to login, view a calendar, submit an event, and view information about the site.<br>
- Links - The login page automatically links to the calendar viewing page. All pages contain links to each other.<br>
- Text - Most text used is on the about page. Other text is in dropdown boxes, such as the M/D/Y selection.<br>
- Images - There's an image that will be to the right of the month/year display of the calendar.<br>
- Login - Input box and submit button for login.<br>
- Database - The event information and comments represent what will be pulled from the database.<br>
- WebSocket - Events and comments displayed will also be updated live.<br>

## CSS deliverable
For this deliverable I properly styled the application into its final appearance.

- Header, footer, and main content body
- Navigation elements - I styled them into the layout and appearance I wanted
- Responsive to window resizing - My app responds to size changes in the desired way
- Application elements - Use of contrast and whitespace
- Application text content - Consistent fonts
- Application images - Finalized the layout of the month's icon

## JS deliverable
For this deliverable I implemented JavaScript so that the app is usable to an extent. I also added placeholders for future technology.

- Login - When you press the login button it takes you to the voting page and displays the input username above the calendar
- Database - Displays events on a given day when it is clicked, as well as comments left on a given event
- WebSocket - Events and comments displayed will also be updated live

## Service deliverable
For this deliverable, I added service endpoints as well as placeholders for future technology such as a database

- Node.js/Express HTTP service - Done
- Static middleware for frontend - Done
- Calls to third party endpoints - Done on about page
- Backend service endpoints - Endpoints created
- Frontend calls service endpoints - Done using fetch function
- Please note that the comment functionality on events is bugged and has been removed for the time being, but all required aspects of the project are still fulfilled.

## DB deliverable
For this deliverable, I stored the events in the database

- MongoDB Atlas database created - Done
- Endpoints for data - My endpoints process data, send it to mongo's database, and retrieve from the database
- Stores data in MongoDB - Done

## Login deliverable
For this deliverable, I associate submitted events with an authenticated user

- User registration - Creates a new account in the database.
- Existing user - Existing users can login, create events under the username, and access only events associated with the username.
- Use MongoDB to store credentials - Stores both user and the events.
- Restricts functionality - You cannot submit or view events until you have logged in. Please note that this restriction is on the backend, and no indication is shown on the frontend besides the website not functioning the same as a user that is logged in
