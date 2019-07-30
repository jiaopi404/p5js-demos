function Food() {
    this.x = 30 * round(random(3, floor(width / 30)) - 2);
    this.y = 30 * round(random(3, floor(height / 30)) - 2);


    this.show = function () {
        noStroke();
        fill(random(0, 255), random(0, 255), random(0, 255));
        ellipse(this.x, this.y, 30, 30);
    }

    this.collision = function (obj) {
        if (dist(this.x, this.y, obj.curPos.x, obj.curPos.y) < 30) {
            return true;
        } else {
            return false;
        }
    }
}