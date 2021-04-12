function Ball2 (x, y) {
    this.x = x;
    this.y = y;
    this.r = 20;
    // 速度
    this.dx = random(2, 6) * (random(-1, 1) > 0 ? 1 : -1);
    this.dy = random(-20, 1);
    // 加速度
    this.d2y = .5;
    this.dead = false
}

Ball2.prototype.update = function () {
    // x
    this.x += this.dx;
    // y
    this.dy += this.d2y;
    this.y += this.dy;
    bounce.call(this)
    kill.call(this)
}

Ball2.prototype.show = function () {
    noStroke();
    fill('#ff3040')
    ellipse(this.x, this.y, this.r)
}

function bounce () {
    const LESS_RATE = 0.8; // 递减率
    const MIN_SPEED = 1;
    if (this.y + this.r > displayHeight) {
        this.dy = -1 * LESS_RATE * this.dy;
        this.y = displayHeight - this.r
    }
    // if (Math.abs(this.dy) < MIN_SPEED) {
    //     this.dy = 0;
    // }
}

function kill () {
    if (this.x + this.r < 0 || this.x - this.r > displayWidth) {
        this.dead = true
    }
}
