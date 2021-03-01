const Engine= Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;
const Constraint = Matter.Constraint

var myengine, myworld,ground;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20



function setup()
  {
  createCanvas(1200,400);

  myengine=Engine.create();
  myworld=myengine.world;

  ground=new Ground(600,400,1200,20);
 // block1n = new Block(700,360,70,70);
  //block2n = new Block(900,360,70,70);
  ///block3n = new Block(700,240,70,70);
  //block4n = new Block(900,240,70,70);




   block1 = new Block(900,120,50,50)
   block2 = new Block(900,120,50,50)
   block3 = new Block(900,120,50,50)
   block4 = new Block(900,120,50,50)
   block5 = new Block(900,120,50,50)
   block6 = new Block(900,120,50,50)
   block7 = new Block(900,120,50,50)
   

   
   blockq1=new Block(800,120,50,50)
   blockq2=new Block(800,120,50,50)
   blockq3=new Block(800,120,50,50)
   blockq4=new Block(800,120,50,50)
   blockq5=new Block(800,120,50,50)
   blockq6=new Block(800,120,50,50)
  

   
   blockqw1=new Block(700,120,50,50)
   blockqw2=new Block(700,120,50,50)
   blockqw3=new Block(700,120,50,50)
   blockqw4=new Block(700,120,50,50)
   blockqw5=new Block(700,120,50,50)
   blockqw6=new Block(700,120,50,50)
   blockqw7=new Block(700,120,50,50)

   blockqwe1=new Block(700,120,50,50)
   blockqwe2=new Block(700,120,50,50)
   blockqwe3=new Block(700,120,50,50)

   shooter = new Circle1(200,200,80)
   //blockqwe4=new Block(540,200,50,50)
   //blockqwe5=new Block(560,200,50,50)

  // blockqwer1=new Block(500,160,50,50)
   //blockqwer2=new Block(520,160,50,50)
   //blockqwer3=new Block(540,160,50,50)


  // blockqwert = new Block(520,120,50,50)

   
  rope = new Chain(shooter.body,{x:520,y:50})
 
  }
 

 


function draw() {
  background(0);  
   
  Engine.update(myengine);
  ground.display();
  //block1n.display();
  //block2n.display();
  //block3n.display();
  //block4n.display();

 

  


  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
 

  
  blockq1.display() 
  blockq2.display()
  blockq3.display()
  blockq4.display()
  blockq5.display()
  blockq6.display()
 
  
  blockqw1.display()
  blockqw2.display()
  blockqw3.display()
  blockqw4.display()
  blockqw5.display()
  blockqw6.display()
  blockqw7.display()
  
  blockqwe1.display()
  blockqwe2.display()
  blockqwe3.display()
 
  fill("cyan")
  shooter.display();
  
  rope.display();
  
}
function mouseDragged(){


Matter.Body.setPosition(shooter.body,{x:mouseX,y:mouseY})




}