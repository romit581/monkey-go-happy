
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(400,400)
 //creating monkey
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving", monkey_running);
 monkey.scale=0.1
  
  ground =createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
  invisibleGround = createSprite(400,350,900,10);
  invisibleGround.visible = true;
  //create Obstacle and Food Groups
  obstaclesGroup = createGroup();
  foodsGroup = createGroup ();
  
  monkey.setCollider("rectangle",0,0,400,monkey.height);
  monkey.debug = true
  survivalTime = 20;
}


function draw() {
background(180);
  var survivalTime =0;
  monkey.collide(invisibleGround)
  //displaying the survival time
  stroke("white");
  if(keyDown("space")) {
    monkey.velocityY=-7
  }
  monkey.velocityY=monkey.velocityY+0.8
  textSize(20);
  spawnBananas();
  spawnObstacles();
  drawSprites();
}
function spawnBananas(){
  if(frameCount%60===0){
    
   banana=createSprite(400,100,10,10) ;
  banana.addImage(bananaImage);
  banana.velocityX=-2; 
  banana.scale=0.1;  
  banana.y=Math.round(random(10,120));  
   banana.lifetime=200;
    foodsGroup.add(banana);
  }
}

function spawnObstacles(){
  if(frameCount%100===0){
    
   obstacles=createSprite(400,320,10,10) ;
  obstacles.addImage(obstacleImage);
  obstacles.velocityX=-2; 
  obstacles.scale=0.1;  
    
   obstacles.lifetime=200;
    obstaclesGroup.add(obstacles);
  }
}



