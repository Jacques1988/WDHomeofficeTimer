import { mongoose } from 'mongoose';

mongoose.connect(
    'mongodb://localhost:27017/werkDigital',
).then(() => {
    console.log('Connected to the Database')
}).catch(() => { console.log('Connection failed') });



const UserSchema = mongoose.Schema({
    id: Number,
    name: String,
    password: String,

}, { collection: 'user' });

const User = mongoose.model('User, UserSchema');


