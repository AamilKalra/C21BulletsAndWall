
var weight, speed, bullet;
var wall, thickness;
var random;


thikness=Math.round(22,83);
speed=Math.round(223,321);
weight=Math.round(30,52);

function setup(){
  createCanvas(1600,400);
  bullet=createSprite(600,200,80,40);
  wall=createSprite(1200,200,thickness,height/2);
 
}

function draw(){
  background(0,0,0);
  
  bullet.velocityX=5;
  if(bullet.collide(wall)){
    bullet.velocityX=0; 
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }

    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
  
}
