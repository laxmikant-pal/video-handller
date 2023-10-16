const googleDriveService = require('../services/googleapi');
const EventEmitter = require('events');

const videoEmitter = new EventEmitter();
                                                  
async function download (req, res) {
  const { sourceFileId } = req.body;
  try {
    const downloadPath = 'C:/Users/laxmi/OneDrive/Desktop/vid-handller/download';
    videoEmitter.emit('download-start');
    await googleDriveService.downloadFile(sourceFileId, downloadPath, videoEmitter);
    videoEmitter.emit('download-complete');
    res.status(200).send('Download completed successfully');
  } catch (error) {
    res.status(500).send('Error: ' + error.message);
  }
}

async function upload(req, res) {
  const { destinationFolderId, fileName } = req.body;
  try {
    const uploadPath = "C:/Users/laxmi/OneDrive/Desktop/vid-handller/upload/test.mp4"; // Replace with your actual file path
    videoEmitter.emit('upload-start');
    await googleDriveService.uploadFileToDrive(uploadPath, destinationFolderId, fileName, videoEmitter);
    videoEmitter.emit('upload-complete');
    res.status(200).send('Upload completed successfully');
  } catch (error) {
    res.status(500).send('Error: ' + error.message);
  }
}

function downloadStatus(req, res) {
  videoEmitter.on('download-start', () => {
    res.write('Download started...\n');
  });

  videoEmitter.on('download-complete', () => {
    res.write('Download completed.\n');
    res.end();
  });
}

function uploadStatus(req, res) {
  videoEmitter.on('upload-start', () => {
    res.write('Upload started...\n');
  });

  videoEmitter.on('upload-complete', () => {
    res.write('Upload completed.\n');
    res.end();
  });
}

module.exports = {
  download,
  upload,
  downloadStatus,
  uploadStatus,
};
