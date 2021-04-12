function Box () {
    this.l = random(200, 1000)
    this.d = random(200, 1000)
    this.h = random(400, 1000)
    // pos
    this.x = random(600)
    this.y = random(400)
    this.z = this.d / 2

    this.show = function() {
        box(this.l, this.d, this.h)
    }
}
