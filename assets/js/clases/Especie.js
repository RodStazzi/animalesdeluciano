import Animal from "./Animal.js"

const animalAudio = document.getElementById("player");
const audio = document.getElementById("player");

class Leon extends Animal {
  constructor(nombre, edad, img, comentarios, sonido){
    super(nombre, edad, img, comentarios, sonido)
  }

  Rugir(){
    console.log(this.getSonido());
    animalAudio.src = `./assets/sounds/${this.getSonido()}`;
    animalAudio.play();
  }
}

class Lobo extends Animal {
  constructor(nombre, edad, img, comentarios, sonido){
    super(nombre, edad, img, comentarios, sonido)
  }

  Aullar(){
    console.log(this.getSonido());
    animalAudio.src = `./assets/sounds/${this.getSonido()}`;
    animalAudio.play();
  }
}

class Oso extends Animal {
  constructor(nombre, edad, img, comentarios, sonido){
    super(nombre, edad, img, comentarios, sonido)
  }

  Gruñir(){
    console.log(this.getSonido());
    animalAudio.src = `./assets/sounds/${this.getSonido()}`;
    animalAudio.play();
  }
}

class Serpiente extends Animal {
  constructor(nombre, edad, img, comentarios, sonido){
    super(nombre, edad, img, comentarios, sonido)
  }

  Sisear(){
    console.log(this.getSonido());
    animalAudio.src = `./assets/sounds/${this.getSonido()}`;
    animalAudio.play();
  }
}

class Aguila extends Animal {
  constructor(nombre, edad, img, comentarios, sonido){
    super(nombre, edad, img, comentarios, sonido)
  }

  Chillar(){
    console.log(this.getSonido());
    animalAudio.src = `./assets/sounds/${this.getSonido()}`;
    animalAudio.play();
  }
}
export {Leon, Lobo, Oso, Serpiente, Aguila};