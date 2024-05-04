// Video Background
const videoBackground = document.querySelector('.video-background');
const videoOverlay = document.querySelector('.video-overlay');

// Container
const container = document.querySelector('.container');

// Input Container
const inputContainer = document.querySelector('.input-container');
const countdownForm = document.querySelector('#countdownForm');
const titleInput = document.querySelector('#title');
const datePicker = document.querySelector('#date-picker');
const submitButton = document.querySelector('#submit');

// Countdown
const countdown = document.querySelector('.countdown');
const countdownTitle = document.querySelector('.countdown-title');
const countdownItems = document.querySelectorAll('.ul-0f-time li');
const resetButton = document.querySelector('.coundown-btn');

// Complete
const complete = document.querySelector('.complete');
const completeTitle = document.querySelector('.complete-title');
const completeInfo = document.querySelector('.complete-info');
const completeButton = document.querySelector('.complete-btn');


let coundownTitle = '';
let coundownDate = '';


// set Date Input Minnimum with today's date

const today = new Date().toISOString().split('T')[0];
datePicker.setAttribute('min', today);

//take values from form input

function updateCountdown(e){
    e.preventDefault();
    coundownTitle = e.srcElement[0].value;
    coundownDate = e.srcElement[1].value;
    console.log(coundownTitle, coundownDate);
}

//event listener

countdownForm.addEventListener('submit', updateCountdown)


