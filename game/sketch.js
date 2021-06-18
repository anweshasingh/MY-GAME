var player;
var water, fire, fauna;
var waterImg, fireImg, faunaImg;
var mapImg;
var back
var monster1, monster2, monster3, monster4, monster1Img, monster2Img, monster3Img, monster4Img;
var waterGroup;

function preload() {
waterImg = loadImage("powers/water.png");
fireImg = loadImage("powers/fire.png");
faunaImg = loadImage("powers/fauna.png");
mapImg = loadImage("map.jpg");
monster1Img = loadImage("monsters/monster1.png");
monster2Img = loadImage("monsters/monster2.png");
monster3Img = loadImage("monsters/monster3.png");
monster4Img = loadImage("monsters/monster4.png");
}


function setup() {
  createCanvas(2000,1000);
  back = createSprite(1000,500,1500,1000);
  back.addImage("map",mapImg)
  back.scale = 4
  player = createSprite(1000, 500, 50, 50);
  player.shapeColor = "red";

  //water = createSprite(500,500,50,50);
  //water.addImage("waterImg", waterImg);
  //water.scale = 0.2

  fire = createSprite(700,700,50,50);
  fire.addImage("waterImg", fireImg);
  fire.scale = 0.2

  fauna = createSprite(300,300,50,50);
  fauna.addImage("waterImg", faunaImg);
  fauna.scale = 0.2

  spawnObstacles();
  //obstaclesGroup.setLifetimeEach(-1)
  //obstaclesGroup.setVelocityXEach(0);
  waterGroup = new Group();
}

function draw() {
  background(0);

  if(keyDown(UP_ARROW)){
    player.y = player.y-10
  }
  if(keyDown(DOWN_ARROW)){
    player.y = player.y+10
  }
  if(keyDown(RIGHT_ARROW)){
    player.x = player.x+10
  }
  if(keyDown(LEFT_ARROW)){
    player.x = player.x-10
  }
  monster1= createSprite(Math.round(random(0,800)),Math.round(random(0,800)));
    monster1.addImage("moving_bat",monster1Img);
    monster1.visible = false;
    if(frameCount % 100 === 0){
       monster1.visible = true;
        monster1.velocityX = Math.round(random(-4,4));
        monster1.velocityY = Math.round(random(-4,4));
        monster1.scale=0.4;
        monster1.lifetime = -1
       
    }

    if(player.isTouching(waterGroup)){
      waterGroup.destroyEach();
    }
    spawnwater();
  drawSprites();

}

function spawnwater(){
  for(var i = 1; i<5; i++){
  water = createSprite(Math.round(random(10,60)),100,40,10)
  water.addImage(waterImg)
  water.y = Math.round(random(10,60))
  water.scale=.4
  waterGroup.add(water)
  //water.velocityX = -4 
    
    //cloud.depth = trex.depth
    //trex.depth = trex.depth+1
  }
}

function spawnObstacles(){
  if (frameCount % 20 === 0){
    var obstacle = createSprite(1000,355,10,40);
    //obstacle.velocityX = -6;
    
     //generate random obstacles
     var rand = Math.round(random(1,3));
     switch(rand) {
       case 1: obstacle.addImage(waterImg);
               break;
       case 2: obstacle.addImage(fireImg);
               break;
       case 3: obstacle.addImage(faunaImg);
               break;
       default: break;
     }
    
     //assign scale and lifetime to the obstacle           
     obstacle.scale = 0.2;
     //obstacle.lifetime = 300;
    
    //add each obstacle to the group
     //obstaclesGroup.add(obstacle);
  }
 }

