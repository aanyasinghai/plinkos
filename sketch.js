const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinko = [];
var division = [];

var ground;
var divisionHeight = 200;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
   world = engine.world;

   ground = new Ground(240,750,480,50);

   for(var i =5;i<480;i=i+70){
     division.push(new Division(i,height- divisionHeight/2,10,divisionHeight));
   } 

   for(var i = 26; i<480; i = i+30){
     plinko.push(new Plinko(i,100));
   }

   for(var i=10;i<480; i=i+30){
     plinko.push(new Plinko(i,150));
   }

   for(var i = 25;i<480; i = i+30){
     plinko.push(new Plinko(i,200));
   }

   for(var i= 10;i<480;i=i+30){
     plinko.push(new Plinko(i,250));
   }
}
                                                                                                                                                                                                            
function draw() {
  background(0);  
  
  Engine.update(engine);

  if(frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }

  ground.display();

  for (var k = 0;k<division.length;k++){
    division[k].display();
  }

  for(var j=0;j< plinko.length;j++){
    plinko[j].display();
  }

  for(var j =0;j< particles.length;j++){
    particles[j].display();
  }

  drawSprites();
}