class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.tragectory=[];
    this.smoke=loadImage("sprites/smoke.png")
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if(this.body.velocity.x>10 && this.body.position.x>200){
   
    var pos=[this.body.position.x,this.body.position.y];
    this.tragectory.push(pos);} 
    for(var i=0;i<this.tragectory.length;i++){
      image(this.smoke,this.tragectory[i][0],this.tragectory[i][1]);
    }
    super.display();
  }
}
