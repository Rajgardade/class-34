class Circle1 
{
    constructor(x,y,r)
    {
        var options =
         {
                 restitution:0.4,
                 density: 1,
                 radius:r,
                 isStatic:false
                
         }
        this.body=Bodies.circle(x,y,r,options);
        this.width=width;
        this.height=height;
        World.add(myworld,this.body);
    }

    display()
    {
       
        var pos=this.body.position;
        var angle = this.body.angle;
        var radius = this.body.radius
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        //rectMode(CENTER);
        ellipseMode(RADIUS)
        //fill("white");
        ellipse(0,0,radius,radius);

        pop();
        }
    


}