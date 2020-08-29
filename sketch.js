function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);


  ground1 = new Ground(400,200,100,20)


}

function draw() {
  background(255,255,255);  
  
  
  
  ground1.display()
  
  
  
  
  
  
  
  drawSprites();
}