var sword;

var fruit1,fruit2,fruit3,fruit4,fruit;

var alien1,alien2;

var fruitGroup;
var enemyGroup;

var PLAY = 1;
var END = 0;
var gameState = 1;

var swordImage;

var score = 0;

var monster;
 var monsterImage;

 var gameoverSound,knifeSwooshSound;

var gameOverImage;


function preload(){
  
  swordImage = loadImage('sword.png');
  fruit1 = loadImage('fruit1.png');
  fruit2 = loadImage('fruit2.png');
  fruit3 = loadImage('fruit3.png');
  fruit4 = loadImage('fruit4.png');
  
  monsterImage = loadAnimation('alien1.png','alien2.png');
  
  gameoverSound = loadSound('gameover.mp3');
  
  knifeSwooshSound = loadSound('knifeSwooshSound.mp3');
  
  gameOverImage = loadImage('gameover.png');
  
  
  
}

function setup(){
  createCanvas(600,600);
  sword = createSprite(40,200,20,20);
  sword.addImage(swordImage);
  sword.scale = 0.7;
  
  fruitGroup = new Group();
  EnemyGroup = new Group();
  
}

function draw() { 
  background("lightblue");
  if(gameState===PLAY){
    fruits();
    Enemy();
    sword.y=World.mouseY;
    sword.x=World.mouseX;
    if(fruitGroup.isTouching(sword)){
    fruitGroup.destroyEach();
    score=score+2; 
    } else {
if(EnemyGroup.isTouching(sword)){ 
  gameState=END;
  fruitGroup.destroyEach();
  EnemyGroup.destroyEach();
  fruitGroup.setVelocityXEach(0);
  EnemyGroup.setVelocityXEach(0);
  sword.addImage(gameOverImage);
  sword.x=200;
  sword.y=200;
} 
    }
  } 
  drawSprites(); 
  text("Score : "+ score,300,30); 
}


function fruits(){
    if(World.frameCount%40===0){
      fruit = createSprite(600,200,20,20);
      fruit.velocityX = -8;
      fruit.scale = 0.2;
      r = Math.round(random(1,4));    
      if (r==1){
        fruit.addImage(fruit1);
      }else if (r==2){
fruit.addImage(fruit2);
      }else if (r==3){
fruit.addImage(fruit3);
      }else if (r==4){
fruit.addImage(fruit4);
} 
      fruitGroup.add(fruit);
}


}
function Enemy(){
  if(World.frameCount%200===0){
    monster=createSprite(600,200,20,20);
    monster.addAnimation("moving", monsterImage);
    monster.y=Math.round(random(100,300));
    monster.velocityX=-8; 
    monster.setLifetime=250;
    EnemyGroup.add(monster);
    
    
  } 
}
