const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, gameState,engine, world,dustbin1,paper,dustbin2,dustbin3;
function setup() {
  createCanvas(1600, 800);
  rectMode(CENTER);

  gameState = "start";

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  dustbin1 = new Dustbin(1100, 650, 400, 10);
  dustbin2 = new Dustbin(900, 550, 10, 200);
  dustbin3 = new Dustbin(1300, 550, 10, 200);

  paper = new Paper(100, 650, 10);
  ground = Bodies.rectangle(width / 2, 760, width, 10,
  {
    isStatic: true
  });
  World.add(world, ground);
}

function draw() {
  if (gameState === "start") {
    background("cyan");
    textSize(40);
    fill("white");
    text("Bin time. \n                 press up arrow to start, and up to throw away the trash.", 50, 200)
    if (keyCode === UP_ARROW) {
      gameState = "play"
    }
  }
  if (gameState === "play") {
    rectMode(CENTER);
    background(0);
    dustbin1.display();
    dustbin2.display();
    dustbin3.display();

    paper.display();

  }
  rectMode(CENTER)
  fill("white");
  rect(ground.x,ground.y,width,height);
  
}


function keyPressed(){
  if (keyCode === UP_ARROW && gameState === "play") {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 20,
      y: -20
    });
  }
}
