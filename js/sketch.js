var dog,dogimg,happydogimg;
var database;
var food,foodref,foodcount;
var count=20;

//var gamestate;

function preload()
{
  dogimg=loadImage("Images/Dog1.png");
  happydogimg=loadImage("Images/dog2.png");
}

function setup() {
  createCanvas( 1365, 630);
  
  database=firebase.database();

  food=new Food();
 // gamestate=new Gamestate();

  dog=createSprite( 682, 500, 20, 20);
  dog.addImage(dogimg);
  dog.scale=0.3;



}

function draw() { 
  background("yellow");
 
  var countRef=database.ref("food/food");
    countRef.on("value",function(data){
    count=data.val();
  });
  
  
  if(keyWentUp("space") && count > 0){
    dog.addImage(happydogimg);

    
    
    count=count-1
    food.foodCount();
    food.updatefood(count);
    
  }

  textSize(30);
  fill("red")
  text("FOOD LEFT IS : "+count,600,370);
  fill("blue")
  text("PRESS SPACE TO FEED YOUR PET",490,100)

drawSprites();

}
