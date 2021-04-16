var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	//fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();


	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;
	fairy.setCollider("rectangle",0,0,900,300)
	fairy.debug = false;
     

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
	star.debug= false;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	star.x = starBody.position.x
	star.y = starBody.position.y
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  
  if(star.isTouching(fairy)){
	star.velocity.y=0
}


  if(keyDown(LEFT_ARROW) ){
	fairy.x = fairy.x -3
   }
  if(keyDown(RIGHT_ARROW) ){
	fairy.x = fairy.x + 3
   }
   if(keyDown(DOWN_ARROW) ){
	star.velocity.y = 3

   }




  drawSprites();

}

function keyPressed() {
	//write code here
}
