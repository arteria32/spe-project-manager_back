var mongoose = require('mongoose');
var Project = mongoose.model('Project');

var sendJSONresponse = function (res, status, content) {
  res.status(status);
  res.json(content);
};


module.exports.getAllProjects = function (req, res) {
  Project.find().exec(function (err, results) {
    console.log('getAllProjects', results)
    if (results) {
      sendJSONresponse(res, 200, results)
    } else {
      sendJSONresponse(res, 404, {
        "message": "projects not found"
      });
    }
  })
}

module.exports.createNewProject = function (req, res) {
  Project.create({
    name: req.body.name,
    tag: req.body.tag,
    season: req.body.season,
    description: req.body.description
  }, function(err, location) {
    if (err) {
      console.log(err);
      sendJSONresponse(res, 400, err);
    } else {
      console.log(location);
      sendJSONresponse(res, 201, location);
    }
  });
};

module.exports.getProjectByTag = function(req, res) {
  console.log('Finding location details', req.params);
  if (req.params && req.params.tag) {
    Project
      .find({tag:req.params.tag})
      .exec(function(err, result) {
        console.log(result)
        if (!result) {
          sendJSONresponse(res, 404, {
            "message": "locationid not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(result);
        sendJSONresponse(res, 200, result);
      });
  } else {
    console.log('No projectTag specified');
    sendJSONresponse(res, 404, {
      "message": "No projectTag in request"
    });
  }
};

module.exports.deleteProjectByTag = function(req, res) {
  var projectTag = req.params.tag;
  if (projectTag) {
    Project
      .findOneAndDelete({tag:projectTag})
      .exec(
        function(err, location) {
          if (err) {
            console.log(err);
            sendJSONresponse(res, 404, err);
            return;
          }
          console.log("Location id " + projectTag + " deleted");
          sendJSONresponse(res, 204, null);
        }
    );
  } else {
    sendJSONresponse(res, 404, {
      "message": "No locationid"
    });
  }
};
module.exports.getAllEventsOfProject = function(req, res) {
  console.log('Finding location details', req.params);
  if (req.params && req.params.tag) {
    Project
      .find({tag:req.params.tag})
      .exec(function(err, result) {
        console.log(result.events)
        if (!result.events) {
          sendJSONresponse(res, 404, {
            "message": "locationid not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(result.events);
        sendJSONresponse(res, 200, result.events);
      });
  } else {
    console.log('No projectTag specified');
    sendJSONresponse(res, 404, {
      "message": "No projectTag in request"
    });
  }
};