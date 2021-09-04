
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof, ground, rope1;
var bob1, bob2, bob3, bob4, bob5;
var startPosx, startPosy, bobD;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(width/2,height/4,width/7,20);
	//ground = new Roof(400,700,800,10);
	startPosx = width/2;
	startPosy = height/4+500;
	bobD = 40;
	bob1 = new Bob(startPosx-bobD*2,startPosy,bobD);
	bob2 = new Bob(startPosx-bobD,startPosy,bobD);
	bob3 = new Bob(startPosx,startPosy,bobD);
	bob4 = new Bob(startPosx+bobD,startPosy,bobD);
	bob5 = new Bob(startPosx+bobD*2,startPosy,bobD);

	rope1 = new Rope(bob1.body,roof.body,-100*2,0);
	rope2 = new Rope(bob2.body,roof.body,-50*2,0);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(172,244,247);
  
  roof.display();
  //ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();


  drawSprites();
}


