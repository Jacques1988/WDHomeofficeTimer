import { WorkTimes } from "../workTimes/workTimes.model.js";
import { User } from '../users/user.model.js';
import nodemailer from 'nodemailer';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey('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');

const transporter = nodemailer.createTransport({
    service: 'sendGrid',
    auth: {
        user: 'apikey',
        pass: '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',
    }
})

export async function saveTimeAction(req, res) {
    const workTime = req.body;
    const savedTime = await WorkTimes.create({
        user: workTime.user,
        date: workTime.date,
        times: {
            workTimeStart: workTime.times.workTimeStart,
            workTimeFinish: workTime.times.workTimeFinish,
        }
    });

    const user = await User.findOne({ _id: workTime.user });

    const mailOptions = {
        to: 'jacquesvanluyck@gmail.com',
        from: 'jacquesvanluyck@gmail.com',
        subject: 'Neue Arbeitszeit eingetragen',
        html: `
        <div valign="top" align="center" style='max-width:100%; background-color:darkorchid; padding:2rem;'>
            <h1 style='color:whitesmoke'>Neue Arbeitszeiten </h1>
            <div style='color:whitesmoke'>
                ${user.username} hat neue Arbeitszeiten von ${workTime.times.workTimeStart} Uhr bis ${workTime.times.workTimeFinish} Uhr hinzugefügt.
            </div> 
        </div>
        `,
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
    });


    return res.status(200).json({ message: 'Arbeitszeit erfolgreich gespeichert' });
}

export async function fetchUserTimesAction(req, res) {
    const userId = req.query.user;
    const workday = req.query.date;
    const workTimes = await WorkTimes.find({ user: userId, date: workday });

    return res.status(200).json(workTimes)
}