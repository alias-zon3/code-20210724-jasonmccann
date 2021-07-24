import express, { Request, Response } from "express";
import { BmiService } from "../Services/BmiService";

class UsersController {
  public path = "/users";
  public router = express.Router();

  private _bmiService: BmiService = new BmiService();

  constructor() {
    this.initialiseRoutes();
  }

  private initialiseRoutes() {
    //GET user home page - success message
    this.router.get("/", this.getIndex);

    //GET request count of users using BmiCategory string
    this.router.get("/count/:bmiCategory", this.getUsersCount);

    //POST create a user using dto
    this.router.post("/add/", this.postCreateUser);

    //POST populate and return a fully formed user model
    this.router.get("/calc", this.postCalculateUserBmi);
  }

  //Default index to return message letting us know the controller is working
  getIndex = (req: Request, res: Response) => {
    res.status(200).send("Successfully serving from UserController!");
  };

  //Get the count of users for a given BmiCategory
  getUsersCount = (req: Request, res: Response) => {
    var count = this._bmiService.getUserCount(req.body);

    res.status(200).send(count);
  };

  //Take a user info and create a new user in the database
  postCreateUser = (req: Request, res: Response) => {
    res.send(`Not implemented: POST /user/add`);
  };

  //Take a user info and return a fully populated user model object
  postCalculateUserBmi = (req: Request, res: Response) => {
    res.send("Not implemented: POST /user/calc");
  };
}

export default UsersController;
