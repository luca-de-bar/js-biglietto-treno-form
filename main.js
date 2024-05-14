'use strict'

//ev.preventDefault();
const form = document.getElementById('ticket-form')

form.addEventListener('submit', function (ev) {
  ev.preventDefault()
})

//Form elements
const inputKM = document.getElementById('input-km')
const currentKM = document.getElementById('currentKM')
const inputEmail = document.getElementById('inputEmail')
const inputAge = document.getElementById('inputAge')
const submit = document.getElementById('submit')

//imposto il valore iniziale di inputKM
currentKM.innerText = inputKM.value

//Cambio il valore di KM quando scorro l'input range
inputKM.addEventListener('input', function () {
  currentKM.innerText = inputKM.value
})

//Se Express Checkbox is Checked
const expressCheckbox = document.getElementById('expressCheckbox')
const expressInfo = document.getElementById('expressInfo')

expressCheckbox.addEventListener('change', function () {
  switch (expressCheckbox.checked) {
    case true:
      inputKM.min = '5'
      inputKM.max = '500'
      inputKM.step = '15'
      currentKM.innerText = inputKM.value
      expressInfo.classList.remove('d-none')
      expressInfo.classList.add('d-block')
      break

    case false:
      inputKM.min = '5'
      inputKM.max = '200'
      inputKM.step = '5'
      inputKM.value = '5'
      currentKM.innerText = inputKM.value
      expressInfo.classList.remove('d-block')
      expressInfo.classList.add('d-none')
      break
  }
})

//Regex validazione email
function emailValidation(email) {
  const regex = /^[^\s@]+@[^\s@]+\.(it|com|net|org|edu)$/
  return regex.test(email)
}

//Valido Age e Email al click di submit, restituisco output
submit.addEventListener('click', function () {
  inputAge.classList.remove("is-valid", "is-invalid");
  inputEmail.classList.remove("is-valid", "is-invalid");

  // Validazione Age
  const stringAge = inputAge.value.trim();
  const intAge = parseInt(stringAge);
  const emailFeedback = document.getElementById("emailFeedback");
  const ageFeedback = document.getElementById("ageFeedback");

  if (intAge <= 0 || intAge >= 111) {
    inputAge.classList.add("is-invalid");
    ageFeedback.innerText = "L'età deve essere tra 1 e 110 anni.";
    ageFeedback.classList.remove("d-none");
  } else if (stringAge === "") {
    inputAge.classList.add("is-invalid");
    ageFeedback.innerText = "Il campo età non può essere vuoto.";
    ageFeedback.classList.remove("d-none");
  } else if (stringAge !== intAge.toString()) {
    inputAge.classList.add("is-invalid");
    ageFeedback.innerText = "Inserire un'età valida";
    ageFeedback.classList.remove("d-none");
  } else {
    inputAge.classList.remove("is-invalid");
    inputAge.classList.add("is-valid");
    ageFeedback.classList.add("d-none");
  }

  //Validazione Email
  const email = inputEmail.value;

  if (email.trim() === "") {
    inputEmail.classList.add("is-invalid");
    emailFeedback.classList.remove("d-none");
  } else if (!emailValidation(email)) {
    inputEmail.classList.add("is-invalid");
    emailFeedback.classList.remove("d-none");
  } else {
    inputEmail.classList.remove("is-invalid");
    inputEmail.classList.add("is-valid");
    emailFeedback.classList.add("d-none");
  }

  // Imposto le variabili in utilizzo per la validazione dell'input
  const intKM = parseInt(inputKM.value);
  const ageValid = inputAge.classList.contains("is-valid");
  const emailValid = inputEmail.classList.contains("is-valid");
  const checkoutText = document.getElementById("checkoutText");
  const modal = new bootstrap.Modal(document.getElementById("Checkout"));
  let expressValidData = ageValid && emailValid && expressCheckbox.checked;
  let baseValidData = ageValid && emailValid;

  //Imposto la variabile message, imposto le variabili per i prezzi
  let message = "";
  const expressPrice = (intKM * 0.35);
  const expressTwenty = (expressPrice * 0.8);
  const expressForty = (expressPrice * 0.6);
  const basePrice = (intKM * 0.21);
  const baseTwenty = (basePrice * 0.8);
  const baseForty = (basePrice * 0.6)


  if (expressValidData && intAge < 18) {
    message = `Grazie per aver scelto Express! Hai diritto ad uno sconto del 20%: il costo del biglietto sarà di ${expressTwenty.toFixed(2)}€ invece di ${expressPrice.toFixed(2)}€. Riceverai il biglietto digitale alla mail comunicata.`;
  }
  else if (expressValidData && intAge >= 65) {
    message = `Grazie per aver scelto Express! Hai diritto ad uno sconto del 40%: il costo del biglietto sarà di ${expressForty.toFixed(2)}€ invece di ${expressPrice.toFixed(2)}€. Riceverai il biglietto digitale alla mail comunicata.`;
  }
  else if (expressValidData) {
    message = `Grazie per aver scelto Express! Il prezzo del biglietto sarà di ${expressPrice.toFixed(2)}€. Riceverai il biglietto digitale alla mail comunicata.`;
  }
  else if (baseValidData && intAge < 18) {
    message = `Hai diritto ad uno sconto! Il costo del biglietto sarà di ${baseTwenty.toFixed(2)}€ invece che ${basePrice.toFixed(2)}€. Riceverai il biglietto alla mail comunicata.`;
  }
  else if (baseValidData && intAge >= 65) {
    message = `Hai diritto ad uno sconto! Il costo del biglietto sarà di ${baseForty.toFixed(2)}€ invece che ${basePrice.toFixed(2)}€ Riceverai il biglietto alla mail comunicata.`;
  }
  else if (baseValidData) {
    message = `Il costo del biglietto sarà di ${basePrice.toFixed(2)}€. Riceverai il biglietto alla mail comunicata.`;
  }
    if (message) {
    checkoutText.innerText = message;
    modal.show();
  }
})

