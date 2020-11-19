
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1
var tree1
var mango1, mango2, mango3, mango4, mango5
var boy1
var slingshot1
var stone1

function preload()
{
	boy1=loadImage("sprites/boy.png")
}

function setup() {
	createCanvas(1200, 700);
	

	engine = Engine.create();
	world = engine.world;

	ground1= new Ground(width/2, 690, width, 20)
	tree1 = new tree (800, 680)
  mango1 = new mango(780, 400, 50)
  mango2 = new mango(780, 250, 50)
  mango3 = new mango(890, 400, 50)
  mango4 = new mango(650, 400, 50)
  mango5 = new mango(900, 270, 50)
	stone1 = new stone (225, 537, 40)
	slingshot1 = new SlingShot(stone1.body, {x: 225, y: 537})

	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  
	Engine.update(engine);

	image (boy1, 200, 530, 200, 200)



	

  drawSprites();

  ground1.display();
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  slingshot1.display();
  stone1.display();
  detectcollision(stone1, mango1);
  detectcollision(stone1, mango2);
  detectcollision(stone1, mango3);
  detectcollision(stone1, mango4);
  detectcollision(stone1, mango5);
}





function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot1.fly();
}


function detectcollision(Lstone, Lmango){
var mangopos = Lmango.body.position
var stonepos = Lstone.body.position

var distance = dist(stonepos.x, stonepos.y, mangopos.x, mangopos.y)

if (distance<=Lmango.r+Lstone.r){

	Matter.Body.setStatic(Lmango.body, false)

}

}

function keyPressed()
{
    if (keyCode===32)
    {
	Matter.Body.setPosition(stone1.body, {x: 225, y: 537})
    slingshot1.attach(stone1.body);
    }

}