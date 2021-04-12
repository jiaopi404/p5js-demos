let boxes = []

function setup() {
    createCanvas(600, 400, WEBGL)
    boxes.push(new Box())
}

function draw() {
    background(200)
    // push()
    // box(50, 10, 50)
    rotateY(frameCount * 0.05)
    rotateX(frameCount * 0.1)
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].show()
    }
    // pop()
    // box(50, 50, 10)
}

/* function setup() {
    createCanvas(100, 100, WEBGL);
  }
  
  function draw() {
    background(200);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(50, 50, 10);
  } */