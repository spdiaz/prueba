//script en el head para usar en el h2 "Demo JS in Head"
 /*   
document.getElementById("boton").onclick = function() {
    console.log("capturamos el evento click");
          document.getElementById("demo").innerHTML = "cambiando párrafo.";
        }  
        */
        
//para hacer click en cualquier parte
/*
document.addEventListener("click",function(){
  console.log("prueba desde EventListener")
})
*/
//para hacer click en el boton que imprime en pantalla y cambia el parrafo
document.getElementById("boton").addEventListener("click",function(){
  console.log("prueba desde EventListener")

  document.getElementById("demo").innerHTML = "cambiando párrafo.";
})


//para cambiar el color de fondo
document.getElementById("boton_color").addEventListener(
  
  "click",function(){
  document.body.style.backgroundColor= "red";
  })

  //ocultar elementos: el titulo h2
  document.getElementById("boton_ocultar").addEventListener(
    "click",function(){
    document.getElementById("titulo").style.display= "none";
    })
 //mostrar elementos: el titulo h2
 document.getElementById("boton_mostrar").addEventListener(
  "click",function(){
  document.getElementById("titulo").style.display="initial";
  })
