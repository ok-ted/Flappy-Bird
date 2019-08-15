var bird; //holds variety of things, text or numbers
var pipes = []; //array


function setup() 
{
  createCanvas(640, 480); //canvas size
  bird = new Bird(); //set bird to Bird class
  pipes.push(new Pipe()); //same thing to pipe
}

function draw() //begins to draw objects
{
  background(250, 137, 237); //color black is 0, white is 255
  
  for(var i = pipes.length-1; i>= 0;   i--) //for loop
  {
    pipes[i].show(); //create graphics
    pipes[i].update(); //moves pipes across the screen
    if (pipes[i].hits(bird)) //create collision
    {
      console.log("HIT");//when bird hit pipe
    }
    if (pipes[i].offscreen())
    {
      pipes.splice(i, 1); //premade function that subtracts array
      
    
    }
  }
  
  bird.update();
  bird.show();
  
  if(frameCount % 75 == 0) //remainder,  making new pipes
  {   
    pipes.push(new Pipe()); //if game is not pause, it'll keep going. will make new pipes 
  }
    
}

function keyPressed() 
{
  if(key == ' ') //making "space" a command
  {
    bird.up(); //bird will fly up if space is pressed
  }
}
