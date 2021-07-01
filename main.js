NoseX = "";
NoseY = "";
function preload()
{
    loadedImage = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}
function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotposes);
}
function modelLoaded()
{
    console.log("Posenet is loaded");
}

function take_snapshot()
{
    save("Mustachefilterimage.jpg");
}
function draw()
{
   image(video, 0, 0, 300, 300);

   image(loadedImage, NoseX-45, NoseY-45, 100, 100);
}
function gotposes(results)
{
    if(results.length > 0)
    {
        console.log(results);
        NoseX = results[0].pose.nose.x;
        NoseY = results[0].pose.nose.y;
        console.log("nose_x = " + NoseX);
        console.log("nose_y = " + NoseY);
    }
}