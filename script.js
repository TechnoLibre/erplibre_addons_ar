// Get references to the video element, canvas element, and canvas context
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// Check if the browser supports getUserMedia and video capture
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  // Request access to the user's camera and start the video stream
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(stream) {
      video.srcObject = stream;
      video.play();
    });
}

// Define a function to apply the green screen filter to the video stream
function greenScreen() {
  // Set the canvas dimensions to match the video stream
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  // Flip the image horizontally
  context.translate(canvas.width, 0);
  context.scale(-1, 1);

  // Draw the current video frame to the canvas (flipped horizontally)
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Flip the image back to its original orientation
  context.setTransform(1, 0, 0, 1, 0, 0);

  // Get the pixel data from the canvas
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  // Loop through every pixel in the pixel data array
  for (let i = 0; i < data.length; i += 4) {
    // Get the red, green, and blue components of the current pixel
    const red = data[i];
    const green = data[i + 1];
    const blue = data[i + 2];

    // Check if the current pixel is a bright shade of red
    if (red > 150 && green < 100 && blue < 100) {
      // If the pixel is red, set it to green
      data[i] = 0; // Set red channel to 0
      data[i + 1] = 255; // Set green channel to 255
      data[i + 2] = 0; // Set blue channel to 0
    }
  }

  // Put the modified pixel data back onto the canvas
  context.putImageData(imageData, 0, 0);
}

// Apply the green screen filter every 50 milliseconds
setInterval(greenScreen, 50);
