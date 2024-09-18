const express = require('express');
const router = express.Router();
const User = require('../models/user');

//criar usuario
router.post('/', async(req, res) => {
    try{
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

//buscar usuarios
router.get('/', async(req, res) => {
    try{
        const users = await User.find();
        res.send(users);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;