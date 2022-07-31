import Animales from "./Consulta.js";
import { Leon, Lobo, Oso, Serpiente, Aguila } from "./clases/Especie.js"

let arrAnimales = [];

// document.getElementById("animal").addEventListener("change", async (e) => {
//   const animalSelected = e.target.value;
//   const { animales } = await Animales.getData();
//   const especieImagen = animales.find((a) => a.name == animalSelected).imagen;
//   document.getElementById("preview").innerHTML = `<img class="h-100 w-75 img-fluid" src="assets/imgs/${especieImagen}" style='object-fit: cover;'>`;
// });

document.getElementById("animal").addEventListener("change", async (e) => {
  const { animales } = await Animales.getData();
  const especie = e.target.value;
  const edad = 45;
  const comentarios = "un bonito animal";
  // console.log(edad)
  // console.log(comentarios)
  const imagen = animales.find((e) => e.name == especie).imagen
  // if (imagen) {
  //   let imgHtml = `<img class="h-100 w-75 img-fluid" src="assets/imgs/${imagen}" style='object-fit: cover;'>`
  //   document.getElementById("preview").innerHTML = imgHtml;
  //   console.log(imagen)
  // }

  const sonido = animales.find((e) => e.name == especie).sonido
  // if (sonido) {
  //   console.log(sonido)
  // }


  let nuevoAnimal;
  console.log(especie);
  if (especie == 'Leon') {
    nuevoAnimal = new Leon(especie, edad, imagen, comentarios, sonido)

  } else if (especie == 'Lobo') {
    nuevoAnimal = new Lobo(especie, edad, imagen, comentarios, sonido)

  } else if (especie == 'Oso') {
    nuevoAnimal = new Oso(especie, edad, imagen, comentarios, sonido)

  } else if (especie == 'Serpiente') {
    nuevoAnimal = new Serpiente(especie, edad, imagen, comentarios, sonido)

  } else if (especie == 'Aguila') {
    nuevoAnimal = new Aguila(especie, edad, imagen, comentarios, sonido)

  }

  if (especie && edad && comentarios) {
    console.log(nuevoAnimal);
    arrAnimales.push(nuevoAnimal);
    console.log(arrAnimales);
    cargarTablaSalvaje();
  } else {
    alert("Datos incompletos")
  }

});

const cargarTablaSalvaje = () => {
  
  document.getElementById("Animales").innerHTML = "";
  console.log(arrAnimales);
  arrAnimales.forEach((p, i) => {
    console.log(arrAnimales);
    document.getElementById("Animales").innerHTML += `

      <div class="card text-center col-12 col-sm-2 card-body" style="height: 290px">
        <img src="assets/imgs/${p.getImg()}" onclick="animalModal('${i}')" data-toggle="modal" data-target="#exampleModal" class="card-img-top">
        <div class="card-body">
            <button onclick="playSound('${i}')" class="btn btn-secondary w-100"> <img height="30" src="assets/imgs/audio.svg" /> </button>
          </div>
      </div>

    `;
  })
};

window.playSound = (i) => {
  const salvaje = arrAnimales[i]
  if (salvaje.getNombre() == 'Leon') {
    console.log(salvaje.getComentarios())
    salvaje.Rugir()
  }else if (salvaje.getNombre() == 'Lobo') {
    salvaje.Aullar()
  }else if (salvaje.getNombre() == 'Oso') {
    salvaje.Gruñir()
  }else if (salvaje.getNombre() == 'Serpiente') {
    salvaje.Sisear()
  }else if (salvaje.getNombre() == 'Aguila') {
    salvaje.Chillar()
  }else
  cargarTablaSalvaje();
}

  window.animalModal = (i) => {
  const animalSalvaje = arrAnimales[i];
  console.log(animalSalvaje)
  document.getElementsByClassName("modal-body")[0].innerHTML = `
  <div class="px-3 pb-2">
  <div class="card text-white">
    <img src="assets/imgs/${animalSalvaje.getImg()}" data-toggle="modal" data-target="#exampleModal" class="card-img-top">
    <div class="card-body bg-dark">
      <h4 class="card-title">${animalSalvaje.getNombre()}</h4>
      <hr class="w-50 mx-auto">
      <h6 class="card-text">Edad: ${animalSalvaje.getEdad()}</h6>
      <h6 class="card-text">Comentarios: ${animalSalvaje.getComentarios()}</h6>
      </div>
  </div>
</div>
  `
};



