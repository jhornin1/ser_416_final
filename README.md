# ser_416_final

## Purpose ##
This is a prototype website for SER 416 Spring A 2021 for Professor Buell.

This is created by John Horning (jhornin1@asu.edu) for the final project of the class. 
It simulates the main Customer-facing use cases of a website for providing a Community
Center's services to the surrounding area. There is no actual backend either in the form of
databases, persistent storage, or memory-based storage. It simulates simple UI interactions
and some basic checks.

## Setup ##
1. Install Node js. This app is developed with v. 15.2.1, but I'm pretty sure that V.14 and up is good.
2. Run `npm i` from the root directory. This will install the dependencies necessary to run the server.
3. Run `node src/main.js` from the root directory on command line. This will print out a message
that the server is up and listening and what url to navigate to from a web browser.
4. Open a web browser like Chrome or Firefox and navigate to the specified url. It should be `localhost:8080`
5. If another process is using Port 8080, the server will fail. At this point,
it is not able to search for another open port.

## Exit ##
The program can be closed by typing `Ctrl + C` into the command line. I used Windows for
development, and I don't remember the analogous keys in mac or linux. I would assume the work.