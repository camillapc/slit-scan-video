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




// var video;
// var vScale = 16;

// var particles = [];

// var slider;

// function setup() {
//   createCanvas(640, 480);
//   pixelDensity(1);
//   video = createVideo("transit.mov");
//   video.size(width*1, height*1);
//   for (var i = 0; i < 100; i++) {
//     particles[i] = new Particle(random(width), random(height));
//   }
//   slider = createSlider(0, 255, 127);
//   background(51);
// }

// function draw() {
//   video.loadPixels();
//   for(var i = 0; i < particles.length; i++) {
//     particles[i].update();
//     particles[i].show;
//   }
// }

// let vid;
// let playing = false;
// function setup() {
//   createCanvas(400, 400);
//   vid = createVideo("transit.mov");
//   vid.size(400, 400);
//   vid.position(0, 0);
//   vid.hide();
// }

// function draw() {
//   background(220);
//   image(vid, 0, 0);
// }

// function mousePressed() {
//   if (playing) {
//   	vid.pause();
//     playing = false;
//   }
//   else {
//     vid.play();
//     playing = true;
//   }
// }
