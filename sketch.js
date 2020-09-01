const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create()
  world = engine.world
  Engine.run(engine)

  ground1 = new Ground(350,300,100,100)
  box1 = new Box(300,20,10,10)

}

function draw() {
  background(255,255,255);  
  
  
  
  ground1.display()
  box1.display()
  
  
  
  
  
  
  drawSprites();
}