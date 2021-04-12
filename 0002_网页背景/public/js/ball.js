/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 18:03:14
 * @LastEditTime: 2019-08-09 18:38:13
 * @LastEditors: Please set LastEditors
 */
function Ball() {
    this.x = random(0, displayWidth)
    this.y = random(0, displayHeight)
    this.r = random(2, 7)

    this.dx = random(-0.5, 0.5)
    this.dy = random(-0.5, 0.5)

    this.color = color(random(1, 255), random(1, 255), random(1, 255))

    this.dr = 1
    this.maxr = random(60, 80)
}

Ball.prototype.show = function() {
    noStroke()
    fill(this.color)
    ellipse(this.x, this.y, this.r)
}

Ball.prototype.update = function() {
    if ((this.x - this.r) < 0 || (this.x - this.r) > displayWidth) {
        this.dx = this.dx * -1
    }
    if ((this.y - this.r) < 0 || (this.y + this.r) > displayHeight) {
        this.dy = this.dy * -1
    }
    
    this.x += this.dx
    this.y += this.dy
}

// 在范围之内放大, 否则缩小
Ball.prototype.amplification = function(isInScope) {
    if (isInScope) {
        if (this.r < this.maxr) {
            this.r += this.dr
        }
    } else {
        if (this.r > 4) {
            this.r -= this.dr
        }
    }
}