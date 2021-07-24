//Add required router from express
import express = require('express');
var router = express.Router();

//Add required controller
var _userController = require(`../Controllers/UsersController`);

/* USER CONTROLLER ROUTES */
//GET user home page - success message
router.get('/', _userController.users_get_index);

//GET request count of users using BmiCategory string
router.get('/count/:bmiCategory', _userController.users_get_userCount);

//POST create a user using dto
router.post('/add/', _userController.users_post_createUser);

//POST populate and return a fully formed user model 
router.get('/calc', _userController.users_post_calcUserBmi);

module.exports = router;