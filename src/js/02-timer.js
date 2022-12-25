import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const dateInput = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');
const interactiveCoutdown = {
   days: document.querySelector('[data-days]'),
   hours: document.querySelector('[data-hours]'),
   minutes: document.querySelector('[data-minutes]'),
   seconds: document.querySelector('[data-seconds]'),
};

startButton.style.backgroundColor = 'purple';
startButton.style.width = '210px';
startButton.style.height = '70px';
startButton.style.fontSize = '50px';
startButton.style.color = 'white';

let timeToEvent = 0;

startButton.disabled = true;

const presentTime = new Date();

const fp = flatpickr(dateInput, {
   enableTime: true,
   time_24hr: true,
   defaultDate: new Date(),
   minuteIncrement: 1,
   onClose(selectedDates) {
      if (selectedDates[0].getTime() < presentTime.getTime()) {
         Notiflix.Notify.failure('Please choose a date in the future');
         return;
      }
      startButton.disabled = false;
      timeToEvent = selectedDates[0].getTime() - presentTime.getTime();
      const { days, hours, minutes, seconds } = convertMs(timeToEvent);

      interactiveCoutdown.days.textContent = addLeadingZero(days.toString());
      interactiveCoutdown.hours.textContent = addLeadingZero(hours.toString());
      interactiveCoutdown.minutes.textContent = addLeadingZero(minutes.toString());
      interactiveCoutdown.seconds.textContent = addLeadingZero(seconds.toString());
      console.log(timeToEvent);
      return timeToEvent;
   },
});

startButton.addEventListener('click', startCoutdown);

function startCoutdown() {
   let timer = setInterval(() => {
      if (timeToEvent < 999) {
         clearInterval(timer);
         return;
      }
      timeToEvent -= 1000;
      const { days, hours, minutes, seconds } = convertMs(timeToEvent);
      interactiveCoutdown.days.textContent = addLeadingZero(days.toString());
      interactiveCoutdown.hours.textContent = addLeadingZero(hours.toString());
      interactiveCoutdown.minutes.textContent = addLeadingZero(minutes.toString());
      interactiveCoutdown.seconds.textContent = addLeadingZero(seconds.toString());
      console.log(interactiveCoutdown.days.textContent);
   }, 1000);
}

function convertMs(ms) {
   // Number of milliseconds per unit of time
   const second = 1000;
   const minute = second * 60;
   const hour = minute * 60;
   const day = hour * 24;

   // Remaining days
   const days = Math.floor(ms / day);
   // Remaining hours
   const hours = Math.floor((ms % day) / hour);
   // Remaining minutes
   const minutes = Math.floor(((ms % day) % hour) / minute);
   // Remaining seconds
   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

   return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
   return value.padStart(2, 0);
}
