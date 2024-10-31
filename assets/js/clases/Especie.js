import Animal from "./Animal.js"

const animalAudio = document.getElementById("player");
const audio = document.getElementById("player");

class Leon extends Animal {
  constructor(nombre, edad, img, comentarios, sonido){
    super(nombre, edad, img, comentarios, sonido)
  }

  Leonsonido(){
    console.log(this.getSonido());
    animalAudio.src = `./assets/sounds/${this.getSonido()}`;
    animalAudio.play();
  }
}

class Lobo extends Animal {
  constructor(nombre, edad, img, comentarios, sonido){
    super(nombre, edad, img, comentarios, sonido)
  }

  Lobosonido(){
    console.log(this.getSonido());
    animalAudio.src = `./assets/sounds/${this.getSonido()}`;
    animalAudio.play();
  }
}

class Oso extends Animal {
  constructor(nombre, edad, img, comentarios, sonido){
    super(nombre, edad, img, comentarios, sonido)
  }

  Ososonido(){
    console.log(this.getSonido());
    animalAudio.src = `./assets/sounds/${this.getSonido()}`;
    animalAudio.play();
  }
}

class Serpiente extends Animal {
  constructor(nombre, edad, img, comentarios, sonido){
    super(nombre, edad, img, comentarios, sonido)
  }

  Serpientesonido(){
    console.log(this.getSonido());
    animalAudio.src = `./assets/sounds/${this.getSonido()}`;
    animalAudio.play();
  }
}

class Aguila extends Animal {
  constructor(nombre, edad, img, comentarios, sonido){
    super(nombre, edad, img, comentarios, sonido)
  }

  Aguilasonido(){
    console.log(this.getSonido());
    animalAudio.src = `./assets/sounds/${this.getSonido()}`;
    animalAudio.play();
  }
}

class Caballo extends Animal {
  constructor(nombre, edad, img, comentarios, sonido){
    super(nombre, edad, img, comentarios, sonido)
  }

  Caballosonido(){
    console.log(this.getSonido());
    animalAudio.src = `./assets/sounds/${this.getSonido()}`;
    animalAudio.play();
  }
}

class Foca extends Animal {
  constructor(nombre, edad, img, comentarios, sonido){
    super(nombre, edad, img, comentarios, sonido)
  }

  Focasonido(){
    console.log(this.getSonido());
    animalAudio.src = `./assets/sounds/${this.getSonido()}`;
    animalAudio.play();
  }
}

class Vaca extends Animal {
  constructor(nombre, edad, img, comentarios, sonido){
    super(nombre, edad, img, comentarios, sonido)
  }

  Vacasonido(){
    console.log(this.getSonido());
    animalAudio.src = `./assets/sounds/${this.getSonido()}`;
    animalAudio.play();
  }
}

class Cabra extends Animal {
  constructor(nombre, edad, img, comentarios, sonido){
    super(nombre, edad, img, comentarios, sonido)
  }

  Cabrasonido(){
    console.log(this.getSonido());
    animalAudio.src = `./assets/sounds/${this.getSonido()}`;
    animalAudio.play();
  }
}

class Burro extends Animal {
  constructor(nombre, edad, img, comentarios, sonido){
    super(nombre, edad, img, comentarios, sonido)
  }

  Burrosonido(){
    console.log(this.getSonido());
    animalAudio.src = `./assets/sounds/${this.getSonido()}`;
    animalAudio.play();
  }
}

export {Leon, Lobo, Oso, Serpiente, Aguila, Caballo, Foca, Cabra, Vaca, Burro};
