var box
function setup() {
createCanvas(400,400);
box = createSprite (200,200,20,20)
box.shapeColor = "midnightblue"
}

function draw() 
{
  background("white");
 if(keyDown("left")){
box.x = box.x - 3
 }
 if (keyDown("right")){
box.x = box.x + 3
 }
 if (keyDown("up")){
  box.y = box.y - 3
 }
 if(keyDown("down")){
box.y = box.y + 3
 }
 
 
 
  drawSprites()
}




