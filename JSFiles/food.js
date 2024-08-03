const food = document.getElementById('food');

//Minimum and maximum values for X and Y positions
let minX = 385, maxX = 970;
let minY = 150, maxY = 420;



function getRandomPositionX(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomPositionY(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let PositionX = getRandomPositionX(minX, maxX); // Ejemplo: número entre 384 y 967
let PositionY = getRandomPositionY(minY, maxY); // Ejemplo: número entre 150 y 433

food.style.left = PositionX + 'px';
food.style.top = PositionY + 'px';

document.addEventListener('keydown', function(event) 
{
    
    //When clicking "Enter" key, the game will start
    if (event.key === 'Enter') 
    {
        PositionX = getRandomPositionX(minX, maxX); // Ejemplo: número entre 384 y 967
        PositionY = getRandomPositionY(minY, maxY); // Ejemplo: número entre 150 y 433

        food.style.left = PositionX + 'px';
        food.style.top = PositionY + 'px';
    }
});



