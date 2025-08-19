// Funzione globale per aggiornare i punteggi di tutti i personaggi
window.aggiornaPunteggi = function() {
    const tutteLeSfide = [...bonus, ...malus];
    Object.values(data).forEach(personaggio => {
        let punteggioTotale = 0;
        (personaggio.sfideCompletate || []).forEach(id => {
            const sfida = tutteLeSfide.find(item => item.id === id);
            if (sfida) punteggioTotale += sfida.punteggio;
        });
        personaggio.pt = punteggioTotale;
    });
    data.ang.pt += 50;
};

//bonus e malus
const bonus = [
    { id: 0, sfida: "Guardare l'alba dopo aver fatto una serata", punteggio: 5 },
    { id: 1, sfida: "Fare il bagno di notte", punteggio: 20 },
    { id: 2, sfida: "Avvistare una stella cadente", punteggio: 10 },
    { id: 3, sfida: "Lasciarsi con la propria ragazza", punteggio: 200 },
    { id: 4, sfida: "Farsi dare l'instagram da una tipa", punteggio: 20 },
    { id: 5, sfida: "Farsi una foto con una celebrita'", punteggio: 50 },
    { id: 6, sfida: "Mangiare un kebab alle 3 di notte", punteggio: 20 },
    { id: 7, sfida: "Fare un aperitivo in spiaggia", punteggio: 10 },
    { id: 8, sfida: "Buttarsi in mare vestiti", punteggio: 30 },
    { id: 9, sfida: "Farsi un tatuaggio", punteggio: 50 },
    { id: 10, sfida: "Fare 3 after di fila", punteggio: 100 },
    { id: 11, sfida: "Fare/partecipare a un video virale sui social", punteggio: 50 }
];

const malus = [
    { id: 12, sfida: "Scottarsi al sole", punteggio: -30 },
    { id: 13, sfida: "Fidanzarsi", punteggio: -50 },
    { id: 14, sfida: "Ricevere un palo da una ragazza", punteggio: -40 },
    { id: 15, sfida: "Non fare after e addormentarsi", punteggio: -30 },
    { id: 16, sfida: "Essere cacciati dai buttafuori", punteggio: -30 },
    { id: 17, sfida: "Rimanere senza voce", punteggio: -40 },
    { id: 18, sfida: "Puntura di medusa", punteggio: -15 },
    { id: 19, sfida: "Pallonata in faccia", punteggio: -15 },
    { id: 20, sfida: "Perdere l'aereo/treno", punteggio: -50 },
    { id: 21, sfida: "Smarrire la valigia", punteggio: -40 },
    { id: 22, sfida: "Perdere i documenti", punteggio: -100 },
    { id: 23, sfida: "Perdere il telefono", punteggio: -80 },
    { id: 24, sfida: "Ammalarsi", punteggio: -100 }
];

// Dati dei personaggi
const data = {
    ang: { img: "avatars/avatar.png", nome: "ang", pt: 50, sfideCompletate: [6,0,1] },
    bisi: { img: "avatars/bisi.png", nome: "bisi", pt: 0, sfideCompletate: [1,2,0,4] },
    gab: { img: "avatars/gab.png", nome: "gab", pt: 0, sfideCompletate: [6,0,1] },
    zacca: { img: "avatars/zacca.png", nome: "zacca", pt: 0, sfideCompletate: [6,1,0,8,2] },
    mamu: { img: "avatars/mamu.png", nome: "mamu", pt: 0, sfideCompletate: [1,8,2,7] },
    tolo: { img: "avatars/tolo.png", nome: "tolo", pt: 0, sfideCompletate: [2] },
};

// Prendi parametro dall'URL
const params = new URLSearchParams(window.location.search);
const nome = params.get("nome");

// Se il personaggio esiste, mostra i dati

if (data[nome]) {
    document.getElementById("avatar").src = data[nome].img;
    document.getElementById("nametag").textContent = data[nome].nome;

    // Calcola il punteggio totale sommando i punteggi delle sfide completate
    const tutteLeSfide = [...bonus, ...malus];
    const completate = data[nome].sfideCompletate || [];
    let punteggioTotale = data[nome].pt;
    completate.forEach(id => {
        const sfida = tutteLeSfide.find(item => item.id === id);
        if (sfida) punteggioTotale += sfida.punteggio;
    });
    data[nome].pt = punteggioTotale; // aggiorna il dato pt
    document.getElementById("points").textContent = "pt: " + punteggioTotale;

    // Mostra elenco di tutte le sfide (bonus e malus), con check a sinistra se completate
    const ul = document.createElement("ul");
    ul.style.listStyle = "none";
    ul.style.paddingLeft = "0";
    tutteLeSfide.forEach(item => {
        const li = document.createElement("li");
        li.style.display = "flex";
        li.style.alignItems = "center";
        li.style.marginBottom = "0.3em";

        // Check
        const check = document.createElement("span");
        check.style.width = "1.5em";
        check.style.display = "inline-block";
        check.style.textAlign = "center";
        check.style.fontWeight = "bold";
        check.style.margin = "4px";
        if (completate.includes(item.id)) {
            check.textContent = "✅";
        } else {
            check.textContent = "⏹️";
        }
        li.appendChild(check);

        // Testo sfida
        const testo = document.createElement("span");
        testo.textContent = item.sfida + " ";
        testo.style.color = "#4f4f4f";
        li.appendChild(testo);

        // Punteggio
        const punti = document.createElement("span");
        punti.textContent = (item.punteggio > 0 ? "+" : "") + item.punteggio + "pt";
        punti.style.marginLeft = "auto";
        punti.style.fontWeight = "bold";
        punti.style.color = item.punteggio > 0 ? "#28a745" : "#dc3545";
        li.appendChild(punti);

        ul.appendChild(li);
    });
    // Inserisci un titolo sopra la lista
    const titoloSfide = document.createElement("div");
    titoloSfide.textContent = "Elenco completo delle sfide:";
    titoloSfide.style.fontWeight = "bold";
    titoloSfide.style.marginTop = "1em";
    titoloSfide.style.marginBottom = "0.5em";
    const sfideTitle = document.querySelector(".sfida.mt-4");
    if (sfideTitle) {
        sfideTitle.insertAdjacentElement("afterend", ul);
        sfideTitle.insertAdjacentElement("afterend", titoloSfide);
    } else {
        document.body.appendChild(titoloSfide);
        document.body.appendChild(ul);
    }
} else {
    document.getElementById("nametag").textContent = "Personaggio non trovato";
    document.getElementById("avatar").style.display = "none";
    document.getElementById("points").style.display = "none";
}

if (window.innerWidth >= 992) {
    // Ad esempio, reindirizza a una pagina desktop
    window.location.href = "classifica.html";
}

