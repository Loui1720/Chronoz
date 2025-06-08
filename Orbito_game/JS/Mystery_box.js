


class MysteryBox {
    constructor() {
      this.x = random(50, width - 100);
      this.y = random(50, height - 100);
      this.size = 25;
    }

    update(orb, mysteryBoxShow) {
      if (orb.x >= this.x && orb.x <= this.x + this.size && orb.y >= this.y && orb.y <= this.y + this.size) {
        this.x = random(50, width - 100);
        this.y = random(50, height - 100);
        mysteryBoxShow = false;
        mysteryBoxCounter.reset();
        state = 'PAUSED';
      }
      return;
    }

    show(mysteryBoxShow) {
      if (mysteryBoxShow) {
        // noFill();
        // stroke(0);
        // strokeWeight(2);
        // ellipse(this.x + this.size / 2, this.y + this.size / 2, this.size, this.size);
        noFill();
        stroke(0);
        strokeWeight(2);
        rect(this.x, this.y, this.size, this.size);
        textSize(24);
        strokeWeight(1);
        text('?', this.x + 5, this.y + this.size - 4);
      }
      return;
    }
}