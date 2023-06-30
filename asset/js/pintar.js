//esta funcion aca abajo , es la que hay que transformar:1.anonima
//.2 color como argumento(por defecto : (green)


/*function pintar(){
    ele = document.getElementById("ele1")
    ele.style.backgroundColor = 'yellow'
    }
    ele = document.getElementById("ele1")
    ele.addEventListener("click", pintar());*/




let presionar = document.querySelector("#ele1")


//funcion anonima
/*presionar.addEventListener("click", function() {
   
    presionar.style.backgroundColor = 'yellow'
    })*/


//color como argumento(por defecto : green)
   function pintar (color = "green"){
    presionar.style.backgroundColor = color
    
}

pintar ()

//al llamar a la funcion , pasamos como argumento, la funcion anonima

presionar.addEventListener("click", function(){ 
    
    presionar.style.backgroundColor = 'yellow'
 })

 //nota:descomentar para ver la funcionalidad en ambas funciones