song = "";
song2 = "";
function preload(){
    song = loadSound("Hyrule_Castle.mp3")
    song2 = loadSound("The_Deadwood_Stage.mp3")

}
function setup(){
    canvas = createCanvas(600,500)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
}

function draw(){
    image(video,0,0,600,500)
}