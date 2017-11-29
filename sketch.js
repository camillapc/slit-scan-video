var video;
var vid;
let playing = true;

var x = 0;

function setup() {
  createCanvas(800, 800);
  pixelDensity(3);
  video = createVideo("flowers.mov");
  video.size(width*1, height*1);
  video.size(800, 800);
  video.play();
  video.loop();
  background(51);
 // vid = createVideo("flowers.mov");
 //  vid.size(800, 800);
 //  vid.position(100, 100);
 //  vid.hide();
}

function draw() {
  video.loadPixels();
  // image(video, 0, 0);

  var w = video.width;
  var h = video.height;

  copy(video, w/2, 0, 1, h, x, 0, 1, h);

  x = x + 5;

  if (x > width) {
    x = 0;

      //image(vid, 0, 0);
  }


}
