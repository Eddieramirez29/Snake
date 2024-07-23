const snake = document.getElementById('snake');
//Initial position for the "snake"
let posX = 376;
let posY = 159;

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
            posY += 0;
            break;
        case 'left':
            posX -= 1;
            break;
        case 'up':
            posY -= 1;
            posX += 0;
            break;
        case 'down':
            posY += 1;
            posX += 0;
            break;
    }
    snake.style.left = posX + 'px';
    snake.style.top = posY + 'px';

}

//This funcion restarts to initial position
function restartPosition()
{
    posX = 376;
    posY = 159;
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
        if (intervalId === 0) {
            intervalId = setInterval(movement, 50);
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




