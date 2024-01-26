import { mongoose } from 'mongoose';


const workTimesSchema = mongoose.Schema({
    user: String,
    date: String,
    times: {
        workTimeStart: String,
        workTimeFinish: String,
    }
},);

const WorkTimes = mongoose.model('workTimes', workTimesSchema);


export { WorkTimes };