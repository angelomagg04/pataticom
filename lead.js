
// Aggiorna i punteggi prima di generare la classifica
if (window.aggiornaPunteggi) window.aggiornaPunteggi();

const classificaDiv = document.getElementById("classifica");
const classificaArr = Object.values(data).map(u => ({
    nome: u.nome,
    img: u.img,
    pt: u.pt
}));
classificaArr.sort((a, b) => b.pt - a.pt);

const colors = ["#ffae00ff", "#C0C0C0", "#CD7F32", "#4f4f4f", "#4f4f4f", "#4f4f4f"];
let html = '<ul class="" style="padding:0;list-style:none;">';
classificaArr.forEach((u, i) => {
    const color = colors[i % colors.length];
    html += `<li class="d-flex align-items-center" style="display:flex;align-items:center;padding:0.7em 0.5em;">
        <span style="font-size:1.3em;width:2em;text-align:center;font-weight:bold;color:${color};">${i+1}</span>
        <img src="${u.img}" alt="${u.nome}" style="height:2.5em;width:2.5em;object-fit:cover;margin-right:1em;">
        <span style="font-weight:600;font-size:1.1em;color:#333;flex:1;">${u.nome}</span>
        <span style="font-size:1.1em;font-weight:bold;color:#28a745;">${u.pt} pt</span>
    </li>`;
});
html += '</ul>';
classificaDiv.innerHTML = html;

const punteggioAng = window.data.ang.pt;