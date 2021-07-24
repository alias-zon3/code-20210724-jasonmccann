//Import required namespaces
import express, { Request, Response, NextFunction } from "express";

import { UserDto } from "./DTOs/UserDto";

//Add required routes
var userRouter = require('./Routes/Users');

//Construct our single express instance and define the port we want to use
const app = express();
const port = 3000;

//Register our routes
app.use('/user', userRouter);

//Create local static data (TEMP)
const getUserData = (req: Request, res: Response, next: NextFunction) => {
  let users: UserDto[] = [
    { gender: "Male", heightCm: 171, weightKg: 96 },
    { gender: "Male", heightCm: 161, weightKg: 85 },
    { gender: "Male", heightCm: 180, weightKg: 77 },
    { gender: "Female", heightCm: 166, weightKg: 62 },
    { gender: "Female", heightCm: 150, weightKg: 70 },
    { gender: "Female", heightCm: 167, weightKg: 82 },
  ];

  res.status(200).json(users);
};

//Define get endpoint to return static data using our function above
app.get("/getData", getUserData);

//Start the application on our desired port
app.listen(port, () => {
  console.log(`Currently listening on port ${port}`);
});
