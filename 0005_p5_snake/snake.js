
function Snake(lastSection, canShow) {
    // 当前位置, 和方向 POSX NEGX POSY NEGY 四个方向
    this.curPos = {
        x: lastSection.curPos.x,
        y: lastSection.curPos.y,
        direction: lastSection.curPos.direction,
        canShow: canShow
    };


    this.show = function () {
        if (this.curPos.canShow == true) {
            stroke('green');
            fill('lightgreen');
            rectMode(CENTER);
            rect(this.curPos.x, this.curPos.y, 30, 30);
        }
    }

    this.firstShow = function() {
        if (this.curPos.canShow == true) {
            stroke('green');
            fill('green');
            rectMode(CENTER);
            rect(this.curPos.x, this.curPos.y, 30, 30);
        }
    }

}
 