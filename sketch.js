var sea,ship,seaImage,shipImage

function preload(){   //recuersos
seaImage = loadImage("sea.png")
shipImage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-3.png") //loadAnimation, muchas imagenes
}

function setup(){
  createCanvas(400,400);
  
sea = createSprite(400,200)
sea.addImage("sea",seaImage)
sea.velocityX = -3

  
ship = createSprite(130,200,30,30)
ship.addAnimation("momimiento",shipImage)
ship.scale = 0.5
}

function draw() {
  background("blue");
if(sea.x<0){
  sea.x = 400
}


  
drawSprites();
}


//juego de manera vertcal
//aumentar el alto del canvas