/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 18:01:12
 * @LastEditTime: 2019-08-09 19:01:59
 * @LastEditors: Please set LastEditors
 */
let balls = []
let ball2 = null
let ball2List = []

function setup() {
    createCanvas(displayWidth, displayHeight)
    // for (let i = 0; i < 300; i++) {
    //     balls.push(new Ball())
    // }
    // ball2 = new Ball2(0, 0)
}

function draw() {
    background(50)

    // for (let i = 0; i < 300; i++) {
    //     balls[i].show()
    //     balls[i].update()
    //     balls[i].amplification(dist(mouseX, mouseY, balls[i].x, balls[i].y) < 90)
    //
    // }
    for (let i = 0; i < ball2List.length; i++) {
        ball2List[i].show()
        ball2List[i].update()
        if (ball2List[i].dead) {
            ball2List.splice(i, 1)
        }
    }
    console.log(ball2List.length)
}

function mousePressed() {
    ball2List.push(new Ball2(mouseX, mouseY))
}