// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//Agrega un nuevo amigo al array de amigos. 
// Valida que el nombre no esté vacío antes de agregarlo y actualiza la lista visual.

function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value;

  if (nombreAmigo.trim() === "") {
    alert("Por favor, inserte un nombre");
  } else {
    amigos.push(nombreAmigo);
    document.querySelector("#amigo").value = "";
    mostrarListaAmigo();
  }
}
// se utilizó .trim para quitar espacios antes y despues de el nombre

 // Actualiza la visualización de la lista de amigos en el DOM, creando elementos <li> para cada amigo.
 
 function mostrarListaAmigo() {
  let listaAmigos = document.querySelector("#listaAmigos");
  listaAmigos.innerHTML = "";

  for (let index = 0; index < amigos.length; index++) {
    const element = amigos[index];

    let listaHTML = document.createElement("li");
    listaHTML.textContent = element;
    listaAmigos.appendChild(listaHTML);
  }
}

// Sortea  un amigo de la lista de amigos de manera aleatoria.
// Verifica que la lista no se encuentre vacía.

function sortearAmigo() {
  let cantidadAmigos = amigos.length;
  if (cantidadAmigos === 0) {
    alert("Inserte un nombre para sortear");
  } else {
    let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
    let resultadoHTML = document.querySelector("#resultado");
    resultadoHTML.innerHTML = amigos[indiceAmigo];
  }
}

function reiniciarLista() {
  amigos = []; // Vaciar el array de amigos
  mostrarListaAmigo(); // Actualizar la lista visual, que ahora estará vacía
  document.querySelector("#resultado").innerHTML = ""; // Limpiar el resultado del sorteo
}