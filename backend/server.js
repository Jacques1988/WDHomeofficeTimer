
import express from 'express';
import { router as userRouter } from './users/index.js';
import { mongoose } from "mongoose";


mongoose.connect('mongodb://0.0.0.0:27017/werkDigital',).then(() => {
    console.log('Connected to Database');
}).catch((error) => { console.log('Connection failed: ', error) });


const app = express();
const port = 3000;

app.use(express.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Request-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    next();
});

app.use('/', userRouter);



app.listen(port, () => {
    console.log(`Server läuft auf Port: ${port}`);
});

