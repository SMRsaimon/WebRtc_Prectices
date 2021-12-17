var Constraints = {
  video: true,
  audio: true,
};

// if (navigator.mediaDevices.getDisplayMedia) {
//     navigator.mediaDevices.getDisplayMedia(Constraints).then(success).catch(error);
// } else {
//     navigator.getDisplayMedia(displayMediaStreamConstraints).then(success).catch(error);
// }

const videoCalling = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia(Constraints);

    console.log(stream)

    if (stream) {
      var video = document.querySelector("video");
      video.srcObject = stream;
      video.onloadedmetadata = function (e) {
        video.play();
      };
    }
  } catch (error) {
    console.log(error);
  }
};
// videoCalling()
//    navigator.mediaDevices.getUserMedia(Constraints)
//    .then(stream=>{
//     var video = document.querySelector('video');
//     video.srcObject = stream;
//     video.onloadedmetadata = function(e) {
//       video.play();
//     };

//     console.log(stream)

//    })
