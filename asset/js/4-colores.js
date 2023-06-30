let color_a = document.querySelector("#azul");
let color_b = document.querySelector("#rojo");
let color_c = document.querySelector("#verde");
let color_d = document.querySelector("#amarillo");
let cambiar_key = document.querySelector("#key");

function pintar(color) {
  color.target.style.backgroundColor = "black";
}
color_a.addEventListener("click", pintar);
color_b.addEventListener("click", pintar);
color_c.addEventListener("click", pintar);
color_d.addEventListener("click", pintar);

function creardiv(color) {
  let DivNuevo = document.createElement("div");
  DivNuevo.style.backgroundColor = "200px";
  document.body.appendChild(DivNuevo);
  DivNuevo.style.backgroundColor = color;
  DivNuevo.style.width = "200px";
  DivNuevo.style.height = "200px";
  DivNuevo.style.border = "solid 1px blue";
  DivNuevo.style.margin = "1rem";
}

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    cambiar_key.style.backgroundColor = "blue";
  }

  if (event.key === "b") {
    cambiar_key.style.backgroundColor = "orange";
  } else if (event.key === "c") {
    cambiar_key.style.backgroundColor = "pink";
  } else if (event.key === "d") {
    creardiv("purple");
  } else if (event.key === "e") {
    creardiv("gray");
  } else if (event.key === "f") {
    creardiv("green");
  }
});



/*let presionar = document.querySelector("#rojo");
let cambiar = document.querySelector("#key");


//pintar el div rojo a negro
function pintar(color) {
 
  presionar.style.backgroundColor = color;
}
presionar.addEventListener("click", function () {
  pintar("black");
});

//pintar de colores el div blanco con bordes negros
//al presionar una tecla
document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    cambiar.style.backgroundColor = "blue";
    
  }
  if (event.key === "b") {
    cambiar.style.backgroundColor = "orange";
  } else if (event.key === "c") {
    cambiar.style.backgroundColor = "pink";
  }
});

//crear un nuevo div con las mismas caracteristicas
//al presionar una tecla se pinte de colores
function crearDiv(color) {
  let nuevoDiv = document.createElement("div");
  document.body.appendChild(nuevoDiv)
  nuevoDiv.style.backgroundColor= color
  nuevoDiv.style.width = "200px";
  nuevoDiv.style.height = "200px";
  nuevoDiv.style.border = "solid 1px blue";
  nuevoDiv.style.margin = "1rem"
}

document.addEventListener("keydown", function (event) {
  if (event.key === "d") {
   
    crearDiv( "green")
  }
  else if (event.key === "e") {
    
    crearDiv( "black")
  } 
  else if (event.key === "f") {
    
    crearDiv( "salmon")
  }

  else{
    crearDiv("chocolate")
  }
});*/
