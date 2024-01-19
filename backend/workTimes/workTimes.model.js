import { mongoose } from 'mongoose';


const workTimesSchema = mongoose.Schema({
    user: String,
    date: String,
    times: {
        workTimeStart: String,
        workTimeFinish: String,
    }
}, { collection: 'worktimes' },);

const WorkTimes = mongoose.model('WorkTimes', workTimesSchema);


export { WorkTimes };