
// Practica para el checkpoint 08/05

//Escribir una función que convierta lo números binarios a números decimal.

function BinarioADecimal(num) {




}

function cacheFunction(cb) {
    // Usa closures para crear un cache para la funcion cb.
    // la funcion que retornas debe aceptar un solo argumento e invocar a cb con ese argumento
    // cuando la funcion que hayas retornado es invocada de nuevo, deberia guardar el argumento y el resultado de la invocacion
    // cuando la funcion que retornaste sea invocada de nuevo con un argumento con el cual se habia invocado anterioremente, no deberia invocar de nuevo a cb
    // deberia retornar el resultado (previamente guardado)
    // Ejemplo:
    // cb -> function(x) { return x * x; }
    // si invocas la function que retornaste con 5, adentro deberia invocar cb(5) y retornar 25.
    // si la invocas de nuevo con 5, deberia retornar 25 (guardado previament en el cache)
    // Tips, usá un objeto donde cada propiedad sea un argumento, y el valor el resultado.
    // usá hasOwnProperty!
  }




  function counter() {
    // Retorna una funcion que cuando sea invocada retorne un valor creciente.
    // el primer valor deberia ser 1.
    // Vas a tener que usar closures.
    // ejemplo: const newCounter = counter();
    // newCounter(); // 1
    // newCounter(); // 2


}





function Queue() {
    // Implementa la clase Queue
    // enqueue:   Agrega un valor a la queue.   Respeta el orden existente.
    // dequeue:   Remueve un valor de la queue.   Obedece a FIFO y respeta el underflow (cuando la queue tiene size cero, o sea, cuando no tiene ningún elemento).
    // size:   Devuelve el número de elementos que contiene la queue.

  }

//con recursion.

// Hash Table
// Una hash table contiene un arreglo de "contenedores" donde puede guardar información.
// Para guardar un valor asociado a una key (string):
//    - Correr la key a través de una función hash para transformarla a un número entero.
//    - Usar ese número como índice para ver en cuál contenedor guardarás el valor.
// Para buscar el valor por su key:
//    - Correr la key por la función hash para conseguir el número.
//    - Usar el número para buscar el contenedor donde está el valor.
//    - Devolver el valor.

function HashTable() {

}

// Implementar el método conocido como bubbleSort para ordenar de menor a mayor
// el array recibido como parámetro
// Devolver el array ordenado resultante
// Tu código:

function bubbleSort(array) {
   
  }
  
  
  
  function insertionSort(array) {
    // Implementar el método conocido como insertionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando arreglos
    // Devolver el array ordenado resultante
    // Tu código:
    
  
  
  }

  function quickSort(array) {
    // Implementar el método conocido como quickSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
  
  }
  
  function mergeSort(array) {
    // Implementar el método conocido como mergeSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
  
  }


  // no modificar nada de aca abajo.

  module.exports = {
    
    BinarioADecimal,
  counter,
  HashTable,
  bubbleSort,
  insertionSort,
  quickSort,
  mergeSort,
  cacheFunction,
  };