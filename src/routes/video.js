const express = require('express');
const router = express.Router();
const videoController = require('../controllers/video');

router.post('/download', videoController.download);
router.post('/upload', videoController.upload);

router.get('/download/status', videoController.downloadStatus);
router.get('/upload/status', videoController.uploadStatus);

module.exports = router;
