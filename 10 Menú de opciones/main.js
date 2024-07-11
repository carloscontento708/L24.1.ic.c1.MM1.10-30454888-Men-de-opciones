function mostrarOpcionSeleccionada() {
    const opcion = parseInt(document.getElementById("opcion").value);

    let nombreOpcion;

    switch (opcion) {
        case 1:
            nombreOpcion = "Ver perfil";
            break;
        case 2:
            nombreOpcion = "Enviar mensaje";
            break;
        case 3:
            nombreOpcion = "Configuración";
            break;
        case 4:
            nombreOpcion = "Añadir la tarea";
            break;
        case 5:
            nombreOpcion = "Presentar examen";
            break;
        default:
            nombreOpcion = "Opción inválida";
    }

    const resultado = `La opción seleccionada es: ${nombreOpcion}`;
    document.getElementById("resultado").innerHTML = resultado;
}
