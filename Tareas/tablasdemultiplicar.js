 // Vamos a crear las tablas de multiplicar del 1 al 10

// Creamos una función para imprimir las tablas
function imprimirTablas() {
    // Iteramos del 1 al 10 para crear las tablas
    for (let i = 1; i <= 10; i++) {
      // Imprimimos el encabezado de la tabla
      console.log(`Tabla del ${i}:`);
      
      // Iteramos para multiplicar el número actual (i) por los números del 1 al 10
      for (let j = 1; j <= 10; j++) {
        // Imprimimos el resultado de la multiplicación
        console.log(`${i} x ${j} = ${i * j}`);
      }
      
      // Imprimimos una línea en blanco para separar las tablas
      console.log('');
    }
  }
  
  // Llamamos a la función para que se ejecute
  imprimirTablas();