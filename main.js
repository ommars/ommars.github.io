let tema = document.getElementById("theme");
let boton = document.getElementById("trigger");
console.log(boton.innerHTML)

boton.addEventListener("click", function cambiarTema() {
    if (tema.getAttribute("href") == "./styles-day.css" ){
        tema.href = "./styles-night.css"
        boton.innerText = "Day";
    }else{
        tema.href="./styles-day.css"
        boton.innerText = "Night";

    }
});