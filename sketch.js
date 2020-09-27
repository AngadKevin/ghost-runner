var tower,towerImg;
var door,doorImg,doorsGroup;
var rail,railImg,railsGroup;
var  ghost,ghostImg;
var invisibleWall,invisibleWallGroup;
var gameState="play"







function preload(){
towerImg=loadImage("tower.png");
  doorImg=loadImage("door.png");
  doorsGroup = new Group();
  
  
  railImg=loadImage("climber.png")
  railsGroup = new Group();

  ghostImg=loadImage("ghost-standing.png")
}



function setup(){
createCanvas(600,600);
  tower=createSprite(300,300)
  tower.addImage("tower",towerImg)
  tower.velocityY=3

   ghost=createSprite(200,200,50,50)
  ghost.addImage(ghostImg);
  ghost.scale=0.35;
  
  invisibleWallGroup=new Group();
}

function draw(){
  background("black");
  
  if(gameState === "play"){
  if(tower.y>400){
    tower.y=300;
  }
    spawnDoors();
  drawSprites();
  
  if(keyDown("left_arrow")){
    ghost.x=ghost.x-3;
     }
  if(keyDown("right_arrow")){
    ghost.x=ghost.x+3;
     
  
}  
  if(keyDown("space")){
    ghost.velocityY=-5
    
}
 ghost.velocityY=ghost.velocityY+0.8;

   
if(railsGroup.isTouching(ghost)){
  ghost.velocityY=0;
  }
 
  
  if(invisibleWallGroup.isTouching(ghost)||ghost.y>600){
  ghost.destroy();  
    gameState="end"
  }
  }
 if(gameState==="end"){
   textSize(40)
   fill("white")
   text("game_over",200,200);
      }
  
  

}

  
  


function spawnDoors(){
  
  if(frameCount % 240 === 0){
    var door= createSprite(200,-50);
  door.addImage(doorImg);
    door.x=Math.round(random(120,400))
    door.velocityY=3
    
    var rail=createSprite(200,10);
    rail.addImage("rail",railImg);
    rail.x=door.x;
    rail.velocityY=3;
    door.lifetime=800;
    rail.lifetime=800;
    railsGroup.add(rail);
    doorsGroup.add(door);
    
    ghost.depth=door.depth; 
    ghost.depth= ghost.depth+1
    
    var invisibleWall=createSprite(200,15)
    invisibleWall.width=rail.width;
    invisibleWall.height=2;
    invisibleWall.x=door.x;
    invisibleWall.velocityY=3;
    invisibleWall.debug=true
    invisibleWallGroup.add(invisibleWall);
        
  }
  
  
  
  
  
  
  
}



