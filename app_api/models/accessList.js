var mongoose = require('mongoose');


var accessList= new mongoose.Schema({
    userName:String,
    access:boolean
    })

    
mongoose.model('AccessList', accessList,'user');