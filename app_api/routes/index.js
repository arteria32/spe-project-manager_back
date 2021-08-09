var express = require('express');
var router = express.Router();
var ctrlProjects = require('../controllers/projects');

router.get('/projects', ctrlProjects.getAllProjects);
router.post('/projects', ctrlProjects.createNewProject);
router.get('/projects/:tag', ctrlProjects.getProjectByTag);
router.delete('/projects/:tag', ctrlProjects.deleteProjectByTag);
router.get('/projects/:tag/events', ctrlProjects.getAllEventsOfProject);



module.exports = router;
