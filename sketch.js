
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof, ground, rope1;
var bob1, bob2, bob3, bob4, bob5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,200,600,40);
	ground = new Roof(400,700,800,10);
	bob1 = new Bob(200,300,100);
	bob2 = new Bob(300,300,100);
	bob3 = new Bob(400,300,100);
	bob4 = new Bob(500,300,100);
	bob5 = new Bob(600,300,100);

	rope1 = new Rope(bob1.body,roof.body,-100*2,0);
	rope2 = new Rope(bob2.body,roof.body,-50*2,0);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(172,244,247);
  
  roof.display();
  ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();


  drawSprites();
}


