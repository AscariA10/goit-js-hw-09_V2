import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const submitButton = document.querySelector('[type="submit"]');
const firstDelayValue = document.querySelector('[name="delay"]');
const delayStep = document.querySelector('[name="step"]');
const amountOfPromises = document.querySelector('[name="amount"]');

form.addEventListener('submit', event => {
   event.preventDefault();
   onClick(firstDelayValue.value);
});

function onClick(userDelay) {
   let delay = Number(firstDelayValue.value);
   for (let i = 0; i < amountOfPromises.value; i += 1) {
      createPromise(i, (delay = Number(delayStep.value) * i))
         .then(({ position, delay }) => {
            console.log(
               `✅ Fulfilled promise ${position} in ${Number(delay) + Number(userDelay)}ms`
            );
            Notiflix.Notify.success(
               `✅ Fulfilled promise ${position} in ${Number(delay) + Number(userDelay)}ms`
            );
         })
         .catch(({ position, delay }) => {
            console.log(
               `❌ Rejected promise ${position} in ${Number(delay) + Number(userDelay)}ms`
            );
            Notiflix.Notify.failure(
               `❌ Rejected promise ${position} in ${Number(delay) + Number(userDelay)}ms`
            );
         });
   }
}

function createPromise(position, delay) {
   const shouldResolve = Math.random() > 0.3;
   const generatePromise = new Promise((success, fail) => {
      setTimeout(() => {
         if (shouldResolve) {
            success({ position, delay });
         } else {
            fail({ position, delay });
         }
      }, delay);
   });
   return generatePromise;
}
