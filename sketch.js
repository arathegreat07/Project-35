//Create variables here
var dogImg, happyDog, database, foodS, foodStock;
var dog;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")

}

function setup() {
  
  createCanvas(500, 500);
  background(46, 139, 87);

   dog = createSprite(250, 350, 10, 15);
   dog.addImage(dogImg);
   dog.scale = 0.15;

   database = firebase.database();

   foodStock = database.ref('Food');
   foodStock.on("value", readStock);
}


function draw() {  

  if(keyDown(UP_ARROW)) {
  
    writeStock(foodS);
    dog.addImage(happyDog);
}

  drawSprites();
  //add styles here
  
  fill("black");
  textSize(15);
  text("Food Remaining: " + foodStock, 250, 200);
}


function readStock(data) {

    foodS = data.val();
}

function writeStock(x) {

   database.ref('/').update({
     Food: x
   })
}
