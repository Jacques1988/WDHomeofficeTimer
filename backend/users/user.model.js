import { mongoose } from "mongoose";
import bcrypt from 'bcrypt';



mongoose.connect('mongodb://0.0.0.0:27017/werkDigital',).then(() => {
    console.log('Connected to Database');
}).catch((error) => { console.log('Connection failed: ', error) });


const UserSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    birthdate: String,
    username: String,
    password: String,

}, { collection: 'werkDigital' });

const User = mongoose.model('User', UserSchema);

export async function homeRoute(req, res) {
    res.send("");
}

export async function loginAction(req, res) {

    const user = await User.findOne({ name: req.body.username })
    const userId = user._id.toString();

    bcrypt.compare(req.body.password, user.password, function (err, results) {
        if (err) {
            throw new Error(err)
        }
        if (results) {
            return res.status(200).json(userId)
        } else {
            return res.status(401).json({ message: "invalid login" })
        }
    });
}


export async function signUpAction(req, res) {
    const signedUpUser = req.body;
    if (signedUpUser.password !== signedUpUser.passwordrepeat) {
        return res.status(401).json({ message: "Passwörter stimmen nicht überein!" })
    } else {
        const password = await bcrypt.hash(signedUpUser.password, 10);
        const savedUser = await User.create({
            firstname: signedUpUser.firstname,
            lastname: signedUpUser.lastname,
            birthdate: signedUpUser.bithdate,
            username: signedUpUser.username,
            password: password,
        });
        const user = await User.findOne({ username: savedUser.username })
        const userId = user._id.toString();
        return res.status(200).json(userId);
    }
}

