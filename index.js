const snake = document.getElementById('snake');
//Initial position for the "snake" superior izquierda
let posX = 384;
let posY = 150;

//Initial speed
let speed = 1;

snake.style.left = posX + 'px';
snake.style.top = posY + 'px';

//Initial direction
let direction = 'right';

let intervalId = 0
//This funcion simulates movement of the sanek
function movement()
{
    switch(direction) 
    {
        case 'right':
            posX += 1;
            break;
        case 'left':
            posX -= 1;
            break;
        case 'up':
            posY -= 1;
            break;
        case 'down':
            posY += 1;
            break;
    }

    snake.style.left = posX + 'px';
    snake.style.top = posY + 'px';

    checkCollision();
}

// Function to check for collisions
function checkCollision() 
{
    if(posX > 967 || posX < 384 || posY > 433 || posY < 150) 
    {
        alert("You lost!!!");
        clearInterval(intervalId);
        intervalId = 0;
        restartPosition();
        direction = 'right'; // Reset direction to 'right' after collision
    }
}

//This funcion restarts to initial position
function restartPosition()
{
    posX = 384;
    posY = 150;

    snake.style.left = posX + 'px';
    snake.style.top = posY + 'px';
}

document.addEventListener('keydown', function(event) 
{
    
    //When clicking "Enter" key, the game will start
    if (event.key === 'Enter') 
    { 
        //delay 5 ms
        // Prevent multiple intervals
        if (intervalId === 0) 
        {
            intervalId = setInterval(movement, speed);
        }
    }
    //Restart to initial position
    else if (event.key === 'r' || event.key === 'R') 
            {
                clearInterval(intervalId);//Stop snake
                intervalId = 0
                restartPosition();
            }
    else if (event.key === 'ArrowRight') 
            {
                direction = 'right';
            } 
    else if (event.key === 'ArrowLeft') 
            {
                direction = 'left';
            } 
    else if (event.key === 'ArrowUp') 
            {
                direction = 'up';
            } 
    else if (event.key === 'ArrowDown') 
            {
                direction = 'down';
            }
});


/**Next code is only for note and future use
 * //Initial position for the "snake" superior izquierda
let posX = 384;
let posY = 150;

//Initial position for the "snake" inferior izquierda
let posX = 384;
let posY = 433;

//Initial position for the "snake" superior derecha
let posX = 967;
let posY = 150;

//Initial position for the "snake" inferior derecha
let posX = 967;
let posY = 433;

 */