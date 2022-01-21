const supports = navigator.mediaDevices.getSupportedConstraints();
if (!supports['facingMode']) {
    alert('This browser does not support facingMode!');
}

const options = {
    audio: false,
    video: {
        facingMode: 'user', // Or 'environment'
    },
};

const stream = await navigator.mediaDevices.getUserMedia(options);

// Stop the tracks
const tracks = stream.getTracks();
tracks.forEach(track => track.stop());

// Provide new options
stream = await navigator.mediaDevices.getUserMedia(options);

// Add this stream to the video object
videoElm.srcObject = null;
videoElm.srcObject = stream;
videoElm.play();

const tracks = stream.getTracks();

tracks.forEach(track => {
  console.log(track.getSettings().deviceId);
});