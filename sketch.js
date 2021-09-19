var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 var partision;
var particles = [];
var plinkos = [];
var particle ;
var turn = 0;
var divisions = [];
var divisionHeight=300;
var score =0;
var gameState="Start";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  //partision = new Ground(width/2,450,width,5);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)

 text("Score : "+score,20,30);
 text("500",25,550);
 text("500",100,550);
 text("500",175,550);
 text("500",270,550);
 text("100",350,550);
 text("100",425,550);
 text("100",500,550);
 text("200",575,550);
 text("200",670,550);
 text("200",745,550);
ground.display();
//partision.display();

  Engine.update(engine);
 
  if(gameState=="end"){
    textSize(100);
    text("GAMEOVER",400,400);
  }
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
    
     if (particle!=null){


      particle.display();
      

      if(particle.body.position.y>760){

        if(particle.body.position.x<300){
          score=score+500;
          particle=null;
          if(turn>=5){
            gameState="end";
          
          }
        }
     else if(particle.body.position.x<600 && particle.body.position.x>301){
         score=score+100;
         particle=null;
         if(turn>=5){
           gameState="end";
         }
      }
      else if(particle.body.position.x<900 && particle.body.position.x<601){
        score=score+200;
        particle=null;

        if(turn>=5){
          gameState="end";
        }
      }
      }

     }
   }
   
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   }
  
   function mousePressed(){
   
    if(gameState!=="end")
    {
      turn++;
      particle=new Particle(mouseX,10,10,10);

    }
   }












