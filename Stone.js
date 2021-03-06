class Stone{
  constructor(x,y,radius,options){
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.image = loadImage("sprites/stone.png");
      this.body = Bodies.circle(x,y,radius,options);
      this.x = x;
      this.y = y;
      this.radius = 70;
      World.add(world,this.body);
  }

  display(){
      var pos = this.body.position;
      imageMode(CENTER);
      fill("brown");
      image(this.image,pos.x,pos.y,this.radius,this.radius);
  }
}