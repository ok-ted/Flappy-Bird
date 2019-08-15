function Pipe()
{
  this.spacing = 175; //bird fly through this
  this.top = random(height / 6, 3/4 * height); //random top pipe
  this.bottom = height - (this.top + this.spacing); //random bottom pipe
  this.x = width; //width
  this.w = 80; //just w 
  this.speed = 6; //how fast pipe move across screen
  this.highlight = false; 
  
  this.hits = function(bird) //pass function require bird object to exist
  {
    if(bird.y < this.top || bird.y > height - this.bottom) //check y value
    {
      if (bird.x > this.x && bird.x < this.x + this.w) //if x value same for top and bottom, both must be true
      {
        this.highlight = true;
        return true;
      }
    }
    this.highlight = false; 
    return false;    
  }
  
  this.show = function()
  {
    fill(255); //white
    if (this.highlight)//if highlight returns true
    {
      fill(51, 151, 184); //3 numbers measuring 3 different colors RGB. (completely red)
    }
    rect(this.x, 0, this.w, this.top); //draw rectangle
    rect(this.x, height-this.bottom, this.w, this.bottom); //width and height
  }
  
  this.update = function()
  {
    this.x -= this.speed; //update speed
  }
  
  this.offscreen = function()
  {
    if(this.x < -this.w) 
    {
     return true; 
    }
    else 
    {
      return false;
    }
  } 
}









