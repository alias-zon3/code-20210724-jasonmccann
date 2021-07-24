//Import required namespaces
import express, { Request, Response, NextFunction } from "express";

//Construct our single express instance and define the port we want to use
const app = express();
const port = 3000;

//Define our user info interface to keep our data strongly typed
interface IUserInfo {
  gender: string; //TODO swap out for future enum
  heightCm: number;
  weightKg: number;
}

//Define a user model which will be intended to be returned as part of a future response (once implemented)
class UserModel implements IUserInfo {
  id: number;
  gender: string; //TODO swap out for future enum
  heightCm: number;
  weightKg: number;
  bmi: number;
  bmiCategoryId: number;
}

//Define out DTO so that we can return static data (intended to be DTO posted to server and not returned from the server, but purely for testing ATM)
class UserDto implements IUserInfo {
  gender: string; //TODO swap out for future enum
  heightCm: number;
  weightKg: number;
}

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
