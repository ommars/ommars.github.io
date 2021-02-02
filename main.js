let tema = document.getElementById("theme");
let boton = document.getElementById("trigger");
let xD = document.getElementById("menuL");

boton.addEventListener("click", function cambiarTema() {
    if (tema.getAttribute("href") == "./styles-day.css" ){
        tema.href = "./styles-night.css"
        boton.innerText = "Day";
    }else{
        tema.href="./styles-day.css"
        boton.innerText = "Night";

    }
});

xD.addEventListener("click", function cambiarIcon() {
    if(xD.innerHTML == " ☰ "){
        xD.innerHTML = " ✖ "
    } else {
        xD.innerHTML = " ☰ "
    }
});