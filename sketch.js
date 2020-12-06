var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;
var ground;
var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey=createSprite(50,200,15,15);
  monkey.addAnimation('running',monkey_running);
  monkey.scale=0.15;
  monkey.debug=false;
  
  ground=createSprite(220,250,400,10);
  
  foodGroup=new Group();
  obstacleGroup=new Group();
  
  survivalTime=0;
}


function draw() {
  background('white');
  
  if(keyDown('space')&&monkey.y>=190){
    monkey.velocityY=-10;
  }
  monkey.velocityY+=0.5;
  
  monkey.collide(ground);
  
  stroke('black');
  textSize(20);
  fill('black');
  survivalTime=ceil(frameCount/frameRate());
  text('Survival Time: '+survivalTime,100,50);
  
  spawnFood();
  spawnObstacles();
  
  drawSprites();
}
function spawnFood(){
  if(frameCount%80===0){
    banana=createSprite(400,random(100,150),10,10);
    banana.addImage(bananaImage);
    banana.velocityX=-4;
    banana.lifetime=100;
    banana.scale=0.1;
    foodGroup.add(banana);
  }
}
function spawnObstacles(){
  if(frameCount%300===0){
    obstacle=createSprite(400,210,15,15);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-4;
    obstacle.lifetime=100;
    obstacle.scale=0.15;
  }
}