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
const countdownItems = document.querySelectorAll('.ul-0f-time li span');
const resetButton = document.querySelector('.coundown-btn');

// Complete
const complete = document.querySelector('.complete');
const completeTitle = document.querySelector('.complete-title');
const completeInfo = document.querySelector('.complete-info');
const completeButton = document.querySelector('.complete-btn');


let coundownTitle = '';
let coundownDate = '';
let coundownValue = Date;
let coundownActive;

const second = 1000;
const minute = second * 60 ;
const hour = minute * 60;
const day = hour * 24;



// set Date Input Minnimum with today's date

const today = new Date().toISOString().split('T')[0];
datePicker.setAttribute('min', today);

//populate countdown / complete ui
function updateDOM(){
    coundownActive = setInterval(()=>{

    // hide the input
    inputContainer.style.display = 'none';
    // show countdown
    countdown.style.display = 'flex';

        const now = Date.now();
    /* console.log( 'now:',now); */
    const distance = coundownValue - now;
   /*  console.log('distance:' ,distance); */

    const days= Math.floor(distance/ day);
    const hours = Math.floor((distance % day)/ hour)
    const minutes = Math.floor((distance % hour)/ minute)
    const seconds = Math.floor((distance % minute)/ second);
    console.log(days, hours, minutes, seconds);

    //populate countdown
    countdownTitle.textContent = `${coundownTitle}`;
    countdownItems[0].textContent = `${days}`;
    countdownItems[1].textContent = `${hours}`;
    countdownItems[2].textContent = `${minutes}`;
    countdownItems[3].textContent = `${seconds}`;

    }, second);

}

//take values from form input

function updateCountdown(e){
    e.preventDefault();
    coundownTitle = e.srcElement[0].value;
    coundownDate = e.srcElement[1].value;
    /* console.log(coundownTitle, coundownDate); */

    //get number version of current date, update dom

    
    // check for valid date
    if(coundownDate === ''){
        alert('please select a date for the count down')
    }else{
        coundownValue = new Date(coundownDate).getTime();
        /* console.log( 'countdownvalue:',coundownValue); */
        updateDOM();
    }
}

// activating the rest button , going back to the first page:

function resetCountdown(){
    clearInterval(coundownActive);

    // show the input
    inputContainer.style.display = 'flex';
    // hide countdown
    countdown.style.display = 'none';
    coundownTitle = '';
    coundownDate = '';

}

//event listener

countdownForm.addEventListener('submit', updateCountdown);
resetButton.addEventListener('click', resetCountdown);



