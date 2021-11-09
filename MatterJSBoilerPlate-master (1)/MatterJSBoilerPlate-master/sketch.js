
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400, 200, 400, 15)
	ground = new Roof(400, 790, 800, 100)
	bob1 = new Bob(250, 400, 50)
	bob2 = new Bob(350, 400, 50 )
	bob3 = new Bob(450, 400, 50 )
	bob4 = new Bob(550, 400, 50 )
	Rope1 = new Rope(bob1.body,{x:250, y:200})
	Rope2 = new Rope(bob2.body,{x:350, y:200})
	Rope3 = new Rope(bob3.body,{x:450, y:200})
	Rope4 = new Rope(bob4.body,{x:550, y:200})
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  drawSprites();
  Rope1.display()
  Rope2.display()
  Rope3.display()
  Rope4.display()
}



