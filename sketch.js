var slider;
var angle = PI/4;
var x;
function setup(){
    let c = createCanvas(400,400);
    slider = createSlider(0,TWO_PI,PI/4,0.01);

}
function draw(){

    background(5);
    angle = slider.value();
    var len = 100;
    stroke(255);

    translate(200,height);
    branch(100);


}
function branch(len){
  line(0,0,0,-len);
  translate(0,-len);
  if (len >6){
    stroke(255);
  }
  else{
    stroke(255,182,193);
    x = 1;
  }
    if (len>4){
      push();
      rotate(angle);
      branch(len*0.67);
      pop();
      push();
      rotate(-angle);
      branch(len*0.67);
      pop();
    }



}
