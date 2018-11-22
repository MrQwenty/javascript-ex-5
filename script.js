
// //Creare un oggetto che descriva uno studente con le
// seguenti proprietà: nome, cognome e età. Stampare a
// schermo attraverso il for in tutte le proprietà.//

var studente = {
  'nome': "Matteo",
  'cognome': "Pelosi",
  'età': 27
};

for (var field in studente) {
  console.log(studente[field])
};



// //Creare un array di oggetti di studenti. Ciclare su tutti gli
// studenti e stampare per ognuno nome e cognome.

var studenti = [
  {
    'nome': "Matteo",
    'cognome': "Pelosi"
  },
  {
    'nome': "Marco",
    'cognome': "Lorenzi"
  },
  {
    'nome': "Luca",
    'cognome': "Rossi"
  },
  {
    'nome': "Andrea",
    'cognome': "Bianchi"
  }
];

for (var i = 0; i < studenti.length; i++) {
  console.log(studenti[i])
};


// Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo
// nell’ordine: nome, cognome e età.

var studente = {
  'nome': "Matteo",
  'cognome': "Pelosi",
  'età': 27
};

var nuovo_nome = prompt('inserisci il nome');

    studente.nome = nuovo_nome;

var nuovo_cognome = prompt('inserisci il cognome');

    studente.cognome = nuovo_cognome;

var nuovo_età = prompt("inserisci l'età");

    studente.età = nuovo_età;

console.log(studente);
