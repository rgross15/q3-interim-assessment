var x = 0;
var y = 0;
sizes = [5, 10, 15, 20, 25, 30, 35, 40, 35, 50];


function setup(){
    createCanvas(600,400);
}

function draw(){
    background(140);
    Budi();
    rowCircle(250);
    
    var i =0;
    var yLine = 20;
    while(i<10){
    
    stroke(255);
    line(100,yLine,500,yLine);
    i++;
    yLine += 20;
    }
    
     if(mouseIsPressed){
      background(255,0,200);
 
    }
  
}


function Budi(){
    noStroke();
    fill(255, 255, 0);
    x = 200;
    y = y + 1;
    ellipse(x,y,150,150);
}    
    
function rowCircle(yRow){
    var xCircle = 40;
  for(var i = 0; i < 10; i ++){
      noStroke();
      fill(255,0,255);
      ellipse(xCircle,yRow,sizes[i],sizes[i]);
      xCircle += 50;
  }
}
    