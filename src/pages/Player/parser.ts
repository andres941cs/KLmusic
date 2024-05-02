// export function leerArchivo(input) {
//     return new Promise((resolve, reject) => {
//         let archivo = input.files[0];
//         let lector = new FileReader();
        
//         lector.onload = function(e) {
//             let contenido = e.target.result;
//             // Llamamos a la función para procesar el contenido del archivo
//             let dataProcesada = procesarSubtitulos(contenido);
//             resolve(dataProcesada);
//         };
        
//         lector.onerror = function(e) {
//             reject(e);
//         };

//         lector.readAsText(archivo);
//     });
// }
  // Función para procesar el contenido del archivo de subtítulos
  export  function procesarSubtitulos(contenido:string) {
    // Dividimos el contenido en líneas
    let lineas = contenido.split('\n');
    let subtitulos = [];
    
    // Iteramos sobre las líneas del archivo
    for (let i = 0; i < lineas.length; i++) { 
      let linea = lineas[i].trim().replace(/\r/g, '');
      // Verificamos si es un número para identificar el número de subtítulo
      // @ts-ignore
      if (!isNaN(linea) && linea !== "") {
        // Si es un número, obtenemos el tiempo de inicio y fin del subtítulo
        let lineaTiempo = obtenerTiempo(lineas[i + 1]);
        // Obtenemos el texto del subtítulo
        let texto = lineas[i + 2];
        // Creamos un objeto con la información del subtítulo y lo añadimos al array de subtitulos
        let subtitulo = {
          numero: parseInt(linea),
          tiempoInicio: lineaTiempo.inicio,
          tiempoFin: lineaTiempo.fin,
          texto: texto
        };
        subtitulos.push(subtitulo);
      }
    }
  
    // Una vez procesados los subtítulos, puedes hacer lo que necesites con ellos
    return subtitulos
  }
  
  // Función para obtener el tiempo en formato milisegundos a partir de una línea de tiempo en el formato de subtítulos
  export function obtenerTiempo(lineaTiempo:any) {
    let partesTiempo = lineaTiempo.split(' --> ');
    let tiempoInicio = convertirTiempo(partesTiempo[0]);
    let tiempoFin = convertirTiempo(partesTiempo[1]);
    return {
      inicio: tiempoInicio,
      fin: tiempoFin
    };
  }
  
  // Función para convertir un tiempo en formato HH:MM:SS,mmm a milisegundos
  export function convertirTiempo(tiempo:any) {
    let partesTiempo = tiempo.split(':');
    let horas = parseInt(partesTiempo[0]);
    let minutos = parseInt(partesTiempo[1]);
    let segundos = parseFloat(partesTiempo[2].split(',')[0]);
    let milisegundos = parseFloat(partesTiempo[2].split(',')[1]);
    return horas * 3600000 + minutos * 60000 + segundos * 1000 + milisegundos;
  }