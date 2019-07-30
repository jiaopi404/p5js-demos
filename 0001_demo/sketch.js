let balls = []

function setup() {
    createCanvas(400, 300)
}

function draw() {
    background(200)
    
    for (let i = 0; i < balls.length; i++) {
        balls[i].show()
        balls[i].update()
    }
}

function mousePressed() {
    balls.push(new Ball())
}