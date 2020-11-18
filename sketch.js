
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var box1,box2,box3
var paperBall

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	box1 = new Box(500,650,10,50);
	box2 = new Box(300,650,10,50);
	box3 = new Box(400,675,200,10);

	paperBall = new PaperBall(200,0,50);

	ground = new Ground(400,700,800,50);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display();
  box2.display();
  box3.display();
  paperBall.display();
  ground.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on
	   Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:25, y:-50})
	 }
   }


