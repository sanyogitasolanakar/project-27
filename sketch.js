
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	rope1=new rope(bobObject1.body,roofObject.body,-bobDiameter*2,0)



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  rope1.display();
    
  drawSprites();

 
	
 
}



