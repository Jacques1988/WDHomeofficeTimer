import { mongoose } from "mongoose";


mongoose.connect('mongodb://0.0.0.0:27017/werkDigital',).then(() => {
    console.log('Connected to Database');
}).catch((error) => { console.log('Connection failed: ', error) });



const UserSchema = mongoose.Schema({
    name: String,
    password: String,
}, { collection: 'werkDigital' });

const User = mongoose.model('User', UserSchema);

export async function homeRoute(req, res) {
    res.send("");
}

export async function loginAction(req, res) {
    const username = req.body.name;
    const password = req.body.password;
    const fetchedUser = await User.find({ name: username, password: password });
    console.log(fetchedUser);
}

