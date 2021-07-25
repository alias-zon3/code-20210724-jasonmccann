# code-20210724-jasonmccann

Playing around with node, express, typescript, mocha, chai

# Philosophy

Not my usual tech stack (I am primarily a MS dev, using C#, .NET, MSSQL and some JS/TS with Angular) but want to try out a short test creating a node backend using express, I have a few pieces of criteria I want to meet:
- Find a spec, spend max 1 hour planning and researching technologies to use
- Timebox it to what I would consider 1 day's work (dipping in and out as life permits) - no more than 7.5h dev 
- Have something I can hit with postman/a web browser
- Get some sort of response with updated data
- Try and demonstrate the use of interfaces and classes, DTOs, models, entities, controllers, routing
- Using web resources is allowed, but all referenced material must be included in this doc
- No boilerplate project, must be completely from scratch

# Pre-requisites

- Nodejs (using v16.5.0)

**The following npm packages are installed globally**

- typescript (using 4.3.5)
- ts-node (using 10.1.0)

# Endpoints worth noting for testing (run on port 3000)

## ~/users/GetSeedData

Returns the static seed data from the spec for examination (in JSON format)

## ~/users/ProcessSeedData

Uses the static seed data in spec to run service processes, calculating bmi categories, health risk, generating an id and returning a UserModel array via json

## ~/users/All

Returns all current users in the database in JSON format by mapping User entities to UserModels - useful if you call one of the add endpoints to see if they entered correctly

# Wrapping up - thoughts

It has been a fun day, it's nice to try something new. I didn't make as much progress as I had hoped for but I am pleased with it as a tester for a node project in a day.

Resources referenced throughout development:
- https://www.split.io/blog/node-js-typescript-express-tutorial/
- https://github.com/donnyroufs/service-repository-pattern-assignment/tree/master/src
- https://wanago.io/2018/12/03/typescript-express-tutorial-routing-controllers-middleware/

# Main achievements

- Have a working node server
- Can process seed data
- Backend service that does processing, many calculations, all in place but had no time to hook up completely
- Data gets calculated, saved in a faux db instance
- Querying of data works
- Working unit tests for a single file
- Understanding of a full js backend improved

# Next steps

Take same spec, try out a boiler plate project so that a lot of the initial setup, routing and controller registration, database drop in replacement and trial and error aren't a thing - to see how far I can get in a day using that instead. Trying to put unit tests in after the fact is quite a common problem and I sacrificed the up front setup for scratching the "node from scratch" itch. Solution structure is something I'd like to take a gander at with some of the "best practices" boilerplate and example code. Loads of room to improve here.