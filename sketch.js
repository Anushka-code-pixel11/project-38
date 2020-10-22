// ma'am I couldn't put the score because the text can't move like the sprite so
// if i move my monkey the camera follows it and the text lefts behind that's why
// i didn't put the text 
// btw(by the way), the code is veryyyyyyyyyyyyyyyyyyyyyyyyyy long TvT
// hope u like the game ma'am!!!
// also ma'am i added three files from the trex-game they are p5.play.js
// p5.sound.min.js anddd p5.dom.min.js for the collide function to work....
// welp that's it everything i wanted to say and pls pls read this before
// looking at the code ok byeeeeeee

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world;

var monkey,monkeyImg;

var banana,banana2,banana3,banana4,banana5;
var banana6,banana7,banana8,banana9,banana10;
var banana11,banana12,banana13,banana14;
var banana15,banana16,banana17,banana18;
var banana19,banana20,banana21,banana22;
var banana23,banana24,banana25,banana26;
var banana27,banana28,banana29,banana30;
var banana31,banana32,banana33,banana34;
var banana35,banana36,banana37,banana38;
var banana39,banana40,banana41,banana42;
var banana43,banana44,banana45,banana46;
var banana47,banana48,banana49,banana50;

var stone,stone2,stone3,stone4,stone5,stoneImg;
var stone6,stone7,stone8,stone9,stone10,stone11;
var stone12,stone13,stone14,stone15,stone16,stone17;
var stone18,stone19,stone20;

var bananaImg;
var bg_image;
var gameState = "play";
var ground;

let mainSong1;

function preload(){
	mainSong1 = loadSound("sounds/mainSong.mp3");
	monkeyImg = loadAnimation("images/monkey.png","images/monkey2.png",
	"images/monkey3.png","images/monkey4.png","images/monkey5.png",
	"images/monkey6.png","images/monkey7.png","images/monkey8.png",
	"images/monkey9.png");

	stoneImg = loadImage("images/stone.png");
	bananaImg = loadImage("images/banana.png");
	bg_image = loadImage("images/bg.jpg");
}

function setup() {	
	createCanvas(1050, 450);

	mainSong1.play();

	monkey = createSprite(525,350);
	monkey.addAnimation("monkeyRunning",monkeyImg);
	monkey.scale = 1.8;

	ground = createSprite(525,430,300000,20);
	ground.shapeColor = "pink";

	banana = createSprite(1090,200);
	banana.addImage("banana",bananaImg);
	
	banana2 = createSprite(1600,200);
	banana2.addImage("banana",bananaImg);

	banana3 = createSprite(2110,200);
	banana3.addImage("banana",bananaImg);

	banana4 = createSprite(2620,200);
	banana4.addImage("banana",bananaImg);

	banana5 = createSprite(3130,200);
	banana5.addImage("banana",bananaImg);

	banana6 = createSprite(3640,200);
	banana6.addImage("banana",bananaImg);

	banana7 = createSprite(4150,200);
	banana7.addImage("banana",bananaImg);

	banana8 = createSprite(4660,200);
	banana8.addImage("banana",bananaImg);

	banana9 = createSprite(5170,200);
	banana9.addImage("banana",bananaImg);

	banana10 = createSprite(5680,200);
	banana10.addImage("banana",bananaImg);

	banana11 = createSprite(6190,200);
	banana11.addImage("banana",bananaImg);

	banana12 = createSprite(6700,200);
	banana12.addImage("banana",bananaImg);

	banana13 = createSprite(7210,200);
	banana13.addImage("banana",bananaImg);

	banana14 = createSprite(7720,200);
	banana14.addImage("banana",bananaImg);

	banana15 = createSprite(8230,200);
	banana15.addImage("banana",bananaImg);

	banana16 = createSprite(8740,200);
	banana16.addImage("banana",bananaImg);

	banana17 = createSprite(9250,200);
	banana17.addImage("banana",bananaImg);

	banana18 = createSprite(9760,200);
	banana18.addImage("banana",bananaImg);

	banana19 = createSprite(10270,200);
	banana19.addImage("banana",bananaImg);

	banana20 = createSprite(10780,200);
	banana20.addImage("banana",bananaImg);

	banana21 = createSprite(11290,200);
	banana21.addImage("banana",bananaImg);

	banana22 = createSprite(11800,200);
	banana22.addImage("banana",bananaImg);

	banana23 = createSprite(12310,200);
	banana23.addImage("banana",bananaImg);

	banana24 = createSprite(12820,200);
	banana24.addImage("banana",bananaImg);

	banana25 = createSprite(13330,200);
	banana25.addImage("banana",bananaImg);

	banana26 = createSprite(13840,200);
	banana26.addImage("banana",bananaImg);

	banana27 = createSprite(14350,200);
	banana27.addImage("banana",bananaImg);

	banana28 = createSprite(14860,200);
	banana28.addImage("banana",bananaImg);
	
	banana29 = createSprite(15370,200);
	banana29.addImage("banana",bananaImg);

	banana30 = createSprite(15880,200);
	banana30.addImage("banana",bananaImg);

	banana31 = createSprite(16390,200);
	banana31.addImage("banana",bananaImg);

	banana32 = createSprite(16900,200);
	banana32.addImage("banana",bananaImg);

	banana33 = createSprite(17410,200);
	banana33.addImage("banana",bananaImg);

	banana34 = createSprite(17920,200);
	banana34.addImage("banana",bananaImg);

	banana35 = createSprite(18430,200);
	//banana35.addImage("banana",bananaImg);

	banana36 = createSprite(18940,200);
	banana36.addImage("banana",bananaImg);

	banana37 = createSprite(19450,200);
	banana37.addImage("banana",bananaImg);

	banana38 = createSprite(19960,200);
	banana38.addImage("banana",bananaImg);

	banana39 = createSprite(20470,200);
	banana39.addImage("banana",bananaImg);

	banana40 = createSprite(20980,200);
	banana40.addImage("banana",bananaImg);

	banana41 = createSprite(21490,200);
	banana41.addImage("banana",bananaImg);

	banana42 = createSprite(22000,200);
	banana42.addImage("banana",bananaImg);

	banana43 = createSprite(22510,200);
	banana43.addImage("banana",bananaImg);

	banana44 = createSprite(23020,200);
	banana44.addImage("banana",bananaImg);
	
	banana45 = createSprite(23530,200);
	banana45.addImage("banana",bananaImg);

	banana46 = createSprite(24040,200);
	banana46.addImage("banana",bananaImg);

	banana47 = createSprite(24550,200);
	banana47.addImage("banana",bananaImg);

	banana48 = createSprite(25060,200);
	banana48.addImage("banana",bananaImg);

	banana49 = createSprite(25570,200);
	banana49.addImage("banana",bananaImg);

	banana50 = createSprite(26080,200);
	banana50.addImage("banana",bananaImg);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
  
}

function draw() {
	background(bg_image);

	monkey.collide(ground);

	if(gameState === "play"){
	if(keyDown("RIGHT_ARROW")){
		monkey.x = monkey.x + 20;
		camera.position.x = monkey.x;
	}

	if(keyDown("UP_ARROW")){
		monkey.velocityY = -12;
	}

	monkey.velocityY = monkey.velocityY + 1;

	if(monkey.isTouching(banana)){
		banana.remove();
	}

	if(monkey.isTouching(banana2)){
		banana2.remove();
	}

	if(monkey.isTouching(banana3)){
		banana3.remove();
	}

	if(monkey.isTouching(banana4)){
		banana4.remove();
	}

	if(monkey.isTouching(banana5)){
		banana5.remove();
	}

	if(monkey.isTouching(banana6)){
		banana6.remove();
	}

	if(monkey.isTouching(banana7)){
		banana7.remove();
	}

	if(monkey.isTouching(banana)){
		banana.remove();
	}

	if(monkey.isTouching(banana8)){
		banana8.remove();
	}

	if(monkey.isTouching(banana9)){
		banana9.remove();
	}

	if(monkey.isTouching(banana10)){
		banana10.remove();
	}

	if(monkey.isTouching(banana11)){
		banana11.remove();
	}

	if(monkey.isTouching(banana12)){
		banana12.remove();
	}

	if(monkey.isTouching(banana13)){
		banana13.remove();
	}

	if(monkey.isTouching(banana14)){
		banana14.remove();
	}

	if(monkey.isTouching(banana15)){
		banana15.remove();
	}

	if(monkey.isTouching(banana16)){
		banana16.remove();
	}

	if(monkey.isTouching(banana17)){
		banana17.remove();
	}

	if(monkey.isTouching(banana18)){
		banana18.remove();
	} 

	if(monkey.isTouching(banana19)){
		banana19.remove();
	} 

	if(monkey.isTouching(banana20)){
		banana20.remove();
	} 

	if(monkey.isTouching(banana21)){
		banana21.remove();
	} 

	if(monkey.isTouching(banana22)){
		banana22.remove();
	} 

	if(monkey.isTouching(banana23)){
		banana23.remove();
	} 

	if(monkey.isTouching(banana24)){
		banana24.remove();
	} 

	if(monkey.isTouching(banana25)){
		banana25.remove();
	} 

	if(monkey.isTouching(banana26)){
		banana26.remove();
	} 

	if(monkey.isTouching(banana27)){
		banana27.remove();
	} 

	if(monkey.isTouching(banana28)){
		banana28.remove();
	} 

	if(monkey.isTouching(banana29)){
		banana29.remove();
	} 

	if(monkey.isTouching(banana30)){
		banana30.remove();
	} 

	if(monkey.isTouching(banana31)){
		banana31.remove();
	} 

	if(monkey.isTouching(banana32)){
		banana32.remove();
	} 

	if(monkey.isTouching(banana33)){
		banana33.remove();
	} 

	if(monkey.isTouching(banana34)){
		banana34.remove();
	} 

	if(monkey.isTouching(banana35)){
		banana35.remove();
	} 

	if(monkey.isTouching(banana36)){
		banana36.remove();
	} 

	if(monkey.isTouching(banana37)){
		banana37.remove();
	} 

	if(monkey.isTouching(banana38)){
		banana38.remove();
	}

	if(monkey.isTouching(banana39)){
		banana39.remove();
	}

	if(monkey.isTouching(banana40)){
		banana40.remove();
	}

	if(monkey.isTouching(banana41)){
		banana41.remove();
	}

	if(monkey.isTouching(banana42)){
		banana42.remove();
	}

	if(monkey.isTouching(banana43)){
		banana43.remove();
	}

	if(monkey.isTouching(banana44)){
		banana44.remove();
	}

	if(monkey.isTouching(banana45)){
		banana45.remove();
	}

	if(monkey.isTouching(banana46)){
		banana46.remove();
	}

	if(monkey.isTouching(banana47)){
		banana47.remove();
	}

	if(monkey.isTouching(banana48)){
		banana48.remove();
	}

	if(monkey.isTouching(banana49)){
		banana49.remove();
	}

	if(monkey.isTouching(banana50)){
		banana50.remove();
	}

	if(monkey.x === 26745){
		gameState = "end";
	}

  }

  if(gameState === "end"){
	  monkey.remove();
	  ground.remove();
	  background("red");
  }

  drawSprites();

  fill("pink");
  stroke("red");
  textFont("ALGERIAN");
  textSize(30);
  text("START HERE",100,100);
  text("Press Up key to jump",100,140);
  text("Press right key to move",100,180);

  fill("blue");
  stroke("red");
  textFont("ALGERIAN");
  text("welcome to monkey go happy!",260,60);
}
