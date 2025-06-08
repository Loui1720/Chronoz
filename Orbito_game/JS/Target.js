


class Target {
  
  constructor(size) {
    this.x = random(50, width - 100);
    this.y = random(50, height - 100);
    this.size = size;
  }
  
  update(orb, score) {
    if (orb.x >= this.x && orb.x <= this.x + this.size && orb.y >= this.y && orb.y <= this.y + this.size) {
      this.x = random(50, width - 100);
      this.y = random(50, height - 100);
      score.score += 1;
      counter.reset();
    }
  }
  
  show() {
    noFill();
    stroke(0);
    strokeWeight(2);
    rect(this.x, this.y, this.size, this.size);
  }
}
