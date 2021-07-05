let video, poseNet, poses = [];

function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.size(width, height);

    poseNet = ml5.poseNet(video, modelReady);
    poseNet.on("pose", (results) => (poses = results));

    video.hide();
}

function modelReady() {
    select("#status").html("Model Loaded");
}

Face.onNewFaceDetected = function (f) {
    //do something once, when a new face is first detected
    
    
    //a way  of setting different actions to different Faces:
    /*if(face is some face you want) f.onDead = function() { //something you wish to do} */
}

Face.onFaceDead = function (f) {
    //do something once, when a face disapears
}

function draw() {
    //flip cam:
    //translate(width, 0);
    //scale(-1, 1);
    
    image(video, 0, 0, width, height);

    let faces = detectDistinctFaces(poses);
    for (let f of faces) {
        //USEFUL VARIABLES
        //let pose = f.pose //full poseNet pose
        //let center = f.center //face center
        //let width = f.width //face width
        //let r = f.r //rectangle around the face

        f.drawDebug(/*if fliping cam, make this param true*/); //debug lines, keypoints points and info
    }
}






