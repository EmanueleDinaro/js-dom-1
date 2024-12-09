function turnOnLamp() {
    document.getElementById("white_lamp").src = "img/yellow_lamp.png";
}

const button = document.querySelector('button')

button.addEventListener('click', turnOnLamp)

