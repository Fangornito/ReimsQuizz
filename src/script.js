const validButtons = document.querySelectorAll(".valid-button")
validButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const inputs = document.querySelectorAll(`input[name=${button.dataset.input}`)
        inputs.forEach((input) => {
            input.classList.add(input.dataset.response);
        })
    })
})
