const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, bin1, bin2, bin3, paper;
var engine, world;

function preload()
{
  binimage = loadImage("dustbingreen.png");
}

function setup() 
{
	createCanvas(1400, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(700, 550, width, 30);
    
	paper = new Paper(200, 300);
  
  bin1 = new Dustbin(1010, 420, 15, 170);
	bin2 = new Dustbin(1190, 420, 15, 170);
	bin3 = new Dustbin(1100, 550, 150, 15);

	Engine.run(engine);
}

function draw() 
{
  rectMode(CENTER);

  background(255);
  Engine.update(engine);
  
  paper.display();
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();
  image(binimage, 1100, 435, 200, 200);
  
  drawSprites();
}

function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:110,y:-110});
  }
}