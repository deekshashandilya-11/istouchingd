var fixedrect;
var movingrect;



function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 50);
  movingrect = createSprite(600, 200, 50, 50)
  fixedrect.shapeColor = "black"
  movingrect.shapeColor = "black"
}

function draw() {
  background("red");  

  movingrect.x = mouseX;
  movingrect.y = mouseY;

  if(fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2 &&
    movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2 &&
    fixedrect.y - movingrect.y < movingrect.height/2 + fixedrect.height/2 &&
    movingrect.y - fixedrect.y < movingrect.height/2 + fixedrect.height/2)
    {
      fixedrect.shapeColor = "yellow"
      movingrect.shapeColor = "yellow"
    }
    else
    {
     fixedrect.shapeColor = "black"
     movingrect.shapeColor = "black"
    }
  drawSprites();
}