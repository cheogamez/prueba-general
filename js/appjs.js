const inputColor = document.querySelector ("#inputColor")
const btnVisualizar = document.querySelector ("#btnVisualizar")
const parafoExa = document.querySelector ("#parafoExa")
const cardColor = document.querySelector ("#inputColor")

btnVisualizar.addEventListener("click",() =>{
    console.log("Me diste Click");
    console.log(inputColor.value);
    console.log(cardColor.style.backgroundColor);
    parafoExa.textContent=inputColor.value;
    cardColor.style.backgroundColor=inputColor.value
})