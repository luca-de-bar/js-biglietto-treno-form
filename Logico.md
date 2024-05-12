##Ottimizzazione main.js
Vorrei migliorare la leggibilità del file main.js utilizzando switch come spiegato nell'ultima lezione, dovrò pertanto riscrivere interamente il file.

#Email Form
Vorrei inserire un form per l'inserimento della mail, giusto per rendere l'esperienza più simile ad un reale sito di acquisto biglietti.

Dopo aver validato correttamente i dati, vorrei far apparire un modal a schermo per informare l'utente che riceverà il biglietto acquistato via mail.

##Età Form
Applicherò la medesima logica applicata nell'esercizio senza form, tuttavia questa volta la logica sarà implementata tramite switch per rendere il codice più pulito.

##KM Form
Anche qui applico la medesima logica applicata nell'esercizio precedente, implementata tramite switch. Per questo form userò un input range e vorrei poter scorrere l'input range e visualizzare a schermo il valore. 
Credo di poter implementare questa cosa andando a fare un console.log dell'attuale valore di input range, metterlo poi in una variabile const e inserirlo in uno span adiacente all'input range.
Dovrò di seguito inserire un eventListener(input) per far si che allo scorrimento, venga "printato" il valore dell'input range sullo span, in tempo reale. (Ho provato con eventListener(change) ma questo aggiorna solo nel momento in cui ho completamente spostato l'input..durante lo scorrimento non aggiorna nulla)

##Express Setup
Per aggiungere un pizzico di sfida a questo esercizio, ho voluto implementare un ipotetico servizio "Express" che consentirebbe all'utente di raggiungere mete fino a 500km dalla stazione di partenza.
L'idea è arrivata dal voler implementare a tutti i costi l'input range per il form KM che nonostante per me sia stata una sfida, riconosco che per il tipo di valore (Float) che mi aspetto, non è ottimale scegliere un input range.. tuttavia sarebbe stato più "carino visivamente" anche se per niente funzionale.
In ogni caso la scelta di aggiungere express era perché l'input range con un max di 999 (o in generale numeri alti) non avrebbe consentito all'utente di scegliere in modo preciso i KM da fare, pertanto ho dovuto limitare l'input range ad un max di 200 con step 5 (servizio base) mentre attivando express si arriva fino a 500 (con step 15).

##Cosa comporta Express attivo 
Innazitutto l'input range viene esteso a 500km con step 15, l'idea è anche quella di aumentare il prezzo del ticket a 0.35cent * km rendendo ancora più divertente questo esercizio.

#Responsive
La User-Interface è stata realizzata con Bootstrap 5.3, ho cercato di rendere il layout completamente responsive utilizzando i breakpoints corretti per ogni dispositivo. Testato e ritestato, dovrebbe vedersi bene su ogni dispositivo! (Ammetto che non è stato facile..da fanatico di Tailwind è stato un duro colpo abituarsi a scrivere le classi per Bootstrap!!)