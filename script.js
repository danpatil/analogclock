const hourHand = document.querySelector('#hour');
const minuteHand = document.querySelector('#minute');
const secondHand = document.querySelector('#second');

function runClock () {
    let date = new Date();

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    console.log(hr + 'hr ' + min + 'min ' + sec + 'sec ');

    let hrPosition = (hr*360/12) + (min*360/60)/12;
    let minPosition = (min*360/60) + (sec*360/60)/60;
    let secondPosition = sec*360/60;

    hourHand.style.transform = 'rotate(' + hrPosition + 'deg)';
    minuteHand.style.transform = 'rotate(' + minPosition + 'deg)';
    secondHand.style.transform = 'rotate(' + secondPosition + 'deg)';
}

let timeInterval = setInterval(runClock, 1000);