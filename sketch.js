
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, rope1,roof

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	roof = new Roof(400, 100, 400, 10);
	bob1 = new Bob(400, 400);
	rope1 = new Rope(bob1.body,{x:400, y:100});
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();
  bob1.display();
  rope1.display();

  drawSprites();
 
}



