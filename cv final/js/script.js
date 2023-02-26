//Script para el boton de MOSTRAR y OCULTAR-->
      //ocultar elementos: el titulo h2
  document.getElementById("boton_ocultar_inf-per").addEventListener(
    "click",function(){
        console.log("prueba ocultar") //si aparece en la consola entonces el programa llegó hasta aca
    document.getElementById("lista_inf-per").style.display= "none";
    })
 //mostrar elementos: el titulo h2
 document.getElementById("boton_mostrar_inf-per").addEventListener(
  "click",function(){
    console.log("prueba mostrar") //si aparece en la consola entonces el programa llegó hasta aca
  document.getElementById("lista_inf-per").style.display="initial";
  })


       //ocultar elementos: Experiencia laboral
       document.getElementById("boton_ocultar_exp-lab").addEventListener(
        "click",function(){
            console.log("prueba ocultar") //si aparece en la consola entonces el programa llegó hasta aca
        document.getElementById("lista_exp-lab").style.display= "none";
        })
     //mostrar elementos: el titulo h2
     document.getElementById("boton_mostrar_exp-lab").addEventListener(
      "click",function(){
        console.log("prueba mostrar") //si aparece en la consola entonces el programa llegó hasta aca
      document.getElementById("lista_exp-lab").style.display="initial";
      
   s   })  