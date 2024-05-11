import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    provincia: String
})

export default model('users', userSchema);