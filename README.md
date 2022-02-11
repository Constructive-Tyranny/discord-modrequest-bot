# discord-modrequest-bot
Simple Discordbot we use to check our IRC relay for modrequests.  
This bot requires a relay to work. (public Jupiter IRC channel to Discord).

### We are currently developing a different and better method, untill that one is completed, this will have to do.  
   
# How to run?  
Make sure you create a config.js file based on the example one, fill it in with the correct details and you're good to go!  

Docker:  
``docker build . -t modrq-bot``  
``docker run --name=modrequest-bot --restart=always modrq-bot``  

NodeJS:  
``npm install``  
``node bot.js ``
