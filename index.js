const snake = document.getElementById('snake');

let posX = 376; 
let posY = 159;

function movement()
{
    snake.style.left = posX + 'px';
    snake.style.top = posY + 'px';

    posX = posX + 10;
}

// Ejecutar cad 500 ms
setInterval(movement, 500);


