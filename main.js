peter = "music2.mp3" ;
harry = "music.mp3" ;


function preload()

{

    song = loadSound("music.mp3")
    song = loadSound("music2.mp3")

}

function setup()

{

    canvas = createCanvas(600, 500);
   canvas.center();
   video = createCapture(VIDEO);
   video.hide();
   posenet = ml5.poseNet(video , modelLoad);
   posenet.on('pose', gotPoses);

}

function draw()

{

    image(video, 0, 0, 600, 500);

}