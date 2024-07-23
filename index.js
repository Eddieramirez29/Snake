const snake = document.getElementById('snake');
//Initial position for the "snake"
let posX = 376;
let posY = 159;

let intervalId = 0


//This funcion simulates movement of the sanek
function movement()
{
    snake.style.left = posX + 'px';
    snake.style.top = posY + 'px';

    posX = posX + 1;
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
        //delay 500 ms
        intervalId = setInterval(movement, 5);
    }
    //Restart to initial position
    else if (event.key === 'r' || event.key === 'R') 
            { 
                clearInterval(intervalId);//Stop snake
                restartPosition();
            }
});




