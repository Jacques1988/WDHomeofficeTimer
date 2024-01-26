import { mongoose } from "mongoose";

const UserSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    birthdate: String,
    username: String,
    password: String,

});

const User = mongoose.model('users', UserSchema);


export { User }




