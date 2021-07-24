import { Request, Response } from 'express';

//Default index to return message letting us know the controller is working
exports.users_get_index = (req: Request, res: Response) => {
    res.status(200).send('Successfully serving from UserController!')
}

//Get the count of users for a given BmiCategory
exports.users_get_userCount = (req: Request, res: Response) => {
    res.send('Not Implemented: GET /user/count/{BmiCategory}');
};

//Take a user info and create a new user in the database
exports.users_post_createUser = (req: Request, res: Response) => {
    res.send(`Not implemented: POST /user/add`);
};

//Take a user info and return a fully populated user model object
exports.users_post_calcUserBmi = (req: Request, res: Response) => {
    res.send('Not implemented: POST /user/calc');
};