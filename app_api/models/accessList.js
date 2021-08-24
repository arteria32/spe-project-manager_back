var mongoose = require('mongoose');


var accessList= new mongoose.Schema({
    userName:String,
    access:Boolean
    })

    
mongoose.model('AccessList', accessList,'user');