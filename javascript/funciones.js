function mostrarHoroscopo(){
    document.getElementById('titulo').style.display = 'none';
    document.getElementById('anioo').style.display = 'block';

}

function mostrarDatos() {
    const anio = parseInt(document.getElementById('anio').value);
    const signos = ["Mono", "Gallo", "Perro", "Cerdo", "Rata", "Buey", "Tigre", "Conejo", "Dragón", "Serpiente", "Caballo", "Cabra"];
    const imagenes = {
        "Mono": "./img/mono.jpeg",
        "Gallo": "./img/gallo.jpeg",
        "Perro": "./img/perro.png",
        "Cerdo": "./img/cerdo.jpeg",
        "Rata": "./img/rata.png",
        "Buey": "./img/buey.jpeg",
        "Tigre": "./img/tigre.png",
        "Conejo": "./img/conejo.jpeg",
        "Dragón": "./img/dragon.jpeg",
        "Serpiente": "./img/serpiente.png",
        "Caballo": "./img/caballo.jpeg",
        "Cabra": "./img/cabra.jpeg"
    };

    if (anio) {
        const signoIndex = anio % 12;
        const signo = signos[signoIndex];
        const tabla = document.getElementById('tablaHoroscopo').getElementsByTagName('tbody')[0];
        tabla.innerHTML = `
            <tr>
                <td>${signoIndex}</td>
                <td>${signo}</td>
                <td><img src="${imagenes[signo]}" alt="${signo}" class="imagen-signo"></td>
            </tr>`;

        // Ocultar la sección de año de nacimiento y mostrar los resultados
        document.getElementById('anioo').style.display = 'none';
        document.getElementById('resultado').style.display = 'block';
    } else {
        alert("Por favor, ingresa un año válido.");
    }
}