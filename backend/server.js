
import express from 'express';
import { router as userRouter } from './users/index.js';
import { router as workTimeRouter } from './workTimes/index.js';
import { mongoose } from "mongoose";
import cors from 'cors';


mongoose.connect('mongodb://0.0.0.0:27017/werkDigital',).then(() => {
    console.log('Connected to Database');
}).catch((error) => { console.log('Connection failed: ', error) });


const app = express();
const port = 3000;

app.use(express.json());
app.use('/', cors({ origin: 'http://localhost:4200' }));
app.use('/login', userRouter);
app.use('/timer/saveTimes', workTimeRouter);

app.get('/', function (req, res) { res.redirect('/login') });


app.listen(port, () => {
    console.log(`Server läuft auf Port: ${port}`);
});

