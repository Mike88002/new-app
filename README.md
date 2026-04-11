## Quando usare @ContentChild e @ContentChildren
quando devo accedere ad elementi in altri componenti che usano il tag <ng-content>

--
si possono usare i metodi contentChild<>() in alternativa, assegnandoli ad una variabile


## Quandousare @ViewChild e @ViewChildren
quando devo accedere ad elementi che si trovano nello stesso componente dove sto facendo cose.


## ngAfterContentInit
serve per accedere al contenuto senza considerare se uso la contentchild function o il decorator. Con ngafterviewinit posso accedere 
al contenuto solo per i decoratori.

## after render
legge tutti i future changes, quindi viene eseguito piu spesso di afternextrender(), entrambe vanno messe nel constructor.

## effect function
funzione eseguibile nel constructor, con callback, dove puoi passare un signal, e questo gli permette di sottoscriversi. angular cosi setta
una sottoscrizione. è una funzione importante perchè fa runnare codice quando i valori dei segnali servono e cambiano.
onCleanup
 hook which you can execute as part of your effect function to define what should happen before the effect code runs the next time: