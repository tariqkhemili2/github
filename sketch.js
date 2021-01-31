var player;
var wall;

function setup() {
  createCanvas(800,400);
  player = createSprite(50, 200, 25, 25);
  wall = createSprite(750, 200, 25, 100);
  player.shapeColor = "white";
}

function draw() {
  background("black");
  player.collide(wall);
  if(keyDown(RIGHT_ARROW)){
    player.x = player.x+15
  }
  if(keyDown("d")){
    player.x = player.x+15
  }
  if(keyDown(LEFT_ARROW)){
    player.x = player.x-15
  }
  if(keyDown("a")){
    player.x = player.x-15
  }
  drawSprites();
}