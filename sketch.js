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

function draw() {
    image(video, 0, 0, width, height);

    let faces = detectDistinctFaces(poses);
    for (let f of faces) {
        //USEFUL VARIABLES
        //let pose = f.pose //full poseNet pose
        //let center = f.center //face center
        //let width = f.width //face width
        //let r = f.r //rectangle around the face

        f.drawDebug(); //debug lines, keypoints points and info
    }
}






