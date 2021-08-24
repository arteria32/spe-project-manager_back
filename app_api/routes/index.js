var express = require('express');
var router = express.Router();
var cors = require('cors');
var ctrlProjects = require('../controllers/projects');
var app = express();
app.use(cors());
router.get('/projects', ctrlProjects.getAllProjects);
router.post('/projects', ctrlProjects.createNewProject);
router.get('/projects/:tag', ctrlProjects.getProjectByTag);
router.delete('/projects/:tag', ctrlProjects.deleteProjectByTag);
router.put('/projects/:tag', ctrlProjects.updateProjectByTag);

router.get('/projects/:tag/events', ctrlProjects.getAllEventsOfProject);


router.get('/CheckAccess/:userName', ctrlProjects.checkAccess);



module.exports = router;
