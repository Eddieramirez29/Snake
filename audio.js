// Crear un objeto Audio para cada sonido
const audio = new Audio('./391097__celestinoanthony__003suspense-jesus-christ-coming-soon-bass-ab-no-reverb.wav');

// Función para reproducir el sonido
function playSound() 
{
  audio.play();
}

// Llamar a la función para reproducir el sonido cuando se necesite
document.addEventListener('keydown', function(event) 
{
  if (event.key === 'Enter') {
    playSound();
  }
});
