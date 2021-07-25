# code-20210724-jasonmccann

Playing around with node

# Pre-requisites

- Nodejs (using v16.5.0)

**The following npm packages are installed globally**

- typescript (using 4.3.5)
- ts-node (using 10.1.0)

# Endpoints worth noting for testing

## ~/users/GetSeedData
Returns the static seed data from the spec for examination (in JSON format)
## ~/users/ProcessSeedData
Uses the static seed data in spec to run service processes, calculating bmi categories, health risk, generating an id and returning a UserModel array via json

## ~/users/All
Returns all current users in the database in JSON format by mapping User entities to UserModels - useful if you call one of the add endpoints to see if they entered correctly