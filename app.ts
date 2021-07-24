//Import required namespaces
import express from 'express';

//Construct our single express instance and define the port we want to use
const app = express();
const port = 3000;

//Start a basic application which does nothing but log for the time being
app.listen(port, () => {
    console.log(`Currently listening on port ${port}`);
});