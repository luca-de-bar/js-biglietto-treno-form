##Cosa ho imparato

- Bootstrap in parte valida automaticamente i form, ad esempio per un form "number" non mi fa mettere numeri float o valori string perché si aspetta un intero, Evita anche valori parzialmente numerici come 123abc (cosa che invece ho dovuto validare nell'esercizio precedente). Ciò che non controlla però sono i numeri negativi ed eventualmente il form vuoto.

- Vale anche per il form input type email dove fa un check se si scrive almeno un testo come "ciao@boolean" non controlla però il ".it" o qualsiasi altra estensione.. banalmente il form potrei riempirlo anche omettendo il .it (Qui infatti devo capire come validare..)

- Posso dare un "feedback visivo" all'utente, applicando tramite JS la classe "is-invalid" o "is-valid" all'input. In aggiunta, se aggiungo un div sottostante all'input con classe "valid-feedback" o "invalid-feedback" posso dare un feeback testuale all'utente, in contemporanea con il feedback visivo fornito in precedenza.

- Switch non si può completmente sostituire a If (ahimè), purtroppo non posso dire a switch di controllare se un valore è isNaN o semplicemente maggiore o minore... fa solo una comparazione del tipo : 

switch(variable){
    case 0:
    console.log('Questo è 0')
}

Il codice riportato sopra funziona, mentre quello sottostante no

switch(variable){
    case variable>=0 : 
    console.log('Maggiore o uguale a 0')
}

ho testato anche scrivendo case (variable>=0) ma non funziona, ricercando ho scoperto che switch non funziona per questo genere di casistiche ed è pertanto consigliato l'utilizzo di IF.

- in JS window.alert() blocca il thread in corso, ho dovuto eliminarlo siccome nei casi in cui l'input precedente era sbagliato, poi ne facevo uno giusto e premevo "Acquista" appariva il window.alert dandomi il messaggio finale, nonostante io nella schermata vedessi (per quanto i valori fossero validi) degli avvisi sulle caselle di input come se fossero errati.. ho poi capito che questo era dovuto a window.alert e non alla logica del mio JS (non avete idea di quanto ci abbia speso per capirlo.. stavo cercando un bug nel mio codice che non ci stava..)

- Ho imparato che se aggiungi un modal di bootstrap e in un button aggiungi data-bs-toggle e data-bs-target compilati, il modal si aprirà indipendentemente dalla logica che tu gli vuoi applicare
Ad esempio, vuoi che il modal venga mostrato solo se tutti i form sono corretti?? Beh devi rimuovere data-bs-toggle e data-bs-target altrimenti questa cosa non potrai farla dato che altrimenti
il modal viene targhettato direttamente da HTML e quindi sucrlassando ogni altra logica.

Mi è venuta in aiuto questa variabile : const modal = new bootstrap.Modal(document.getElementById("Checkout"));  e poi dentro gli if per checckare se era tutto valido eseguire modal.show()
