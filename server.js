const express = require('express');
const mongoose = require('./database.js');
const app = express();

app.use(express.json());

// Existing endpoints...

app.post('/users', async (req, res) => {
    const user = new mongoose.User({
        username: req.body.username,
        password: req.body.password // In a real-world scenario, you should hash the password
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));