const { google } = require('googleapis');
const fs = require('fs');

const credentials = require('../../cred.json');

const drive = google.drive({
  version: 'v3',
  auth: new google.auth.JWT(
    credentials.client_email,
    null,
    credentials.private_key,
    ['https://www.googleapis.com/auth/drive']
  )
});

async function downloadFile(fileId, filePath, emitter) {
  const dest = fs.createWriteStream(filePath);
  const response = await drive.files.get({ fileId, alt: 'media' }, { responseType: 'stream' });

  response.data.on('data', (chunk) => {
    emitter.emit('download-progress', chunk.length);
  });

  return new Promise((resolve, reject) => {
    response.data
      .on('end', () => {
        emitter.emit('download-complete');
        resolve();
      })
      .on('error', (err) => {
        emitter.emit('download-error', err);
        reject(err);
      })
      .pipe(dest);
  });
}

async function uploadFileToDrive(filePath, destFolderId, fileName, emitter) {
  const fileMetadata = {
    name: fileName,
    parents: [destFolderId],
  };

  const media = {
    mimeType: 'application/octet-stream',
    body: fs.createReadStream(filePath),
  };

}

module.exports = {
  downloadFile,
  uploadFileToDrive,
};
