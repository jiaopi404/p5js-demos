/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 18:01:12
 * @LastEditTime: 2019-08-09 18:40:01
 * @LastEditors: Please set LastEditors
 */
let balls = []

function setup() {
    createCanvas(displayWidth, displayHeight)
    for (let i = 0; i < 300; i++) {
        balls.push(new Ball())
    }
}

function draw() {
    background(150)

    for (let i = 0; i < 300; i++) {
        balls[i].show()
        balls[i].update()
        balls[i].amplification(dist(mouseX, mouseY, balls[i].x, balls[i].y) < 90)

    }
}