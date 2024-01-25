import { User } from '../users/user.model.js';
import bcrypt from 'bcrypt';


export async function loginAction(req, res) {
    try {
        const user = await User.findOne({ username: req.body.name })
        if (!user) {
            return res.status(422).json({ message: 'Invalid user or password' })
        }
        const userId = user._id.toString();
        bcrypt.compare(req.body.password, user.password, function (err, results) {
            if (err) {
                throw new Error(err)
            }
            if (results) {
                return res.status(200).json({
                    id: userId,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    birthdate: user.birthdate,
                    username: user.username
                })
            } else {
                return res.status(401).json({ message: "invalid login" })
            }
        });
    } catch (error) {
        console.error('An error occured:', error.message);
        return res.status(500).json({ message: "Internal server error" })
    }
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
        return res.status(200).json({ userId: userId, userName: user.username });
    }
}

export async function getUser(id) {
    console.log(id);
}
