+(async function (window, webduino) {
  'use strict';
  var MODEL_URL = "https://127.0.0.1:8080/weights/";
  MODEL_URL = "https://marty5499.github.io/webduino-module-face/weights/";
  window.faceAPI = new webduino.module.face(MODEL_URL);

  window.createCamera = function (camSource, width, height, callback) {
    var c1 = document.createElement('canvas');
    c1.width = width;
    c1.height = height;
    document.body.appendChild(c1);
    var cam = new Camera(camSource);
    cam.blobData = null;
    cam.onCanvas(c1, function (c) {
      var ctx = c.getContext("2d");
      var img = new Image();
      img.src = c.toDataURL();
      callback(img);
    });
    return cam;
  }

}(window, window.webduino));