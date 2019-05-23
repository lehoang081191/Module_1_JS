let canvas = document.getElementById("game");
let context = canvas.getContext("2d");

let isGameOver = false;
//bóng
let ball = {
    x: 20,
    y: 20,
    dx: 5,
    dy: 2,
    radius: 20
};

//thanh chắn ngang
let paddle = {
    width: 70,
    height: 10,
    x: 0,
    y: canvas.height - 10,
    speed: 10,

    isMovingLeft: false,
    isMovingRight: false
};

function drawBall() {
    context.beginPath();
    context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    context.fillStyle = "red";
    context.fill();
    context.closePath();
}

//Hàm vẽ thanh chắn ngang
function drawPaddle() {
    context.beginPath();
    context.rect(paddle.x, paddle.y, paddle.width, paddle.height);
    context.fill();
    context.closePath();
}

//Hàm xử lý va chạm của bóng
function handleBallCollideBounds() {
    if (ball.x < ball.radius || ball.x > canvas.width - ball.radius) {
        ball.dx = -ball.dx;
    }
    if (ball.y < ball.radius) {
        ball.dy = -ball.dy;
    }
}
// Hàm xử lý va chạm của thanh chắn ngang
function handleBallCollidePaddle() {
    if (ball.x + ball.radius >= paddle.x && ball.x + ball.radius <= paddle.x && ball.y + ball.radius >= canvas.height - paddle.height){
        ball.dy = -ball.dy;
    }
}
//Thay đổi vị trí bóng
function updateBallPosition() {
    ball.x += ball.dx;
    ball.y += ball.dy;
}
//Thay đổi vị trí của thanh chắn ngang
function updatePaddlePosition(){
    if (paddle.isMovingLeft){
        paddle.x -= paddle.speed;
    }else if (paddle.isMovingRight){
        paddle.x += paddle.speed;
    }

    if (paddle.x < 0){
        paddle.x = 0;
    }else if (paddle.x > canvas.width - paddle.width){
        paddle.x = canvas.width - paddle.width;
    }
}

document.addEventListener("keyup", function (event) {
    if (event.keyCode == 37) {
        paddle.isMovingLeft = false;
    } else if (event.keyCode == 39) {
        paddle.isMovingRight = false;
    }
});

document.addEventListener("keydown", function (event) {
    if (event.keyCode == 37) {
        paddle.isMovingLeft = true;
    } else if (event.keyCode == 39) {
        paddle.isMovingRight = true;
    }
});

function checkGameOver() {
    if (ball.y > canvas.height - ball.radius){
        isGameOver = true;
    }
}

function draw() {
    if (!isGameOver){
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawBall();
        drawPaddle();

        handleBallCollideBounds();
        handleBallCollidePaddle();

        updateBallPosition();
        updatePaddlePosition();

        checkGameOver();

        requestAnimationFrame(draw);
    }else{
        alert("GAME OVER");
    }
}

draw();