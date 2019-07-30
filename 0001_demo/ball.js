class Ball {
    constructor() {
        this.x = mouseX
        this.y = mouseY
        this.dy = 1
    }

    show() {
        noStroke()
        fill(255, 0, 255)
        ellipse(this.x, this.y, 30, 30)
    }
    update() {
        this.y += this.dy
    }
}