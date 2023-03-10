# erplibre_addons_ar
ERPLibre addons augmented reality

Documentation Prototype AR

This is an HTML document that uses the A-Frame and AR.js libraries to create an augmented reality scene. The scene is rendered in a browser using a webcam as the tracking source. Here is a breakdown of the different parts of the code:

The <meta> tag specifies the viewport settings for the page.

The <script> tags load the necessary libraries for the AR scene, including A-Frame and AR.js, as well as two gesture detection scripts.
The <body> tag sets the margins and overflow for the page.
  
The <a-scene> tag is the root element for the AR scene. It includes various attributes that define the scene's settings, such as disabling the VR mode UI and loading screen, enabling the AR.js library, and specifying the tracking method and source type.
  
Inside the <a-scene> tag is an <a-marker> tag that defines the marker used for tracking. The type attribute is set to "pattern" and the preset attribute is set to "custom", indicating that a custom marker pattern is being used. The url attribute specifies the location of the marker pattern file, and the raycaster attribute specifies which objects should be affected by the raycaster component. The emitevents attribute is set to "true", which means the marker emits events that can be detected by other elements in the scene.
  
Inside the <a-marker> tag are three child elements: an <a-text> element, an <a-image> element, and two <a-sphere> elements. These are 3D objects that are positioned relative to the marker. The <a-text> element displays the text "Prototype AR" in yellow color, and is positioned above the marker. The <a-image> element displays an image and has a click event attached to it, which rotates the image when clicked. The <a-sphere> elements are colored spheres that also have a rotation animation.
The <a-entity> tag at the end of the scene defines the camera that is used to render the scene from the user's perspective.
Overall, this code creates a simple AR scene with a custom marker pattern, some 3D objects, and gesture detection.

Ar.js Documentation: https://ar-js-org.github.io/AR.js-Docs/
  
Ar.js Studio: https://ar-js-org.github.io/studio/
  
Github link to variety of examples: https://github.com/stemkoski/AR.js-examples
  
Variety of examples: https://stemkoski.github.io/AR.js-examples/index.html
  

# Tutorial
## Step by step
  
Step 1: Set up your project
To create an augmented reality scene, you'll need to have a web page with the A-Frame and AR.js libraries included. You can download these libraries from their respective websites and include them in your HTML file. Here's an example of how to include them using CDNs:

                <!DOCTYPE html>
                <html>
                  <head>
                    <meta charset="UTF-8">
                    <title>AR Scene</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
                    <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
                  </head>
                  <body>
                    <!-- AR scene code goes here -->
                  </body>
                </html>




Step 2: Set up the scene
  
Inside the body of your HTML file, you'll need to create an <a-scene> element that defines the AR scene. This element should have several attributes that specify the settings for the scene. Here's an example:

              <a-scene
                vr-mode-ui="enabled: false;"
                loading-screen="enabled: false;"
                arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: false;" embedded>
                <!-- AR scene content goes here -->
              </a-scene>
  
 
Step 3: Add a marker
  
Next, you need to define a marker that will be used to track the AR content. In this example, the marker is defined using an <a-marker> element with a pattern type. The marker is also given an ID of "animated-marker" for reference later on. Additionally, the marker has a URL that points to an image file that is used to detect the marker in the real world. The marker also has a raycaster attribute that specifies which objects the cursor will intersect with, and emitevents attribute that enables the marker to emit events, and a cursor attribute that specifies the type of cursor to use. Finally, the <a-marker> element has several child elements including an <a-text> element, an <a-image> element, and two <a-sphere> elements.
  
                    <a-marker
                      id="animated-marker"
                      type="pattern"
                      preset="custom"
                      url="assets/marker.patt"
                      raycaster="objects: .clickable"
                      emitevents="true"
                      cursor="fuse: false; rayOrigin: mouse;"
                      id="markerA">
                     <!-- Marker content goes here -->
                    </a-marker>

Step 4: Add content to the marker
Inside the <a-marker> element, you can add any 3D elements that you want to display when the marker is detected. In this example, an <a-text> element with the value "Prototype AR" is added, along with an <a-image> element that displays an image, and two <a-sphere> elements that are colored blue and red respectively. The <a-image> element also has a rotation animation that rotates the image around its Y-axis.

            <a-marker >
                <!-- Add text element -->
                <a-text value="Prototype AR"
                    gesture-detector
                    color="yellow"
                    position="0 30 0"
                    rotation="-90 0 0"
                    scale="5 5 5"
                    font="https://cdn.aframe.io/fonts/Roboto-msdf.json">
                </a-text>

                <!-- Add image element -->
                <a-image
                    src="assets/asset.png"
                    scale="3 1 1"
                    class="clickable"
                    rotation="-180 0 0"
                    gesture-handler
                    animation="property: rotation; to: 0 180 0; loop: true; easing: linear">
                </a-image>



                <!-- Add sphere elements -->
                <a-sphere position="1.5" color="blue" radius ="0.15" gesture-handler>
                    <a-animation
                        attribute="color"
                        dur="10000"
                        from="blue"
                        to="orange"
                        repeat="indefinite">
                    </a-animation>
                </a-sphere>
                
                <a-sphere position="-1.5" color="red" radius ="0.15" gesture-handler>
                    <a-animation
                        attribute=" color"
                        dur="10000"
                        from="red"
                        to="green"
                        repeat="indefinite">
                    </a-animation>
                </a-sphere>
            </a-marker>

Step 5: Add a camera
  
To view the AR scene, you need to add a camera entity to the <a-scene> element. This can be done using the <a-entity> element with the camera attribute:

            <a-entity camera></a-entity>


Step 6: Add gesture detection and handling
  
To enable gesture detection and handling in the AR scene, you need to include the gesture detector and handler scripts. These scripts are included using two <script> elements that link to the gesture-detector.js and gesture-handler.js files respectively. Additionally, the <a-scene> element has a gesture-detector attribute that enables gesture detection and a gesture-handler attribute that enables gesture handling.



## Ar.js Code Generator
### All of the images are located in the Word document, so you can follow the generator tutorial step-by-step

Step 1: Go to the following link: https://ar-js-org.github.io/AR.js-Docs/

Step 2: Choose the "Marker-based" option and click on "Start Building."
 
Step 3: Upload an image of the marker you want to use, and make sure to download it for future reference.
 
Step 4: Choose the content that you want your marker to display.
 
Step 5: Download the package. 

Step 6: Export your project to GitHub so that you can use it on other platforms with GitHub Pages. Make sure that the main HTML file is named "index.html." 

Step 7: Go to "Settings" in the top right of the repository.
 
Step 8: Click on the "Pages" tab.
 
Step 9: Choose the main branch in the branch options and click on "Save."
 
Step 10: Choose a custom domain name and click on "Save."
 
Step 11: Click on the generated link to access the website.
 
Step 12: Log in to GitHub from other platforms and navigate to the generated link above. Display the downloaded marker in front of your camera to see the results.


## Red to Green Camera Filter
### Here is the HTML code for a red-to-green filter

              <!-- This declares that this is an HTML document -->
              <!DOCTYPE html>
              <!-- This is the start of the HTML document -->
              <html>
                <head>
                  <!-- This sets the character encoding and viewport for the page -->
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <!-- This sets the title of the page -->
                  <title>Red to Green Camera Filter</title>
                  <!-- This links the CSS stylesheet to the HTML document -->
                  <link rel="stylesheet" href="/style.css">
                </head>
                <body>
                  <!-- This is the header of the page -->
                  <h1 style="font-size: 48px; margin-top: 50px;">Red to Green Camera Filter</h1>
                  <div>
                    <!-- This creates a table with two columns -->
                    <table>
                      <tr>
                        <!-- This is the first column of the table -->
                        <td>
                          <h2>Normal Camera</h2>
                          <!-- This creates a video container that will hold the camera feed -->
                          <div id="video-container">
                            <video id="video" autoplay></video>
                          </div>
                        </td>
                        <!-- This is the second column of the table -->
                        <td>
                          <h2>Inverted Red to Green Camera Filter</h2>
                          <!-- This creates a canvas that will hold the inverted red-to-green filtered video feed -->
                          <canvas id="canvas"></canvas>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <!-- This links the JavaScript file to the HTML document -->
                  <script src="/script.js"></script>
                </body>
              <!-- This ends the HTML document -->
              </html>

### Here is the JavaScript code that applies a red-to-green filter to the camera feed and inverts it
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

