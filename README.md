#Project 1: GA Adventure

###By Sukhyun (Paul) Baik

#WORK ON, music synch. Responsive CSS.  Adding more questions.  Fixing bug where pop up appears after one stage.  Better reset button.  Changing the design to make it more smoother (i.e. background image looks little off.)  Alert needs to be more decorated.  Experiment with canvas.  

##About GA Adventure

GA Adventure is an interactive trivia game where the Adventurer goes to earn title "First Three Weeks Master" by defeating three stages.  Each stage has a monster that asks 10 HTML, CSS or Javascript questions.  Getting 5 or more questions after 10 questions allows the Adventurer to move to next stage.  Less than that, the Adventurer is devoured dies, leading to Game Over.  Passing all three stages makes you become the "First Three Weeks Master" and win the game.

##Opening the game
Go to or type in  https://neonagx.github.io/GA_Adventure/ on your web browser and play!

##Installation Instructions
On the url of your website, type in https://github.com/neonagx/GA_Adventure and press enter.  You will be at my game web pages.  Click on clone or download button on the middle right of the screen where it will show you the clone link.  Copy the link and go to your terminal.  Type in git clone
git@github.com:neonagx/GA_Adventure.git with a path to the file you want to download to.  Once downloaded, just open the directory where you stored the game, open the index.html and enjoy the game!

##Technologies Used
1. HTML
2. CSS
3. JAVASCRIPT
4. JQuery

##User Story
To go to user story go to [this link](https://trello.com/b/dggL1wgh/wdi-project-1-ga-adventure) to view

##Wireframes
Below are images for my wireframes.
![Intro Page](https://github.com/neonagx/GA_Adventure/blob/master/assets/wireFrame1.jpg?raw=true)

![Main Game Interface](https://github.com/neonagx/GA_Adventure/blob/master/assets/wireFrame2.jpg?raw=true)

##Approach Taken
First I would create index.html file with css and javascript directory.  Along with those file and directories, I would make another directory called the assets where I would store any music, picture, and gif files.  I approached the flow of the game first instead of design because I knew logic and functions are important.  Once I have my base game flow setup I would add design by adding different music, gif and responsive css.  I would constantly work on branch since I did not want to break the entire game on master.  Finally, once I was satisfied with the game, I would merge branch on to master and deploy at the site.

##Problems/Future Development
I still have trouble with making some answers exactly as tag <p> as a string in html. I had to separate <p> tag like this < p > in order to render into the browser.  Otherwise, answer will be empty.  In the future, I want to make sure answer choices are randomized as well.  I want to add more questions and responses to the monster.  I want to randomize the damage so that there is a chance that users are in the risk of dying with just one question wrong.  I need add more plot to the game.      

##MVP
1. Start button leads to the main game interface to the game.
2. User can go through all three stages of the game.
3. There is victory or game over image at the main game interface.
