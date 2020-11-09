const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground, paper;
var box1,box2,box3;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100,620,20);
	ground = new Ground(400,670,800,20);

	box1 = new Dustbin(650,650,180,20);
	box2 = new Dustbin(550,610,20,100);
	box3 = new Dustbin(750,610,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  ground.display();

  box1.display();
  box2.display();
  box3.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-60})
	} 
}