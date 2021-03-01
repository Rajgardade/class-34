class Chain 
{
    constructor(body1,point2)
    {
        var options=
        {
            bodyA : body1,
            pointB : point2,
            stiffness: 1.2,
            length : 200
        }

         this.pointB = point2
         this.chain=Constraint.create(options);
        World.add(myworld,this.chain);


       
    }

display(){
    
    push();
    stroke("white")
    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.pointB.x, this.chain.pointB.y);

     pop();

}




}