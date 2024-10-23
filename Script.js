//Get the file input and upload button elements
const fileInput = document.getElementById('file');
const uploadBtn = document.getElementById('upload-btn');

//Get the file list element
const fileList = document.getElementById('file-list');

//Get the share input and the button elements
const shareInput = document.getElementById('share-input');
const shareBtn = document.getElementById('share-btn');

//Add an event listener to the upload button
uploadBtn.addEventListener('click', uploadFiles);

//Add an Event listener to the share button
shareBtn.addEventListener('click', shareFile);

//Function to upload files
function uploadFiles() {
    //Get selected files
    const files = fileInput.files;

    //Loop through the files and upload them to Firebase Storage
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const storageRef = firebase.storage().ref();
        const uploadTask = storageRef.child(`files/${file.name}`).put(file);

        //Update the file list
        uploadTask.on('state_changed', (snapshot) => {
            const progress = (snapshot)
        })
    }
}