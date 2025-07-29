// Dati dei personaggi
const data = {
    ang:   { img: "avatars/avatar.png", nome: "ang", pt: "aura" },
    bisi:  { img: "avatars/bisi.png", nome: "bisi", pt: "gay" },
    gab:   { img: "avatars/gab.png", nome: "gab", pt: "sbrslm" },
    zacca: { img: "avatars/zacca.png", nome: "zacca", pt: "cacca" },
    mamu:  { img: "avatars/mamu.png", nome: "mamu", pt: "real gay" },
    tolo: { img: "avatars/tolo.png", nome: "tolo", pt: "tologang" }
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