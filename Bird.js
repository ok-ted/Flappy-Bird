function Bird()
{
  this.y = height/2; //half of franme
  this.x = 64; 
  this.gravity = 0.9; //gravity
  this.lift = -18; //how much you lift
  this.velocity = 0; //y velocity how fast rising or falling 
  this.show = function()
  {
    fill(255); //color 
    ellipse(this.x, this.y, 32, 32); //position and size of bird
  }
  
  this.up = function()
  {
    this.velocity += this.lift; //incrementing total velocity with lift 
  }
  
  this.update = function()
  {
    this.velocity += this.gravity; //apply gravity to velocity 
    this.y += this.velocity;
    
    if (this.y > height) //apply boundary so you can't fly out of boundary
    {
      this.y = height;
      this.velocity = 0;
    }
    
    if (this.y < 0) //apply boundary
    {
      this.y = 0;
      this.velocity =0;
    }  
  }
}

