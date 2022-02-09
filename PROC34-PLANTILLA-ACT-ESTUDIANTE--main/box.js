class Box {
    constructor (x, y, width, height){
     var bOx = {
     'restitution': 0.8,
     'friction': 1,
     'density': 0.04,
     }
     this.body = Bodies.rectangle(x,y,width,height,bOx);
       this.width = width;
       this.height = height;
       World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        fill("white");
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
    
}