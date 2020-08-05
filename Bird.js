class Bird extends BaseClass{
  constructor(x,y){
    super(x,y,50,50);//transfer all the properties of the parent class to the child class
    this.image = loadImage("sprites/bird.png");
  }
  display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();//refer t the parent class display function
  }
}