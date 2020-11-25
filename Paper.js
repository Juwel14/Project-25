class Paper 
{ 
  constructor(x, y)
  {
  var options = 
  {
    isStatic: false,
    restitution : 0.3,
    friction : 0.5,
    density : 1.2
  }

  this.body = Matter.Bodies.circle(x, y, 23, options);
  this.r = 70;
  this.image = loadImage("paper.png");
  World.add(world,this.body);
  }
    
  display()
  {
    imageMode(CENTER);
    var pos = this.body.position;
    push();
    imageMode(RADIUS);
    image(this.image, pos.x, pos.y, 70, 70);
    pop();
  }
}