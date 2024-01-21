import { WorkTimes } from "../workTimes/workTimes.model.js";



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
    return res.status(200).json({ message: 'Arbeitszeit erfolgreich gespeichert' });
}

export async function fetchUserTimesAction(req, res) {
    const userId = req.params.id;
    const date = req.params.date;
    console.log(userId, date);
    /* const workTimes = await WorkTimes.find({ user: userId });
    return res.status(200).json(workTimes) */
}