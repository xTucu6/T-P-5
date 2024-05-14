class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, añoNacimiento) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.añoNacimiento = añoNacimiento;
    }

    mostrarGeneracion() {
        const generacion = this.calcularGeneracion();
        alert(`Esta persona pertenece a la generacion ${generacion} y su rasgo caracteristico es ${this.obtenerRasgo(generacion)}`);
    }

    esMayorDeEdad() {
        return this.edad >= 18 ? "Es mayor de edad" : "Es menor de edad";
    }

    mostrarDatos() {
        return `Nombre: ${this.nombre}\nEdad: ${this.edad}\nDNI: ${this.dni}\nSexo: ${this.sexo}\nPeso: ${this.peso} kg\nAltura: ${this.altura} cm\nAño de Nacimiento: ${this.añoNacimiento}`;
    }

    calcularGeneracion() {
        const año = this.añoNacimiento;
        if (año >= 1930 && año <= 1948) return "Silent Generation";
        if (año >= 1949 && año <= 1968) return "Baby Boom";
        if (año >= 1969 && año <= 1980) return "Generacion X";
        if (año >= 1981 && año <= 1993) return "Generacion Y Millennials";
        if (año >= 1994 && año <= 2010) return "Generación Z";
        return "Generacion Desconocida";
    }

    obtenerRasgo(generacion) {
        switch (generacion) {
            case "Silent Generation":
                return "Conflictos belicos.";
            case "Baby Boom":
                return "Paz y explosion demografica.";
            case "Generación X":
                return "Crisis del 73 y transicion española.";
            case "Millennials":
                return "Inicios de la digitalizacion.";
            case "Generación Z":
                return "Expansion masiva de internet.";
            default:
                return "No se encontró información para esta generación.";
        }
    }
}

function crearPersona() {
    const nombre = document.getElementById('nombre').value;
    const edad = parseInt(document.getElementById('edad').value);
    const dni = document.getElementById('dni').value;
    const sexo = document.getElementById('sexo').value;
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const añoNacimiento = parseInt(document.getElementById('añoNacimiento').value);

    const persona = new Persona(nombre, edad, dni, sexo, peso, altura, añoNacimiento);

    alert(persona.mostrarDatos());

    persona.mostrarGeneracion();

    alert(persona.esMayorDeEdad());
}