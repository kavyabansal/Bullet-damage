var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 60, 3);
  bullet.shapeColor="white";
  thickness=Math.round(random(22,83));
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80);

  speed=Math.round(random(223,321));
  weight=random(30,52);
  
  bullet.velocityX=speed; 
}

function draw() {
  background("black");  

   if (hasCollided(bullet,wall)) {
     bullet.velocityX=0;
     var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if (damage<10) {
      wall.shapeColor=color(0,255,0);
      textSize(20);
    fill("green");
     text("MINNOR DAMAGE",600,200);
     text("THICKNESS OF WALL "+thickness,600,225);
     text("SPEED OF BULLET "+speed,600,250);
    }
    if(damage>10) {
      wall.shapeColor=color(155,0,0);
      textSize(20);
    fill("red");
     text("HARSH DAMAGE",600,200);
     text("THICKNESS OF WALL "+thickness,600,225);
     text("SPEED OF BULLET "+speed,600,250);
    }

   }

  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>wallLeftEdge)
  {
    return true;
  }
  return false;
}