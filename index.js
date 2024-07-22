const snake = document.getElementById('snake');
//Initial position for the "snake"
let posX = 376; 
let posY = 159;


//This funcion simulates movement of the sanek
function movement()
{
    snake.style.left = posX + 'px';
    snake.style.top = posY + 'px';

    posX = posX + 1;
}

document.addEventListener('keydown', function(event) 
{
    //When clicking "Enter" key, the game will start
    if (event.key === 'Enter') 
    { 
        //delay 500 ms
       setInterval(movement, 5);
    }
});




