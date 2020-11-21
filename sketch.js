
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400,400);

//creates a monkey
monkey=createSprite(50,350,20,20);
monkey.addAnimation("running",monkey_running);
monkey.scale=0.1;
  
//creates the ground 
ground=createSprite(200,390,400,20);
ground.x=ground.width/2;
  

  
}


function draw() {
background("white")

monkey.collide(ground);
score=score+Math.round(getFrameRate()/60)

//it makes the monkey jump when space is pressed
if(keyDown("space")){

monkey.velocityY=-12;
  
}

//it adds gravity
monkey.velocityY = monkey.velocityY + 0.8


//ground.velocityX=-4;
  
if(ground.x<0){
  
  ground.x=ground.width/2;
  
}
  
if(frameCount%80===0){
  
  banana=createSprite(400,Math.round(random(120,200)),20,20)
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-6
  banana.lifetime=50;
  
}
  
if(frameCount%300===0){
  
  obstacle=createSprite(400,355,20,20);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.15;
  obstacle.velocityX=-6;
  
  
}
  
drawSprites();

textSize(20);
fill("black");
text("Survival Time:"+score,150,50);
  
}






