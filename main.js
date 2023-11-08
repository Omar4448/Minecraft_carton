mundo = new fabric.Canvas("mundo")
var X = 400
var Y = 325
var tamaño = 30
var jugador = ""
var bloque = ""
function dibujarJugador() {
    mundo.remove(jugador)
    fabric.Image.fromURL("./imagenes/Steve.webp", function (IMG) {
        jugador = IMG
        jugador.scaleToWidth(50)
        jugador.scaleToHeight(70)
        jugador.set({
            top: Y, left: X
        })
        mundo.add(jugador)
    })


}
function dibujarBloque(tipoBloque) {
    fabric.Image.fromURL(tipoBloque, function (IMG) {
        bloque = IMG
        bloque.scaleToWidth(tamaño)
        bloque.scaleToHeight(tamaño)
        bloque.set({
            top: Y, left: X
        })
        mundo.add(bloque)
    })
}
window.addEventListener("keydown", mover)

function mover(tecla) {
    console.log(tecla)
    codigo = tecla.keyCode
    if (codigo == "39" && X < 800) {
        X = X + tamaño;
        mundo.remove(jugador)
        dibujarJugador();
    }
    if (codigo == "37" && X > 0) {
        X = X - tamaño;
        mundo.remove(jugador)
        dibujarJugador();
    }
    if (codigo == "38" && Y > 0) {
        Y = Y - tamaño; mundo.remove(jugador)
        dibujarJugador();
    }
    if (codigo == "40" && Y < 650) {
        Y = Y + tamaño; mundo.remove(jugador)
        dibujarJugador();
    }
    console.log(X+","+Y)
    if (codigo == "49") {
        dibujarBloque("Imagenes/Pasto.jpg")
        
    }
    if (codigo == "50") {
        dibujarBloque("Imagenes/Tierra.jpg")

    }
    if (codigo == "51") {
        dibujarBloque("Imagenes/Tronco.jpg")
        
    }
    if (codigo == "52") {
        dibujarBloque("Imagenes/Tablon.jpg")

    }
    if (codigo == "53") {
        dibujarBloque("Imagenes/Piedra.jpg")

    }
    if (codigo == "54") {
        dibujarBloque("Imagenes/Cobble.webp")

    }
    if (codigo == "55") {
        dibujarBloque("Imagenes/Rosa.png")

    }
    if (codigo == "56") {
        dibujarBloque("Imagenes/Vidrio.webp")

    }

}

function cambiar_escala(){
    tamaño = Number(document.getElementById("escala").value)
    document.getElementById("span").innerHTML = tamaño
}

