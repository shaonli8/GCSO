var car, wall;
var speed, weight, deformation;


function setup() {
  createCanvas(800,400);

  car = createSprite(50,200,20,20);
  car.shapeColor = "white";

  wall = createSprite(750,200,20,350);
  wall.shapeColor = "blue";
  
  speed = Math.round(random(50,100)); 
  weight = Math.round(random(400,1600)); 
}

function draw() {
  background(0,0,0);  

  if(wall.x - car.x < (wall.width/2 + car.width/2)){
    car.velocityX = 0;
    deformation = 0.5 * weight * speed * speed / 22500;
    
    if(deformation >= 180){
      car.shapeColor = "red";
    }

    if(deformation > 100 && deformation < 180){
      car.shapeColor = "yellow";
    }

    if(deformation <= 100){
      car.shapeColor = "green";
    }
  }

  else{
    car.velocityX = 5;
  }

  drawSprites();
}