var sound1
function preload(){
  sound1 = loadSound("The Inspiring Background Music for Video 30 Sec.mp3") //先把音樂檔載入到sound1程式碼中
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#0a0908")
  analyzer = new p5.Amplitude();
  analyzer.setInput(sound1)
}


var w = 100
var s_w = 40
var fc
function draw() {
  background("#0a0908")
  rectMode(CENTER)  //設定方框中心點為方框的座標點
  noFill()
  if(sound1.isPlaying()){
    //音樂正在撥放
    fc = map(analyzer.getLevel(),0,1,0,100)
  }
  else{
    //音樂停下
    fc = map(mouseX,0,width,0,100)
  }
  for(var y=50;y<=width+50;y=y+w){
  for(var x=50;x<=width+50;x=x+w){
  stroke("#f8f9fa")
  strokeWeight(4)
  ellipse(x,y,w+fc)
  stroke("#f8f9fa")
  strokeWeight(4)
  rect(x,y,w+fc)
  noFill()
  stroke("#f8f9fa")
  strokeWeight(3)
  ellipse(x+50,y+50,s_w+fc)
  }
 }
}


function mousePressed(){
  if(sound1.isPlaying()){
    sound1.stop();
  }
  else{
    sound1.play();
  }
}