import express, { Request, Response } from "express";
import { UserDto } from "../DTOs/UserDto";
import { BmiService } from "../Services/BmiService";

class UsersController {
  public path = "/users";
  public router = express.Router();

  private _bmiService: BmiService = new BmiService();

  //Keeping static userto seed data to test without fully implementing endpoints, etc
  private seedData: UserDto[] = [
    { gender: "Male", heightCm: 171, weightKg: 96 },
    { gender: "Male", heightCm: 161, weightKg: 85 },
    { gender: "Male", heightCm: 180, weightKg: 77 },
    { gender: "Female", heightCm: 166, weightKg: 62 },
    { gender: "Female", heightCm: 150, weightKg: 70 },
    { gender: "Female", heightCm: 167, weightKg: 82 },
  ];

  constructor() {
    this.initialiseRoutes();
  }

  private initialiseRoutes() {
    //GET user home page - success message
    this.router.get("/", this.getIndex);

    //GET request count of users using BmiCategory string
    this.router.get("/count/:bmiCategory", this.getUsersCount);

    //GET return all users in the database
    this.router.get("/all", this.getAllUsers);

    //POST create a user using dto
    this.router.post("/add/", this.postCreateUser);

    //POST create users using dto array
    this.router.post("/addMany/", this.postCreateUsers);

    //POST populate and return a fully formed user model
    this.router.get("/calc", this.postCalculateUserBmi);

    //GET return static seed data to as json
    this.router.get("/getSeedData", this.getReturnSeedData);

    //GET use static seed data to run add users method, returning populated data
    this.router.get("/processSeedData", this.getProcessSeedData);
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
    res.send(`Not implemented: POST /users/add`);
  };

  //Take a user info array and create a new user in the database
  postCreateUsers = (req: Request, res: Response) => {
    res.send(`Not implemented: POST /users/addMany`);
  };

  //Take a user info and return a fully populated user model object
  postCalculateUserBmi = (req: Request, res: Response) => {
    res.send("Not implemented: POST /users/calc");
  };

  //Return all users in the database - useful to check if a new user added successfully
  getAllUsers = (req: Request, res: Response) => {
    var userModels = this._bmiService.getAllUsers();

    res.status(200).json(userModels);
  };

  //When this get URL is hit, return seed data for viewing
  getReturnSeedData = (req: Request, res: Response) => {
    res.status(200).json(this.seedData);
  };

  //When this get URL is hit, use seed data and attempt to process
  getProcessSeedData = (req: Request, res: Response) => {
    var userModels = this._bmiService.addUsers(this.seedData);

    res.status(200).json(userModels);
  };
}

export default UsersController;
