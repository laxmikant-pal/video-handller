# video-handller
this is application used for uploading and downloding video from google drive
this application help in upload and download video from google drive.
there are some changes are going to come on some places like we need to change the path on function accourding to our device .

like :-  const uploadPath = "C:/Users/laxmi/OneDrive/Desktop/vid-handller/upload/test.mp4"; // Replace with your actual file path
this the mention path but we need to chage it . 

After cloning the project .
Use command {npm install}.
To install the node module .
To start the apllication we can use command.
 
 {npm run start}

 this command start your apllication 

 This application is just Api based 
so to Test the Api we need PostMan . 
i try to share the postmans link . if it doesnt work use this 

For Download 

Method : Post 
Url :http://localhost:3000/video/download

Body :
{
  "sourceFileId": "1f4vI_QQV9S2zUnPugd-gd2MeS67ZRFGu"
}

For Upload 

Method : Post 
Url :http://localhost:3000/video/upload

Body :
{
  "destinationFolderId": "1f4lIX0WfjwR6WebrZDKGS9r2E45WA5Hc",
  "fileName": "video2160p.mp4"
}

For Status 
Method : Get 
Url :http://localhost:3000/video/download/status

Method : Get 
Url :http://localhost:3000/video/upload/status
