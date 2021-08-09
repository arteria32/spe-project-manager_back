var mongoose = require('mongoose');




var socialLinkScheme= new mongoose.Schema({
    type:String,
    link:String
})
var eventScheme= new mongoose.Schema({
    name:String,
    description:String,
    date:String,
    link:String
})

var projectsInfoScheme= new mongoose.Schema({
id:Number,
name:String,
tag:String,
season:String,
description:String,
socialLinks:[socialLinkScheme],
events:[eventScheme]

})



mongoose.model('Project', projectsInfoScheme,'projects');