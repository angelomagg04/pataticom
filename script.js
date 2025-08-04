// Dati dei personaggi
const data = {
    ang:   { img: "avatars/avatar.png", nome: "ang", pt: "aura" },
    bisi:  { img: "avatars/bisi.png", nome: "bisi", pt: "gay" },
    gab:   { img: "avatars/gab.png", nome: "gab", pt: "sbrslm" },
    zacca: { img: "avatars/zacca.png", nome: "zacca", pt: "cacca" },
    mamu:  { img: "avatars/mamu.png", nome: "mamu", pt: "real gay" },
    tolo: { img: "avatars/tolo.png", nome: "tolo", pt: "tologang" },
};

// Prendi parametro dall'URL
const params = new URLSearchParams(window.location.search);
const nome = params.get("nome");

// Se il personaggio esiste, mostra i dati
if (data[nome]) {
    document.getElementById("avatar").src = data[nome].img;
    document.getElementById("nametag").textContent = data[nome].nome;
    document.getElementById("points").textContent = "pt: " + data[nome].pt;
} else {
    document.getElementById("nametag").textContent = "Personaggio non trovato";
    document.getElementById("avatar").style.display = "none";
    document.getElementById("points").style.display = "none";
}

if (window.innerWidth >= 992) {
  // Ad esempio, reindirizza a una pagina desktop
  window.location.href = "desktop.html";
}

//bonus e malus
const bonus = [
  { sfida: "Guardare l'alba dopo aver fatto una serata", punteggio: 5 },
  { sfida: "Fare il bagno di notte", punteggio: 20 },
  { sfida: "Avvistare una stella cadente", punteggio: 10 },
  { sfida: "Lasciarsi con la propria ragazza", punteggio: 200 },
  { sfida: "Farsi dare l'instagram da una tipa", punteggio: 20 },  
  { sfida: "Farsi una foto con una celebrità", punteggio: 50 },
  { sfida: "Mangiare un kebab alle 3 di notte", punteggio: 20 },
  { sfida: "Fare un aperitivo in spiaggia", punteggio: 10 },
  { sfida: "Buttarsi in mare vestiti", punteggio: 30 },
  { sfida: "Farsi un tatuaggio", punteggio: 50 },
  { sfida: "Fare 3 after di fila", punteggio: 100 },
  { sfida: "Fare/partecipare a un video virale sui social", punteggio: 50 }
];

const malus = [
  { sfida: "Scottarsi al sole", punteggio: -30 },
  { sfida: "Fidanzarsi", punteggio: -50 },
  { sfida: "Ricevere un palo da un/una ragazz*", punteggio: -40 },
  { sfida: "Non fare after e addormentarsi", punteggio: -30 },
  { sfida: "Essere cacciati dai buttafuori", punteggio: -30 },
  { sfida: "Rimanere senza voce", punteggio: -40 },
  { sfida: "Puntura di medusa", punteggio: -15 },
  { sfida: "Pallonata in faccia", punteggio: -15 },
  { sfida: "Perdere l'aereo/treno", punteggio: -50 },
  { sfida: "Smarrire la valigia", punteggio: -40 },
  { sfida: "Perdere i documenti", punteggio: -100 },
  { sfida: "Perdere il telefono", punteggio: -80 },
  { sfida: "Ammalarsi", punteggio: -100 }
];