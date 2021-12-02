class Drop {
    constructor(x,y){
    var options = {
        friction :0.001, 
        restitution:0.1
    }
    this.gota = Bodies.circle(x,y,3, options)
    this.radius = 3;
        World.add(world, this.gota)
    }
    updateY(){
         if(this.gota.position.y > height)
         { 
             Matter.Body.setPosition(this.gota, {x:random(0,400), y:random(0,400)}) } }
              showDrop(){ 
                  fill("blue");
                   ellipseMode(CENTER);
                    ellipse(this.gota.position.x,this.gota.position.y,this.radius,this.radius); 
                }
}