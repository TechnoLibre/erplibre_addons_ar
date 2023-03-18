// Add event listener to run the function when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the canvas element and its 2D context
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');

  // Check if the browser supports mediaDevices and getUserMedia
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Request access to the user's webcam
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function(stream) {
        // Create a video element and set its source to the webcam stream
        const video = document.createElement('video');
        video.srcObject = stream;
        video.play();
        // Call updateCanvas function with the video element
        updateCanvas(video);
      });
  }

  // Function to update the canvas with the video feed and apply the filter
  function updateCanvas(video) {
    // Set the canvas dimensions to match the window dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Check if the video has enough data to be displayed
    if (video.readyState === video.HAVE_ENOUGH_DATA) {
      // Draw the video frame on the canvas
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Get the image data from the canvas
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // Iterate through the image data (RGBA values)
      for (let i = 0; i < data.length; i += 4) {
        // Get the red, green, and blue values of the current pixel
        const red = data[i];
        const green = data[i + 1];
        const blue = data[i + 2];

        // Set the threshold for detecting red color
        const threshold = 65;

        // Check if the red value is greater than the green and blue values by the threshold
        if (red > green + threshold && red > blue + threshold) {
          // Change the pixel color to green (R=0, G=255, B=0)
          data[i] = 0;
          data[i + 1] = 255;
          data[i + 2] = 0;
        }
      }

      // Put the modified image data back on the canvas
      context.putImageData(imageData, 0, 0);
    }

    // Request the browser to call the updateCanvas function on the next animation frame
    requestAnimationFrame(() => updateCanvas(video));
  }
});
