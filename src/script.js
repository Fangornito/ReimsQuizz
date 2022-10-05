
let playername = "";
const valeur = document.querySelector("#playername");
valeur.addEventListener("change", function (event) {
    playername = event.target.value;
    const change = document.querySelector(".textlastpage");
    change.innerText = `félicitations ${playername} voici ton score :`;
});

