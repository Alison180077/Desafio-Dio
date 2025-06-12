const herois = {
  artemis: { nome: "Artemis", xp: 8750, imagem: "./src/img/artemis.png" },
  zeus: { nome: "Zeus", xp: 12000, imagem: "./src/img/zeus.png" },
  athena: { nome: "Athena", xp: 4500, imagem: "./src/img/athena.png" },
  homemDeFerro: {nome: "HomemdeFerro", xp: 8000, imagem: "./src/img/homemDeFerro.png"},
  batman: {nome: "Batman", xp: 10000, imagem: "./src/img/batman.png"}
};

const heroiSelect = document.getElementById("heroiSelect");
const heroiInfo = document.getElementById("heroiInfo");
const heroiNome = document.getElementById("heroiNome");
const heroiXp = document.getElementById("heroiXp");
const heroiNivel = document.getElementById("heroiNivel");
const heroiImg = document.getElementById("heroiImg");

heroiSelect.addEventListener("change", () => {
  const selecionado = heroiSelect.value;
  const heroi = herois[selecionado];

  if (heroi) {
    heroiInfo.classList.remove("hidden");
    heroiNome.textContent = heroi.nome;
    heroiXp.textContent = heroi.xp;
    heroiImg.src = heroi.imagem;

    // Classificar o nível
    const xp = heroi.xp;
    let nivel = "";

    if (xp < 1000) nivel = "Ferro";
    else if (xp <= 2000) nivel = "Bronze";
    else if (xp <= 5000) nivel = "Prata";
    else if (xp <= 7000) nivel = "Ouro";
    else if (xp <= 8000) nivel = "Platina";
    else if (xp <= 9000) nivel = "Ascendente";
    else if (xp <= 10000) nivel = "Imortal";
    else nivel = "Radiante";

    heroiNivel.textContent = nivel;
  }
});
