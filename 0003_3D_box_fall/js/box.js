function Box () {
    this.l = random(40, 90)
    this.d = random(40, 90)
    this.h = random(40, 90)
    // pos
    this.x = random(600)
    this.y = random(400)
    this.z = this.d / 2

    this.show = function() {
        return box(this.l, this.d, this.h)
    }
}
