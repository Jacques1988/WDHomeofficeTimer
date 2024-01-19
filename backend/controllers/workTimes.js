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
}