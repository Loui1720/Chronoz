

class Button {
  
  constructor(x, y, w, h, space, tSpace, str) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.str = str;
    this.space = space;
    this.tSpace = tSpace;
  }
  
  hover() {
    if (mouseX >= this.x && mouseX <= this.x + this.w && mouseY >= this.y && mouseY <= this.y + this.h) {
      fill(200);
      return true;
    }
    else {
      fill(0);
      return false;
    }
  }
  
  show() {
    stroke(0);
    strokeWeight(3);
    line(this.x, this.y, this.x + this.space, this.y);
    line(this.x, this.y, this.x, this.y + this.space);
      
    line(this.x + this.w - this.space, this.y, this.x + this.w, this.y);
    line(this.x + this.w, this.y, this.x + this.w, this.y + this.space);
      
    line(this.x, this.y + this.h, this.x + this.space, this.y + this.h);
    line(this.x, this.y + this.h - this.space, this.x, this.y + this.h);
      
    line(this.x + this.w - this.space, this.y + this.h, this.x + this.w, this.y + this.h);
    line(this.x + this.w, this.y + this.h - this.space, this.x + this.w, this.y + this.h);
      
    this.hover();
    textSize(32);
    strokeWeight(2);
    text(this.str, this.x + this.tSpace, this.y + 32 + this.tSpace);
  }
  
}



class Score {

  constructor(x, y, size, opacity) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.opacity = opacity;
    this.score = 0;
  }
  
  
  reset() {
    this.score = 0;
  }
  
  
  show() {
    fill(0, this.opacity);
    noStroke();
    textSize(this.size);
    text(this.score, this.x, this.y);
  }
}



class Counter {
  
  constructor(x, y, count, size, opacity) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.opacity = opacity;
    this.startCount = count;
    this.count = count;
    this.frameCounter = 0;
  }
  
  
  update() {
    this.frameCounter += 1;
    if (this.frameCounter == 60) {
      this.count -= 1;
      this.frameCounter = 0;
    }
  }
  
  reset() {
    this.count = this.startCount;
    this.frameCounter = 0;
  }
  
  show() {
    fill(0, this.opacity);
    textSize(this.size);
    text(this.count, this.x, this.y);
  }
  
}



class Settings {

  constructor(x, y, w, h, color) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
  }

  show() {
    stroke(0);
    strokeWeight(1);
    fill(this.color);
    rect(this.x, this.y, this.w, this.h);
  }

}