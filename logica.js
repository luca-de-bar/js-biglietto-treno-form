const age = prompt("Inserisci la tua età");
const age_int = parseInt(age);

// Validazione input, se age buono, procede con KM e valida anche quello.
if (isNaN(age) || age != age_int) {
  window.alert("Inserisci un valore numerico (ES : 20,18,55)");
} else if (age_int <= 0 || age_int >= 110) {
  window.alert("Inserisci un'età valida");
} else if (age === null || age.trim() === "") {
  window.alert("Inserisci un valore.");
} else {
  const KM = prompt("Quanti KM vuoi percorrere?");
  const KM_float = parseFloat(KM);

  if (isNaN(KM) || KM != KM_float) {
    window.alert("Inserisci un valore numerico (ES: 200,123.30,500)");
  } else if (KM_float <= 0 || KM_float >= 999) {
    window.alert("Non puoi fare 0KM o meno..e se hai inserito un numero assurdo" + " ricorda che è un treno, non un aereo.");
  } else if (KM === null || KM.trim() === "") {
    window.alert("Inserisci un valore.");
  } else {
    const prezzoOriginale = (KM_float * 0.21).toFixed(2);
    const TwentyDiscount = (parseFloat(prezzoOriginale) * (20 / 100)).toFixed(2);
    const FortyDiscount = (parseFloat(prezzoOriginale) * (40 / 100)).toFixed(2);

    if (age_int < 18) {
      window.alert(`Hai diritto ad uno sconto! Il prezzo originale è ` + `${prezzoOriginale}€ ma tu pagherai solamente ${TwentyDiscount}€!`);
    } else if (age_int >= 65) {
      window.alert(`Hai diritto ad uno sconto! Il prezzo originale è ` + `${prezzoOriginale}€ ma tu pagherai solamente ${FortyDiscount}€!`);
    } else {
      window.alert(`Il costo del viaggio sarà di ${prezzoOriginale}€!`);
    }
  }
}
