import { mongoose } from "mongoose";

const UserSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    birthdate: String,
    username: String,
    password: String,

}, { collection: 'werkDigital' });

const User = mongoose.model('User', UserSchema);

export async function fetchUser(id) {
    let user = await User.findById(id);
    console.log(user.firstname);
    return user;
}


export { User }




