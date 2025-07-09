class Orb {
  constructor(x, y, size) {
    this.start_x = x;
    this.start_y = y;
    this.x = x;
    this.y = y;
    this.size = size;
    this.r = this.size / 2;
    this.pos = createVector(this.x, this.y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
  }

  update() {
    let dir = p5.Vector.sub(createVector(mouseX, mouseY), this.pos);
    dir.setMag(0.5);
  
    this.acc.add(dir);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  
    this.vel.mult(0.98);
    
    // X-eadge
    if (this.pos.x > width) {
      this.pos.x = 0;
    }
    if (this.pos.x < 0) {
      this.pos.x = width;
    }
    
    // Y-eadge
    if (this.pos.y > height) {
      this.pos.y = 0;
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
    }
    
    this.x = this.pos.x;
    this.y = this.pos.y;
  }
  
  
  reset() {
    this.x = this.start_x;
    this.y = this.start_y;
    this.pos.x = this.x;
    this.pos.y = this.y;
    this.vel.x = 0;
    this.vel.y = 0;
  }
  

  show() {
    switch (jsonData.skin) {
      case 0:
        fill(0);
        stroke(0);
        break;
      case 1:
        fill(255);
        stroke(255);
        break;
      case 2:
        fill(255, 0, 0);
        stroke(255, 0, 0);
        break;
      case 3:
        fill(0, 255, 0);
        stroke(0, 255, 0);
        break;
      case 4:
        fill(0, 0, 255);
        stroke(0, 0, 255);
        break;
      default:
        fill(0);
        stroke(0);
        break;
    }
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
}
