function Tapbtn(drec, posx, posy, btnName) {
    this.x = posx;
    this.y = posy;
    this.d = 50;

    this.touched = false;
    this.show = function () {
        if (dist(this.x, this.y, mouseX, mouseY) < 25 && mouseIsPressed) {
            push();
            stroke(33);
            strokeWeight(3);
            fill(100, 0, 255, 0.6);
            ellipse(this.x, this.y, this.d, this.d);
            textSize(30);
            textAlign(CENTER);
            fill(255);
            text(btnName, this.x, this.y + 10);
            pop();
            this.touched = true;
        } else {
            push();
            stroke(255);
            strokeWeight(3);
            fill(255, 255, 255, 0.2);
            ellipse(this.x, this.y, this.d, this.d);
            textSize(30);
            textAlign(CENTER);
            fill(255);
            text(btnName, this.x, this.y + 10);
            pop();
            this.touched = false;
        }

    }

}