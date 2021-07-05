const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world
var sling;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world

  ground = new Ground()
  base1 = new Base(380,300,270,10);
  base2 = new Base(700,200,200,10);

  //SET-1
  //level-1
  block1 = new Block(280,275);
  block2 = new Block(310,275);
  block3 = new Block(340,275);
  block4 = new Block(370,275);
  block5 = new Block(400,275);
  block6 = new Block(430,275);
  block7 = new Block(460,275);
  block8 = new Block(490,275);
  //level-2
  block9 = new Block(310,235);
  block10 = new Block(340,235);
  block11 = new Block(370,235);
  block12 = new Block(400,235);
  block13 = new Block(430,235);
  block14 = new Block(360,235);
  //level-3
  block15 = new Block(340,195);
  block16 = new Block(370,195);
  block17 = new Block(400,195);
  block18 = new Block(430,195);
  //level-4
  block19 = new Block(370,155);
  block20 = new Block(400,155);
  //level-5
  block21 = new Block(385,115);

  //SET-2
  //level-1
  blocks1 = new Block(640,175);
  blocks2 = new Block(670,175);
  blocks3 = new Block(700,175);
  blocks4 = new Block(730,175);
  blocks5 = new Block(760,175);
  //level-2
  blocks6 = new Block(670,135);
  blocks7 = new Block(700,135);
  blocks8 = new Block(730,135);
  //level-3
  blocks9 = new Block(700,95);

  //polygon with sling
  ball=Bodies.circle(100,200,20);
  World.add(world,ball);

  sling = new SlingShot(this.ball,{x:150,y:200});
  
}

function draw() {
  background(92,255,164);  
  Engine.update(engine);

  ground.display();
  base1.display()
  base2.display()

  
  strokeWeight(2)
  fill("orange")
  stroke("blue")
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();

  strokeWeight(2)
  fill("lightblue")
  stroke("blue")
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();

  strokeWeight(2)
  fill("pink")
  stroke("blue")
  block15.display();
  block16.display();
  block17.display();
  block18.display();

  strokeWeight(2)
  fill("yellow")
  stroke("blue")
  block19.display();
  block20.display();

  strokeWeight(2)
  fill("lightgreen")
  stroke("blue")
  block21.display();

  strokeWeight(2)
  fill("green")
  stroke("black")
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();

  strokeWeight(2)
  fill("blue")
  stroke("black")
  blocks6.display();
  blocks7.display();
  blocks8.display();

  strokeWeight(2)
  fill("red")
  stroke("black")
  blocks9.display();


  ellipse(ball.position.x,ball.position.y,40,40)
  sling.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  sling.fly();
}
function keyPressed(){
  if(keyCode===32){
     sling.attach(this.ball);
  }
}