class Mango{
  constructor(x,y,radius,options){
      var options = {
          isStatic:true,
          restitution:0,
          friction:1
      }
      this.image = loadImage("sprites/mango.png");
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