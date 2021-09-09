var canvas;
var backgroundImage, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins;
var cars = [];
var fuels,obstacles,powerCoins;

//Declare variables to add Images of Fuel,Powercoin,obstacle1 & obstacle2 
var fuelImg,coinImg,obstacle1Img,obstacle2Img;
function preload() 
{
  backgroundImage = loadImage("./assets/background.png");
  car1_img = loadImage("../assets/car1.png");
  car2_img = loadImage("../assets/car2.png");
  track = loadImage("../assets/track.jpg");
  //Load Images of fuel,powrcoin,obstacle1 & obstacle2
  fuelImg = loadImage("assets/fuel.png");
  coinImg = loadImage("assets/goldCoin.png");
  obstacle1Img = loadImage("assets/obstacle1.png");
  obstacle2Img = loadImage("assets/obstacle2.png");
}

function setup() 
{
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() 
{
  background(backgroundImage);
  if (playerCount === 2) 
  {
    game.update(1);
  }

  if (gameState === 1) 
  {
    game.play();
  }
}

function windowResized() 
{
  resizeCanvas(windowWidth, windowHeight);
}
