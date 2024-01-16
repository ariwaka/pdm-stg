const mongoose = require('mongoose');

// Define schema for 'post'
const postSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
});

// Define schema for 'user'
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// Compile model from schema
const Post = mongoose.model('Post', postSchema);
const User = mongoose.model('User', userSchema);

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected!'))
    .catch(err => console.log(err));

module.exports = {
    Post: Post,
    User: User
};