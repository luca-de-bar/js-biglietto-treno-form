'use strict'

//ev.preventDefault();
const form = document.getElementById('ticket-form')

form.addEventListener('submit', function (ev) {
  ev.preventDefault()
})

//Form elements
const inputKM = document.getElementById('input-km')
const current_km = document.getElementById('current_km')
const InputEmail = document.getElementById('InputEmail')
const InputAge = document.getElementById('InputAge')
const Submit = document.getElementById('submit')

//imposto il valore iniziale di inputKM
current_km.innerText = inputKM.value

//Cambio il valore di KM quando scorro l'input range
inputKM.addEventListener('input', function () {
  current_km.innerText = inputKM.value
})

//Logica Express Setup
const ExpressCheckbox = document.getElementById('ExpressCheckbox')
const ExpressInfo = document.getElementById('ExpressInfo')
let basePrice = (inputKM.value * 0.21).toFixed(2)

ExpressCheckbox.addEventListener('change', function () {
  switch (ExpressCheckbox.checked) {
    case true:
      inputKM.min = '5'
      inputKM.max = '500'
      inputKM.step = '15'
      current_km.innerText = inputKM.value
      ExpressInfo.classList.remove('d-none')
      ExpressInfo.classList.add('d-block')
      break

    case false:
      inputKM.min = '5'
      inputKM.max = '200'
      inputKM.step = '5'
      inputKM.value = '5'
      current_km.innerText = inputKM.value
      ExpressInfo.classList.remove('d-block')
      ExpressInfo.classList.add('d-none')
      break
  }
})

//Validazione Input

//La regex non è assolutamente scritta da me, però funziona!
function EmailValidation(email) {
  const regex = /^[^\s@]+@[^\s@]+\.(it|com|net|org|edu)$/
  return regex.test(email)
}

Submit.addEventListener('click', function () {

  InputAge.classList.remove('is-valid', 'is-invalid');
  InputEmail.classList.remove('is-valid', 'is-invalid')
    
  //Validazione Age
  const IntAge = parseInt(InputAge.value)
  const stringAge = InputAge.value
  const EmailFeedback = document.getElementById('EmailFeedback')
  const AgeFeedback = document.getElementById('AgeFeedback')

  if (IntAge <= 0 || IntAge >= 111) {
    InputAge.classList.add('is-invalid');
    AgeFeedback.classList.remove('d-none');
  } else if (stringAge.trim() === '') {
    InputAge.classList.add('is-invalid')
    AgeFeedback.classList.remove('d-none')
  } else if (IntAge != stringAge) {
    InputAge.classList.add("is-invalid");
    AgeFeedback.classList.remove("d-none");
  } else {
    InputAge.classList.remove('is-invalid')
    InputAge.classList.add('is-valid')
    AgeFeedback.classList.add('d-none')
  }

  //Validazione Email
  const Email = InputEmail.value

  if (Email.trim() === '') {
    InputEmail.classList.add('is-invalid')
    EmailFeedback.classList.remove('d-none')
  } else if (!EmailValidation(Email)) {
    InputEmail.classList.add('is-invalid')
    EmailFeedback.classList.remove('d-none')
  } else {
    InputEmail.classList.remove('is-invalid')
    InputEmail.classList.add('is-valid')
    EmailFeedback.classList.add('d-none')
  }

    // Calcolo se valido e express attivo
    const IntKM = parseInt(inputKM.value);
    const ExpressPrice = (IntKM * 0.35).toFixed(2);
    const ExpressTwenty = (ExpressPrice * 0.80).toFixed(2);
    const ExpressForty = (ExpressPrice * 0.60).toFixed(2);
    const basePrice = (IntKM * 0.21).toFixed(2);
    const baseTwenty = (basePrice * 0.80).toFixed(2);
    const baseForty = (basePrice * 0.60).toFixed(2);
    const AgeValid = InputAge.classList.contains('is-valid');
    const EmailValid = InputEmail.classList.contains('is-valid');
    const CheckoutText = document.getElementById('CheckoutText');
    
    //Per questa const lo ammetto mi ha aiutato ChatGPT...
    //non avevo idea di come aprire il modal solo in certe condizioni
    const modal = new bootstrap.Modal(document.getElementById("Checkout"));

    if (AgeValid && EmailValid && ExpressCheckbox.checked && IntAge < 18) {
        modal.show();
        CheckoutText.innerText = `Grazie per aver scelto Express! Hai diritto ad uno sconto del 20%: il costo del biglietto sarà di ${ExpressTwenty}€ invece di ${ExpressPrice}€. Riceverai il biglietto digitale alla mail comunicata.`;
    } else if (AgeValid && EmailValid && ExpressCheckbox.checked && IntAge >= 65) {
        modal.show();
        CheckoutText.innerText = `Grazie per aver scelto Express! Hai diritto ad uno sconto del 40%: il costo del biglietto sarà di ${ExpressForty}€ invece di ${ExpressPrice}€. Riceverai il biglietto digitale alla mail comunicata.`
    } else if (AgeValid && EmailValid && ExpressCheckbox.checked) {
        modal.show();
        CheckoutText.innerText = `Grazie per aver scelto Express! Il prezzo del biglietto sarà di ${ExpressPrice}€. Riceverai il biglietto digitale alla mail comunicata.`
    } else if (AgeValid && EmailValid && IntAge < 18) {
        modal.show();
        CheckoutText.innerText = `Hai diritto ad uno sconto! Il costo del biglietto sarà di ${baseTwenty}€ invece che ${basePrice}€. Riceverai il biglietto alla mail comunicata.`
    } else if (AgeValid && EmailValid && IntAge >= 65) {
        modal.show();
        CheckoutText.innerText = `Hai diritto ad uno sconto! Il costo del biglietto sarà di ${baseForty}€ invece che ${basePrice}€ Riceverai il biglietto alla mail comunicata.`
    } else if (AgeValid && EmailValid) {
        modal.show();
        CheckoutText.innerText = `Il costo del biglietto sarà di ${basePrice}€. Riceverai il biglietto alla mail comunicata.`
    }
})
