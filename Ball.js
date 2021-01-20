class Ball {
  constructor(x, y, radius) {
    var options = { 
      density: 1, 
      frictionAir: 0.005
    };

    this.body = Bodies.circle(x, y, radius, options);
   this.radius=radius
    World.add(world, this.body);
  }

  display() {
    
    var pos=this.body.position;
    ellipseMode(RADIUS)
    ellipse(pos.x, pos.y, 40, 40);
   
  }
}
