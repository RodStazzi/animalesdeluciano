class Animal {
  constructor(nombre, edad, img, comentarios, sonido){
    let Nombre = nombre;
    let Edad = edad;
    let Img = img;
    let Comentarios = comentarios;
    let Sonido = sonido;

    this.getNombre = () => Nombre;
    this.getEdad = () => Edad;
    this.getImg = () => Img;
    this.getComentarios = () => Comentarios;
    this.getSonido = () => Sonido;

    this.setComentarios = (comentarios) => (Comentarios = comentarios);

  }

  get Nombre() {
    return this.getNombre();
  }
  get Edad() {
    return this.getEdad();
  }
  get Img() {
    return this.getImg();
  }
  get Comentarios() {
    return this.getComentarios();
  }
  get Sonido() {
    return this.getSonido();
  }
  set Comentarios(comentarios){
    return this.getComentarios(comentarios);
  }
}

// console.log(new Animal("goku", 14, 'imagen', 'un bonito animal', 'roarr'))
export default Animal;