// EJERCICIO 3: CLASE

const estudiante = {
    nombre: "KEIRY",
    edad: 25,
    contacto: {
        email: "correofalso@correo.com",
        telefono: "7604-8721"
    },
    materias: ["Programacion I", "Matematica II", "Realidad nacional", "Fisica", "Estadistica"],
    saludar: function(){
        console.log("Hola, me llamo "+ this.nombre +" y llevo la materia de "+ this.materias[0])
    }
}

estudiante.saludar();
