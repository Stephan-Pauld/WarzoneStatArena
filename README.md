# STATARENA
### Realtime statistics from the Call of Duty Franchise heavily focused on the Battle Royal "Warzone" StatArena Allows you to create live updating Twitch overlays to show off your skills from the battlefield, Compare your favourited stats with your friends or even a friendly game of "Strat Roulette" Randomly generating weapons to use and rules to follow with your friends. Watch top 20 warzone streams from Twitch.
#

## Tech Stack

### Front-End
    - Material UI
    - Material UI / Lab
    - Call-of-duty API
    - CORS
    - React
    - React-cookie
    - React-dom

### Back-end
    - MySql
    - Redis
    - oAuth
    - Passport
    - Node
    - Express

This project requires 4 servers which are laid out in the following manner:

1. redis server - install global
      - [Install Redis - Tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-redis-on-ubuntu-20-04)

2. MySql Server

     - [Install MySql - Tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-20-04
)

3. Clone the Database Server
    - [Stat Server - GitHub](https://github.com/Stephan-Pauld/statServer)
    - copy the .env.example file to .env
    - update the .env file with your data for Mysql database and Warzone API

4. Clone the React Server
    - [FrontEnd Server - GitHub](https://github.com/Stephan-Pauld/statsite)

#
## To run the app follow the underlined steps:

1. In the statServer project folder run `npm install` to install all dependencies

2. In the statsite project folder run `npm install` to install all dependencies

3. In the statServer project folder run `redis-server & npm start`

4. In the statsite project folder run `npm start`


Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
#

