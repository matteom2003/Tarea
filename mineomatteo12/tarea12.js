let tabla = document.querySelector("#tabla");
let ambitos = []

function addHeaders() {
  let fila = document.createElement("tr");
  let enc1 = document.createElement("th");
  enc1.innerHTML = "Materia";
  let enc2 = document.createElement("th");
  enc2.innerHTML = "Descripción";
  let enc3 = document.createElement("th");
  enc3.innerHTML = "Fecha";

  fila.appendChild(enc1);
  fila.appendChild(enc2);
  fila.appendChild(enc3);
  tabla.appendChild(fila);
}
function hacerTabla() {
  tabla.innerHTML = "";
  addHeaders();
  let amb = ambitos.length/3
  let amb1 = ambitos.length - 3
    for(var i = 0 ; i < amb  ; i++) {
    let fila = document.createElement("tr");
    let tdMateria = document.createElement("td");
    tdMateria.innerHTML = ambitos[amb1]; 
    let tdDescripcion = document.createElement("td");
    tdDescripcion.innerHTML = ambitos[amb1+1]; 
    let tdFecha = document.createElement("td");
    tdFecha.innerHTML = ambitos[amb1+2]; 
    amb1 = amb1 -3 
   
  
    
    fila.appendChild(tdMateria);
    fila.appendChild(tdDescripcion);
    fila.appendChild(tdFecha); 
    tabla.appendChild(fila);
   
  
 }
}
let inputdesc = document.querySelector("#inputdesc");

let inputfec = document.querySelector("#inputfec");
let addfec = document.querySelector("#addfec");

function addItemt() {
  let item = inputmat.value;
  ambitos.push(item)
  let item1 = inputdesc.value;
  ambitos.push(item1)
  let item2 = inputfec.value;
  ambitos.push(item2)
  //ambitos = [item, item1, item2]
    hacerTabla();
  
  inputmat.value = "";
  inputdesc.value = "";
  inputfec.value = "";
}

addfec.onclick = addItemt;

hacerTabla();

