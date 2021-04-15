
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper;
var img;

function preload(){
	img = loadImage('dustbingreen.png');
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	

	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paper = new Paper(600,650,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230); 

  textSize(20);
  text("press up arrow key to throw the paper into dustbin!",200,300);

  keyPressed();

  groundObject.display();
  dustbinObj.display();
  image(img,1080,430,240,250);  
  paper.display();

}

function keyPressed(){
  if(keyDown(UP_ARROW)){
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:20,y:-10});
  }
}

