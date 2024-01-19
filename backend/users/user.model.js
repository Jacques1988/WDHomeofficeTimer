import { mongoose } from "mongoose";

const UserSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    birthdate: String,
    username: String,
    password: String,

}, { collection: 'users' });

const User = mongoose.model('User', UserSchema);

/* export async function fetchUser(id) {
    let user = await User.findById(id);
    return user;
} */


export { User }




