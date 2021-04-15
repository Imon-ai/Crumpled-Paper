class Paper{
    constructor(x, y, radius) {
        var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0         
        }
        this.image = loadImage('paper.png');
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
       
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,100,100);
        pop();
      }
}
