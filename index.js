// ********** selecting elements
const videoElement = document.querySelector('#video');
const btn = document.querySelector('#btn');
// ********** select the media for streaming on video element
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }
  } catch (err) {
    // catch error here
    console.log(`Whoops, error here: 
    ${err}`);
  }
}
// ********** apply picture in picture from the video element 
btn.addEventListener('click', async () => {
  // ***** disable the start button
  btn.disable = true;
  // ***** start picture in picture
  await videoElement.requestPictureInPicture();
  // inable the start button
  btn.disable = false;
})

// ********** on load
selectMediaStream()