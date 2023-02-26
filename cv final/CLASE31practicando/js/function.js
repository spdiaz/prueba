//script en el head para usar en el h2 "Demo JS in Head"
    
document.getElementById("boton").onclick = function() {
    console.log("capturamos el evento click");
          document.getElementById("demo").innerHTML = "cambiando párrafo.";
        }        