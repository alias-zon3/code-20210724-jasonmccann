//Import required namespaces
import express, { Request, Response, NextFunction } from "express";

import { UserDto } from "./DTOs/UserDto";

//Add required controller
import UsersController from "./Controllers/UsersController";

//Construct our single express instance and define the port we want to use
const app = express();
const port = 3000;

//Initialise our controller
var usersController = new UsersController();

//Register our routes using the controller and path
app.use(usersController.path, usersController.router);

//Create endpoint to return static data
const serverRunningMessage = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send("The server is running!");
};

//Define get endpoint to return static data using our function above
app.get("/", serverRunningMessage);

//Start the application on our desired port
app.listen(port, () => {
  console.log(`Currently listening on port ${port}`);
});
