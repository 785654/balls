var b1;
var b2;
var b3;
var b4;
var b5;


function setup() {
  createCanvas(1000, 800);
  background(200,80,100);
  b1 = new Ball(-5, 2, 80, 500);
  b2 = new Ball(5, 2, 80, 500);
  b3 = new Ball(-3, -4, 80, 500);
  b4 = new Ball(-2, 8, 80, 500);
  b5 = new Ball(-3,6,200,600);
}

function draw() {
  background(10, 110, 40);
  b1.run();
  b2.run();
  b3.run();
  b4.run();
  b5.run();
 
}

function Ball(xSpeed, ySpeed, xLocation, yLocation) {
  this.xspd = xSpeed;
  this.yspd = ySpeed;
  this.xloc = xLocation;
  this.yloc = yLocation;
  this.rad = random(20, 40);
  this.clr = color(random(50, 250), random(0, 50), random(50, 110));
}

Ball.prototype.run = function() {
  this.update();
  this.checkEdges();
  this.render();
}

Ball.prototype.checkEdges = function() {
  if (this.xloc > width || this.xloc < 0) {
    this.xspd = this.xspd * -1;
  }

  if (this.yloc > height || this.yloc < 0) {
    this.yspd = this.yspd * -1;
  }
}

Ball.prototype.update = function() {
  this.xloc += this.xspd;
  this.yloc += this.yspd;
}

Ball.prototype.render = function() {
  fill(this.clr);
  ellipse(this.xloc, this.yloc, this.rad-10, this.rad+10);


}