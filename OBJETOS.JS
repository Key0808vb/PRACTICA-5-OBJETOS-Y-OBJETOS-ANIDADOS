// Objetos

const persona = {
    nombre: "KEIRY",
    edad: 25,
    profesion: "Instructor",
    saludar: function(){
        console.log("Hola, soy " + this.nombre)
    }
}

persona.saludar();
