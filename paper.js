class Paper
{
	constructor(x,y)
	{
		var options={
			isStatic:false,
            density:0.5,
            restitution:0.2

			}
		this.x=x;
		this.y=y;
        this.r=20;
		this.body=Bodies.circle(x, y, 20,options);
        this.image=loadImage("paper.png");
 		World.add(world, this.body);

	}
	display()
	{
			
			var pos=this.body.position;		

			push()
			translate(pos.x,pos.y);
			imageMode(CENTER);
			//strokeWeight(4);
			//fill(128,128,128)
			image(this.image,0,0,this.r*2, this.r*2);
			pop()
			
	}

}