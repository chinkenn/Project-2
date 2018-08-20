# Project-2

Bootcamp project 2
August 20, 2018

Ken Chin, Stacie Knisley, Anthony Koch, Brian Macauley



The concept of Gitbet is a responsive app for use with a mobile device or computer to make bets with friends. Users are able to play by entering a friend's name, an event and the amount to wager into an easy to use table. Gitbet data is automatically recorded. Gitbet users pay using the cryptocurrency, Gitbet currency or Gitcoin. Gitbet was created to provide an easy to use application to make friendly bets with friends and family.


Examples of possibe user's stories include:

Greg is out with friends and wants to bet who will win the Browns against Steelers game, GITBET makes it easy to make bets and record the progress and status of bets through MySQL database. Gail would like to wager about a Wimbeldon match with her sister located in another time zone. GITBET goes anywhere the users picks the event and selects a date from a calendar using Bootstrap-datetimepicker. Garrett is organizing Cornhole games at a family reunion and easily tracks matches with GITBET. The date and time is automatically recorded using Sequelize.


The design process of Gitbet originated by creating a wireframe of the web page layout through the use of a chalkboard and the program Balsamiq. Our group members communicated through Slack and Github. The initial idea was to create a mobile responsive web page containing:
- User or New User Sign in page with a navigation bar to select the Home, Create Bet pages and a link to the New User page.
- Create Bet page to enter user name, name of second better, the event, the amount and a calnedar to select the date of the bet.
- Home page containing buttons that go to the Current, Past and Outstanding bets tables.


Ken Chin and Stacie Knisley chose to work on the backend development and Brian Macauley and Anthony Koch offered to create the frontend web pages. Ken and Stacie used MySQL and Sequelize to create the database and the API and HTML Routes.js files for the Get and Post functions. Brian and Anthony created the frontend web pages through the use of HTML, CSS, Bootstrap and Handlebars. Additional applications used to create Gitbet include NPM Moment, Express, Node.js, NPM, Bootstrap Datetimepicker, JSON packages and AJAX. 

The MVC model was utilized through the Models or the "M" with the use of the balance.js, bets.js, index.js and schema.sql files containing the data and data direction. The "V" or View of MVC was used through the use of the HTML, Handlebars and CSS files. The "C" or the Controller of MVC was utilized through the use of the apiRoutes.js and htmlRoutes.js files.


Some of the obstacles encountered to complete the Gitbet include difficulties writing the code, using the correct versions of the applications and to deploy versions to Github. 
- We were using two different versions of Bootstrap: 3.3.7 and 4.0.0-beta.3, one version of the code was cancelling out the other version. 
- We were missing "current" in file directory for the app.get function in the htmlRoutes.js file. It should have been written "/current/:user".
- Also, we had difficulties to get the "Results/Winner" column to update properly in the Current and Outstanding tables.


Possible future developments for the Gitbet application are:
- Use mulitiple users or teams together through Gitbet.
- Ability to maintain records.
- Provide the option to use Gitbet for personal events, such as Fantasy Football, Golf or Bowling leagues, etc.
- Link APIs from different professional sporting organizations or teams.

The process to produce the Gitbet application was a challenge at times. However, we were able to overcome the obstacles and create a successful dynamic website. Gitbet is a fun and easy to use app for friendly wagers.