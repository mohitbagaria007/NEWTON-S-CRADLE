
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 dsiplay() 
 {var  pointA=this.rope.bodyA.position; 
var  pointB=this.rope.bodyB.position; 
strokeWeight(2);
var Anchor1X=pointA.x 
var Anchor1Y=pointA.y 

var Anchor2X=pointB.x+this.offsetX 
var Anchor2Y=pointB.y+this.offsetY 

line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);

}
}



