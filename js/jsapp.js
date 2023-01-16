let nombreUsuario="SistemaJogam"

console.log(`Bienvenido

${nombreUsuario.toUpperCase()}
`)

//${() ? true: false

let estado=true

console.log(`

${estado ? "en linea" : "off line"}
`)
const gato={
    nombre:"Valiente",
    duerme:true,
    edad:10,
    enemigos:["agua","perros"]
}

console.log(gato)

const h1=document.getElementById("tituloWeb")
const boton=document.querySelector(".btn-primary")

boton.addEventListener("click",() =>{
    console.log("Presionó Botón");
    h1.textContent="Texto JS";
    h1.style.color="red";
})