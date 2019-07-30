/* 设置食物大小和方块大小为 [width - 15 * 2(边框) ] / 10

    用鼠标事件代替触屏事件    
 */


let snake = []; // snake
let section1; // first three parts
let section2;
let section3;
let tempArray = []; // 存放上一个位置的临时数组
let lastSection; //  保存新加入的
let food; // 食物obj
let controller; // 控制吃食物行为
let score; // 分数
let speed;

const drec = ['UP', 'RIGHT', 'DOWN', 'LEFT', 'SPEED_UP'];
const btnName = ['↑', '→', '↓', '←', '!'];

let tapbtns = [];

let directionController;
function setup() {
    createCanvas(windowWidth, windowHeight);
    //initializition
    lastSection = null;
    controller = false;
    directionController = 'POSX'; // 默认正向
    score = 0;
    food = new Food();
    speed = 40;

    section1 = {
        curPos: {
            x: 150,
            y: 180,
            direction: 'POSX'
        }
    };
    section2 = {
        curPos: {
            x: 120,
            y: 180,
            direction: 'POSX'
        }
    };
    section3 = {
        curPos: {
            x: 90,
            y: 180,
            direction: 'POSX'
        }
    };

    snake.push(new Snake(section1, true));
    snake.push(new Snake(section2, true));
    snake.push(new Snake(section3, true));

    // 添加触屏按钮 Tapbtn(drec, posx, posy, btnName)
    tapbtns.push(new Tapbtn(drec[0], width / 2 - 75, height - 150, btnName[0]));
    tapbtns.push(new Tapbtn(drec[1], width / 2 - 25, height - 100, btnName[1]));
    tapbtns.push(new Tapbtn(drec[2], width / 2 - 75, height - 50, btnName[2]));
    tapbtns.push(new Tapbtn(drec[3], width / 2 - 125, height - 100, btnName[3]));
    tapbtns.push(new Tapbtn(drec[4], width / 2 + 100, height - 100, btnName[4]));
}

function draw() {
    background('pink');

    // 显示边界
    push();
    noStroke();
    fill(99);
    rectMode(CORNER);
    rect(0, 0, 15, height);
    rect(0, 0, width, 15);
    rect(width - 15, 0, width, height);
    rect(0, height - 15, width, height);
    pop();

    // 所有的部分都显示
    for (let i = 0; i < snake.length; i++) {
        // 单独显示第一节
        if(i == 0) {
            snake[i].firstShow();
        }else {
            snake[i].show();
        }
        
        food.show();
    }
    for (let i = 0; i < tapbtns.length; i++) {
        tapbtns[i].show();
    }

    // 每隔一定的时间蛇蛇自己动(更新位置)
    // 保存上一个状态的位置， 更新时：第二节以及之后的节都获取上一个状态时前一节的位置来更新
    if (frameCount % speed == 0) {
        // 先把当前值(传值，不传引用)以对象形式保存到数组里,此处只有三个数值，与snake中四个值不同，所以会被视为不同对象
        for (let i = 0; i < snake.length; i++) {
            var tempX = snake[i].curPos.x;
            var tempY = snake[i].curPos.y;
            var tempDirection = snake[i].curPos.direction;
            tempArray.push({ 
                x : tempX,
                y : tempY,
                direction : tempDirection
            });
        }

        // 之后利用保存的临时值更新之后的部分
        for (let i = 1; i < snake.length; i++) {
            snake[i].curPos.x = tempArray[0].x;
            snake[i].curPos.y = tempArray[0].y;
            snake[i].curPos.direction = tempArray[0].direction;
            tempArray.shift();
        }
        // 临时数组还剩一个元素
        tempArray.shift();

        // 之后更新第一个部分
        snake[0].curPos.direction = directionController;
        switch (snake[0].curPos.direction) {
            case 'POSX':
                snake[0].curPos.x += 30;
                break;
            case 'NEGX':
                snake[0].curPos.x -= 30;
                break;
            case 'POSY':
                snake[0].curPos.y += 30;
                break;
            case 'NEGY':
                snake[0].curPos.y -= 30;
                break;
        }
    }

    // 事件， 优化， 相反方向时无效
    // FIXME: 疯狂转向时会撞死
/*     if (keyIsDown(RIGHT_ARROW) && (snake[0].curPos.direction != 'POSX') && (snake[0].curPos.direction != 'NEGX')) {
        snake[0].curPos.direction = 'POSX';
    }
    if (keyIsDown(LEFT_ARROW) && (snake[0].curPos.direction != 'NEGX') && (snake[0].curPos.direction != 'POSX')) {
        snake[0].curPos.direction = 'NEGX';
    }
    if (keyIsDown(UP_ARROW) && (snake[0].curPos.direction != 'NEGY') && (snake[0].curPos.direction != 'POSY')) {
        snake[0].curPos.direction = 'NEGY';
    }
    if (keyIsDown(DOWN_ARROW) && (snake[0].curPos.direction != 'POSY') && (snake[0].curPos.direction != 'NEGY')) {
        snake[0].curPos.direction = 'POSY';
    } */

    // FIX之后版本
    // FIXME: 
    if (snake[0].curPos.direction == 'POSX'){
        if(keyIsDown(UP_ARROW) || tapbtns[0].touched) {
            directionController = 'NEGY';
        }else if(keyIsDown(DOWN_ARROW) || tapbtns[2].touched){
            directionController = 'POSY';
        }else {
            
        }
    }
    if (snake[0].curPos.direction == 'NEGX'){
        if(keyIsDown(UP_ARROW) || tapbtns[0].touched) {
            directionController = 'NEGY';
        }else if(keyIsDown(DOWN_ARROW) || tapbtns[2].touched){
            directionController = 'POSY';
        }else {

        }
    }
    if (snake[0].curPos.direction == 'POSY'){
        if(keyIsDown(LEFT_ARROW) || tapbtns[3].touched) {
            directionController = 'NEGX';
        }else if(keyIsDown(RIGHT_ARROW) || tapbtns[1].touched){
            directionController = 'POSX';
        }else {

        }
    }
    if (snake[0].curPos.direction == 'NEGY'){
        if(keyIsDown(LEFT_ARROW) || tapbtns[3].touched) {
            directionController = 'NEGX';
        }else if(keyIsDown(RIGHT_ARROW) || tapbtns[1].touched){
            directionController = 'POSX';
        }else {

        }
    }
    
    // speed up
    // console.log(tapbtns[4].touched);
    
    if(keyIsDown(32) || tapbtns[4].touched){
        speed = 8;
    }else {
        speed = 40;
    }


    // 判断碰撞(这种控制子方式在于，若使用普通方式判断，碰撞会发生多次)
    for(let i = 0; i < snake.length; i++){
        if(food.collision(snake[i])){
            console.log(controller);
            controller = true;          
        }

    }
    // 控制碰撞之后， 长度+1， 食物重置， 分数++
    if(controller == true) {
        lastSection = {
            curPos : {
                x : snake[snake.length - 1].curPos.x,
                y : snake[snake.length - 1].curPos.y,
                direction : snake[snake.length - 1].curPos.direction
            }
        };
        snake.push(new Snake(lastSection, true));
        food = null;
        food = new Food();
        controller = false;
        score++;
    }

    // 碰撞自己或者边界 结束游戏
    if(snake[0].curPos.x < 15 || snake[0].curPos.x > width - 15 || snake[0].curPos.y < 15 || snake[0].curPos.y > height - 15) {
        dead();
    }
    for(let i = 1; i < snake.length; i++){
        if(snake[0].curPos.x == snake[i].curPos.x &&  snake[0].curPos.y == snake[i].curPos.y){
            dead();
        }
    }

    // 分数部分
    push();
    fill('blue');
    noStroke();
    textSize(15);
    text('score: ' + score, 500, 50);
    text('操作方式: ↑ ↓ ← → ', 50,50);
    pop();
}

// 死亡时的行为
function dead() {
    push();
    fill('red');
    noStroke();
    textSize(40);
    text('棒啊\nscore: ' + score, width / 2 - 80, 200);
    textSize(20);
    text('刷新重玩', width / 2 - 50, height / 1.2 - 30);
    pop();
    noLoop();
}

// 添加touch事件

