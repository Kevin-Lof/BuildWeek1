
# Quiz Game BuildWeek1

Questo è un semplice quiz che mette alla prova le tue conoscenze sulla programmazione. Il quiz può essere eseguito selezionando risposte multiple o risposte vero/falso. All'utente viene assegnato un punto per ogni risposta corretta, e alla fine del quiz, viene mostrato il punteggio totale in percentuale di corette e sbagliate.

## Caratteristiche principali

Il progetto è diviso in 4 file HTML, 4 file JavaScript e un file CSS.
Nella prima pagina HTML denominata 'index.html', è contenuto il testo introduttivo con una check-box da spuntare come condizione per iniziare il quiz, seguito dal tasto 'proceed' che crea un collegamento diretto al test vero e proprio. 
La seconda pagina HTML, denominata 'benchmark.html' presenta il vero e proprio corpo del progetto: è strutturata con un timer situato in alto a destra, dalla trascrizione della domanda, da 2 o 4 button contenenti le eventuali risposte, un button 'proceed' di invio domanda che porta alla domanda successiva e un footer contenente il conteggio delle domande fatte su domande totali del test. Il timer indica il tempo rimanente per rispondere alla domanda ed è settato a 30 secondi. Nel caso l'utente non facesse in tempo di rispondere alla domanda prima dello scadere del tempo, il timer farà comunque partire la prossima domanda facendo contare la domanda a cui l'utente non ha risposto come sbagliata. Finite le 10 domande, scaduto il tempo o premuto il pulsante 'proceed', si accederà alla terza pagina, 'result.html'. Questa mostrerà la percentuale di risposte corrette e risposte errate, mostrando se il test è passato o meno. Un tasto 'rate us' porterà alla quarta pagina, denominata 'feedback.html', che chiederà all'utente di lasciare un voto (da 1 a 10 stars) e un feedback testuale. Lasciato il feedback e premuto il tasto 'more info' comparirà un ringraziamento e un pulsante che consentirà di ricominciare il test.

## Funzionalità Principali

- **Domande:** Le domande del quiz sono tutte sulla programmazione e servono a verificare le proprie conoscenze nel ambito del coding 
- **Risposte Multiple o Vero/Falso:** Le domande sono suddivise in due sotto tipi, risposte multiple che prevedono 4 possibili risposte tra qui solo una è quella giusta e vero/falso che prevedono invece solo 2 possibilità di risposta. 
- **Visualizzazione del Punteggio:** Alla fine del quiz viene visualizzato il punteggio totalizzato dal utente in base alle domande giuste e sbagliate, il punteggio è visualizzato in percentuale.

## Come Giocare

1. Apri il gioco nel tuo browser preferito.
2. Leggi attentamente la domanda presentata e seleziona la risposta che ritieni corretta.
3. Seleziona "PROCEED" per confermare la tua risposta.
4. Alla fine del quiz, verrà visualizzato il punteggio totale del quiz.

## Tecnologie Utilizzate

- **HTML:** Utilizzato per la struttura della pagina web.
- **CSS:** Utilizzato per lo stile e la presentazione della pagina.
- **JavaScript:** Utilizzato per la logica del gioco e l'interattività.
- **SVG (Scalable Vector Graphics)** Utilizzato per la creazione di grafica vettoriale scalabile, permettendo la rappresentazione delle stelle.
- **Chart JS** Utilizzato per il grafico a cerchio che mostra le percentuali di risposte corrette e sbagliate.


## Requisiti del Sistema

1. Sistema operativo qualsiasi
2. Browser Web, preferibilmente Google Chrome

## Installazione

1. Clonare la Repository: Utilizza il comando git clone per clonare la repository sul tuo computer locale.

2. Accedere alla Directory del Progetto: Entra nella directory del progetto appena clonato.


## Contributi

Se desideri contribuire al miglioramento del Quiz Game, sei il benvenuto! Puoi inviare suggerimenti, correzioni di bug o nuove funzionalità tramite pull request.

## Licenza

Questo progetto è distribuito sotto la licenza del gruppo 3 Corso full-stack Epicode.

### Developers
- Gabriele Scognamiglio
- Fabio Gallingani
- Pavlo Pastushenko
- Kevin Loffredi
- Enrico Cirotto
- Giulio Siena




