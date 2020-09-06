const router = require('express').Router();
const User = require('../models/User');

router.post('/new-user', (req,res)=>{
    const newUser = new User(req.body);
    newUser.save();
    res.json(newUser);
})

module.exports = router;