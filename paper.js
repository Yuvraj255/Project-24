class Paper{
    constructor(x,y,radius){
     var Option ={
         isStatic: false,
         restitution: 0.3,
         friction: 0.5,
         density: 1.2
    }

    this.body = Bodies.circle(x,y,radius,Option);
    this.radius = radius;

    World.add(world,this.body);
 
     }
     display(){
         ellipseMode(RADIUS);
         fill("blue")
         ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);

     }
     
 }