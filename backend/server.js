import { config } from 'dotenv';
import express from 'express';
import { router as userRouter } from './users/index.js';
import { router as workTimeRouter } from './workTimes/index.js';
import mongoose from "mongoose";
import https from 'https';
import { readFileSync } from 'fs';
import cors from 'cors';

config();
mongoose.connect(process.env.database,).then(() => {
    console.log('Connected to Database');
}).catch((error) => { console.log('Connection failed: ', error) });

// const privateKeyPath = '/etc/letsencrypt/live/worktimetracker.bluewave-tech.de/privkey.pem';
// const certificatePath = '/etc/letsencrypt/live/worktimetracker.bluewave-tech.de/fullchain.pem';

const app = express();

// const certOptions = {
//     key: readFileSync(privateKeyPath, 'utf8'),
//     cert: readFileSync(certificatePath, 'utf8'),
// }
// const server = https.createServer(certOptions, app);

const port = process.env.standardPort || 8080;

app.use(express.json());

app.use('/', cors({ origin: process.env.corsAddress }));

app.get('/', function (req, res) {
    res.redirect('/login')
});
app.use('/login', userRouter);
app.post('/signUp', userRouter);
app.use('/timer', workTimeRouter);

app.listen(port, () => {
    console.log(`Server läuft auf Port: ${port}`);
});

