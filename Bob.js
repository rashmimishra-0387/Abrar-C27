class Bob{
    constructor(x, y){
       var options ={
            isStatic: true,
            restitution: 0.3,
            friction: 0.3,
            density: 1.2
        }
        this.bob = Bodies.circle(x, y, 20, options);
        this.radius = 20;
        World.add(world, this.bob);
    }
    display(){
       var pos = this.bob.position;
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.radius, this.radius);
    }
}