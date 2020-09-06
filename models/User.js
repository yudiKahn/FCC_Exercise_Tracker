const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    username: {type: String, required:true}
});

module.exports = User = mongoose.model('user', schema);