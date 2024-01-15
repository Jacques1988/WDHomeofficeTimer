import { User } from '../users/user.model.js';
import bcrypt from 'bcrypt';


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

export async function getUsernameAction(req, res) {
    console.log('Hallo');
    const userId = req.params.id;
    console.log(userId);
}