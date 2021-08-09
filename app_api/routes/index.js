var express = require('express');
var router = express.Router();
var cors = require('cors');
var ctrlProjects = require('../controllers/projects');

app.use(cors());
router.get('/projects', ctrlProjects.getAllProjects);
router.post('/projects', ctrlProjects.createNewProject);
router.get('/projects/:tag', ctrlProjects.getProjectByTag);
router.delete('/projects/:tag', ctrlProjects.deleteProjectByTag);
router.get('/projects/:tag/events', ctrlProjects.getAllEventsOfProject);



module.exports = router;
