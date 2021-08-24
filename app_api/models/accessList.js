var mongoose = require('mongoose');


var accessList= new mongoose.Schema({
    userName:Number,
    access:boolean
    })

    
mongoose.model('AccessList', accessList,'user');