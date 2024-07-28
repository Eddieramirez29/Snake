const food = document.getElementById('food');

//Minimum and maximum values for X and Y positions
let minX = 384, maxX = 967;
let minY = 150, maxY = 433;



function getRandomPositionX(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomPositionY(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.addEventListener('keydown', function(event) 
{
    
    //When clicking "Enter" key, the game will start
    if (event.key === 'Enter') 
    {
        let PositionX = getRandomPositionX(minX, maxX); // Ejemplo: número entre 384 y 967
        let PositionY = getRandomPositionY(minY, maxY); // Ejemplo: número entre 150 y 433

        food.style.left = PositionX + 'px';
        food.style.top = PositionY + 'px';
    }
});



