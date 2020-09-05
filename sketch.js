
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bird,bird1,bird2,bird3;
var slingshot,slingshot1;
function preload()
{
	
}

function setup() {

	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
    bird = new Bird(200,50);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
    World.add(world,slingshot);
    bird2 = new Bird(190,50);
    slingshot = new SlingShot(bird2.body,{x:180, y:50});
    bird3 = new Bird(190,50);
    slingshot = new SlingShot(bird3.body,{x:150, y:50});
    Engine.run(engine);
  
}


function draw() {
  background(255,255,255);
  rectMode(CENTER);
  bird.display();
  bird2.display();
 // Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
  drawSprites();
 bird3.display();
}
function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


