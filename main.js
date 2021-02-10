let xD = document.getElementById("menuL");

xD.addEventListener("click", function cambiarIcon() {
    if(xD.innerHTML == " ☰ "){
        xD.innerHTML = " ✖ "
    } else {
        xD.innerHTML = " ☰ "
    }
});