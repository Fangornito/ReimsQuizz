let playername = "";
const valeur = document.querySelector("#playername");
valeur.addEventListener("change", function (event) {
    playername = event.target.value;
    const change = document.querySelector(".textlastpage");
    change.innerText = `félicitations ${playername} voici ton score :`;
});




const validButtons = document.querySelectorAll(".valid-button")
validButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const inputs = document.querySelectorAll(`input[name=${button.dataset.input}`)
        inputs.forEach((input) => {
            input.classList.add(input.dataset.response);
        })
    })
})

