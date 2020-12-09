var car1,car2,car3,car4;
var speed1,speed2,speed3,speed4;
var line1,line2,line3;
var wall1,wall2,wall3,wall4;
var weight;
var deformation;

function setup() {
  createCanvas(800,400);
  speed1=random(20,50);
  speed2=random(20,50);
  speed3=random(20,50);
  speed4=random(20,50);
  weight=random(400,1500);
  
  car1=createSprite(50,140,20,20);
  car1.velocityX=speed1;
  car2=createSprite(50,50,20,20);
  car2.velocityX=speed2;
  car3=createSprite(50,240,20,20);
  car3.velocityX=speed3;
  car4=createSprite(50,340,20,20);
  car4.velocityX=speed4;

  line1=createSprite(400,100,800,5);
  line1.shapeColor="white";
  line2=createSprite(400,200,800,5);
  line2.shapeColor="white";
  line3=createSprite(400,300,800,5);
  line3.shapeColor="white";

  wall1=createSprite(780,50,20,50);
  wall2=createSprite(780,150,20,50);
  wall3=createSprite(780,250,20,50);
  wall4=createSprite(780,350,20,50);
}

function draw() {
  background("black");  
  drawSprites();

deformation=0.5*weight*speed*speed/22500

if(deformation<100){
  car1.shapeColor=color(0,255,0);
  car2.shapeColor=color(0,255,0);
  car3.shapeColor=color(0,255,0);
  car4.shapeColor=color(0,255,0);
}

if(deformation<100 && deformation>100){
  car1.shapeColor=color(230,230,0);
  car2.shapeColor=color(230,230,0);
  car3.shapeColor=color(230,230,0);
  car4.shapeColor=color(230,230,0);
}

if(deformation>180){
  car1.shapeColor=color(255,0,0);
  car2.shapeColor=color(255,0,0);
  car3.shapeColor=color(255,0,0);
  car4.shapeColor=color(255,0,0);
}

createEdgeSprites();
car1.collide(wall2);
car2.collide(wall1);
car3.collide(wall3);
car4.collide(wall4);
}