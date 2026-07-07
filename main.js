// Data prevista para a abertura da Copa do Mundo 2030
const worldCup = new Date("2030-06-08T00:00:00").getTime();

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const messageElement = document.getElementById("message");

function updateCountdown(){

    const now = new Date().getTime();

    const distance = worldCup - now;

    if(distance <= 0){

        messageElement.innerHTML = "🏆 A Copa do Mundo 2030 começou!";

        clearInterval(timer);

        return;

    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
    );

    daysElement.textContent = String(days).padStart(4,"0");
    hoursElement.textContent = String(hours).padStart(2,"0");
    minutesElement.textContent = String(minutes).padStart(2,"0");
    secondsElement.textContent = String(seconds).padStart(2,"0");

}

updateCountdown();

const timer = setInterval(updateCountdown,1000);