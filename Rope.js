class Rope{
    constructor(bodyX, fixedPoint){
        var options ={
            bodyA: bodyX,
            pointB: fixedPoint
        }
        this.rope = Constraint.create(options);
        this.fixedPoint = fixedPoint
        World.add(world, this.rope)
    }
    display(){
        var pointA = this.rope.bodyA.position;
        
        strokeWeight(4);
        line(pointA.x, pointA.y,this.fixedPoint.x, this.fixedPoint.y);
    }
}