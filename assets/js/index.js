import Animales from "./Consulta.js";
import { Leon, Lobo, Oso, Serpiente, Aguila, Caballo, Foca } from "./clases/Especie.js"

// Función para generar el carrusel dinámicamente
function generarCarrusel(datos) {
  // Obtener el contenedor del carrusel
  const carouselInner = document.querySelector('.carousel-inner');
  
  // Limpiar el contenedor por si tiene contenido previo
  carouselInner.innerHTML = '';
  
  // Iterar sobre los datos de los animales
  datos.animales.forEach((animal, index) => {
      // Crear el elemento div para el item del carrusel
      const carouselItem = document.createElement('div');
      carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
      
      // Crear la imagen
      const img = document.createElement('img');
      img.src = `assets/imgs/${animal.imagen}`;
      img.className = 'd-block carousel-image';
      img.alt = animal.name;
      img.onclick = () => llamarAnimal(animal.name);
      
      // Agregar la imagen al item del carrusel
      carouselItem.appendChild(img);
      
      // Agregar el item al contenedor del carrusel
      carouselInner.appendChild(carouselItem);
  });
}

fetch('./animales.json')
  .then(response => response.json())
  .then(data => {
      generarCarrusel(data);
  })
  .catch(error => console.error('Error cargando los datos:', error));


let arrAnimales = [];

window.llamarAnimal = (async (a) => {
  const { animales } = await Animales.getData();
  const especie = a;
  const edad = animales.find((e) => e.name == especie).edad;
  const comentarioEdad = animales.find((e) => e.name == especie).comentarioEdad;
  const comentarios = animales.find((e) => e.name == especie).comentario + ' ' + comentarioEdad;
  const imagen = animales.find((e) => e.name == especie).imagen;
  const sonido = animales.find((e) => e.name == especie).sonido;
  let nuevoAnimal;


  const constructores = {
    'Serpiente': Serpiente,
    'Leon': Leon,
    'Oso': Oso,
    'Aguila': Aguila,
    'Lobo': Lobo,
    'Foca': Foca,
    'Caballo': Caballo
  };
  
  // Usar el mapa para obtener el constructor correcto
  const Constructor = constructores[especie];
  nuevoAnimal = new Constructor(especie, edad, imagen, comentarios, sonido);

  if (especie && edad && comentarios) {
    arrAnimales.push(nuevoAnimal);
    cargarTablaSalvaje();
  } else {
    alert("Datos incompletos")
  }
});

// const cargarTablaSalvaje = () => {
//   document.getElementById("Animales").innerHTML = "";
//   arrAnimales.forEach((p, i) => {
//     document.getElementById("Animales").innerHTML += `
//       <div class="card text-center col-12 col-sm-2 card-body" style="height: 290px">
//         <img src="assets/imgs/${p.getImg()}" onclick="animalModal('${i}')" data-toggle="modal" data-target="#exampleModal" class="card-img-top">
//         <div class="card-body">
//             <button onclick="playSound('${i}')" class="btn btn-secondary w-100"> <img height="30" src="assets/imgs/audio.svg" /> </button>
//             <button onclick="eliminarAnimal('${i}')" class="btn btn-danger w-100 mt-2">Eliminar</button>
//           </div>
//       </div>
//     `;
//   })
// };
const cargarTablaSalvaje = () => {
  const contenedor = document.getElementById("Animales");
  contenedor.innerHTML = "";
  arrAnimales.forEach((p, i) => {
    const cardDiv = document.createElement('div');
    cardDiv.className = "card text-center";
    cardDiv.style.width = "200px";
    cardDiv.innerHTML = `
      <img src="assets/imgs/${p.getImg()}" 
           onclick="animalModal('${i}')" 
           data-toggle="modal" 
           data-target="#exampleModal" 
           class="card-img-top"
           style="height: 150px; object-fit: cover;">
      <div class="card-body d-flex flex-column justify-content-end">
        <button onclick="playSound('${i}')" class="btn btn-secondary w-100 mb-2">
          <img height="30" src="assets/imgs/audio.svg" />
        </button>
        <button onclick="eliminarAnimal('${i}')" class="btn btn-danger w-100">
          Quitar
        </button>
      </div>
    `;
    contenedor.appendChild(cardDiv);
  });
};

window.playSound = (i) => {
  const salvaje = arrAnimales[i]
  let sound = salvaje.getNombre()+'sonido';
  salvaje[sound]();
    cargarTablaSalvaje();
}

window.animalModal = (i) => {
  const animalSalvaje = arrAnimales[i];
  document.getElementsByClassName("modal-body")[0].innerHTML = `
  <div class="px-3 pb-2">
  <div class="card text-white w-100">
    <img src="assets/imgs/${animalSalvaje.getImg()}" class="card-img-top">
    <div class="card-body bg-dark">
      <h4 class="card-title">${animalSalvaje.getNombre()}</h4>
      <hr class="w-50 mx-auto">
      <h6 class="card-text">Edad máxima de vida: ${animalSalvaje.getEdad()}</h6>
      <h6 class="card-text">Comentario: ${animalSalvaje.getComentarios()}</h6>
      </div>
  </div>
</div>
  `
};

window.eliminarAnimal = (i) => {
  arrAnimales.splice(i, 1);
  cargarTablaSalvaje();
}

let animales = (() => {
  const url = './animales.json';
  try {
    const getData = async () => {
      const res = await fetch(url)
      const data = await res.json()
      return data
    }
    return { getData }
  }
  catch (error) {
    console.log(error)
  }
})();

export default animales;
