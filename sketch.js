
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var survivalTime,score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
//creating monkey
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;

  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  bananaGroup=new Group();
  obstacleGroup=new Group();
  
  
}


function draw() {
background(255);
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  
  if(keyDown("space") ){
    monkey.velocityY=-12;
  }
  monkey.velocityY=monkey.velocityY +0.8;
  
  monkey.collide(ground);
  
  var survivalTime=0;
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+  survivalTime,100,50);

  
  //calling functions
  spawnfood();
  spawnobstacles();
  
drawSprites();

}

function spawnfood(){
  if (frameCount%80===0){
    
  
  banana=createSprite(300,200,50,10);
  banana.addImage("banana",bananaImage);
    banana.scale=0.1;
    banana.y=Math.round(random(120,200));
  banana.velocityX=-4;
    banana.lifetime=200;
    bananaGroup.add(banana);
    
 
    
}
}

function spawnobstacles(){
  if (frameCount%300===0){
    obstacle=createSprite(150,330,30,30);
    obstacle.addImage("stone",obstacleImage);
    obstacle.lifetime=200;
    obstacle.scale=0.1
      monkey.collide(obstacle);
  
  }
  
}

