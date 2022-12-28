const teclas = document.querySelectorAll(".oitava > div")

function desmarcar(tecla) {
    console.log("desmarcar")
}

teclas.forEach(function(tecla) {
    tecla.onmousedown = function() {
        console.log("marcar")
    }

    tecla.onmouseup = () => desmarcar(tecla)
    tecla.onmouseleave = () => desmarcar(tecla)
})