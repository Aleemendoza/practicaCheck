/* eslint-disable no-undef */
const {
    
  BinarioADecimal,
  counter,
  HashTable,
  bubbleSort,
  insertionSort,
  quickSort,
  mergeSort,
  cacheFunction,

  } = require('../practicaCheckpoint');
  
  describe('BinarioADecimal(num)', function() {
    it('should return 2', function() {
      expect(BinarioADecimal('10')).toBe(2);
    });
    it('should return 7', function() {
      expect(BinarioADecimal('111')).toBe(7);
    });
  });

  describe('counter', () => {
    it('should return a function', () => {
      expect(typeof counter()).toBe('function');
    });
    it('should return 1 when the returned function is invoked', () => {
      expect(counter()()).toBe(1);
    });
    it('should increment and return the number each time the function is invoked', () => {
      const counterFunction = counter();
      expect(counterFunction()).toBe(1);
      expect(counterFunction()).toBe(2);
      expect(counterFunction()).toBe(3);
      expect(counterFunction()).toBe(4);
      expect(counterFunction()).toBe(5);
    });
   });




  describe('HashTable', function() {
    var hashTable;
  
    beforeEach(function() {
      hashTable = new HashTable();
    });
  
    it('deberia tener 35 buckets', function() {
      expect(hashTable.numBuckets).toBe(35);
    });
  
    it('deberia tener metodos `set`, `get`, y `hasKey`', function() {
      expect(typeof hashTable.set).toBe('function');
      expect(typeof hashTable.get).toBe('function');
      expect(typeof hashTable.hasKey).toBe('function');
    });
  
    it('deberia `hash` correctament', function() {
      // esta funcion hasheadora deberia sumar los key code de las letras de la palabra,
      // y hacer el mod de ese numero por el numero de buckets .
      expect(hashTable.hash('foo')).toBe(9);
      expect(hashTable.hash('this is a key')).toBe(27);
      expect(hashTable.hash('what about this one')).toBe(13);
    });
  
    it('deberia guardar y buscar valores por key', function() {
      hashTable.set('key1', 'val1');
      hashTable.set('key2', 'val2');
      hashTable.set('this is a very different string', 44.4);
      expect(hashTable.get('key1')).toBe('val1');
      expect(hashTable.get('key2')).toBe('val2');
      expect(hashTable.get('this is a very different string')).toBe(44.4);
    });
  
    it('deberia devolver un error cuando el key no es un string', function() {
      expect(function() {
        hashTable.set(false, 'hi');
      }).toThrowError(TypeError, 'Keys must be strings');
    });
  
    it('deberia manejar colisiones', function() {
      hashTable.set('foo', 'bar1');
      hashTable.set('ofo', 'bar2');
      expect(hashTable.get('ofo')).toBe('bar2');
      expect(hashTable.get('foo')).toBe('bar1');
    });
  
    it('deberia sobreescribir keys', function() {
      hashTable.set('foo', 'bar1');
      hashTable.set('foo', 'bar2');
      expect(hashTable.get('foo')).toBe('bar2');
    });
  
    it('deberia devolver booleanos para el metodo #hasKey', function() {
      hashTable.set('foobar', 'fluf cats');
      expect(hashTable.hasKey('foobar')).toBe(true);
      expect(hashTable.hasKey('raboof')).toBe(false);
    });
  
  });
  describe('bubbleSort(array)', function() {
    it('Debe retornar el array ordenado de menor a mayor', function() {
      expect(bubbleSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
      expect(bubbleSort([10, 10, 16, 12])).toEqual([10, 10, 12, 16]);
      expect(bubbleSort([10, -2, -7, 4])).toEqual([-7, -2, 4, 10]);
    });
  });
  
  describe('insertionSort(array)', function() {
    it('Debe retornar el array ordenado de menor a mayor', function() {
      expect(insertionSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
      expect(insertionSort([10, 10, 16, 12])).toEqual([10, 10, 12, 16]);
      expect(insertionSort([10, -2, -7, 4])).toEqual([-7, -2, 4, 10]);
    });
  });

  describe('quickSort(array)', function() {
    it('Debe retornar el array ordenado de menor a mayor', function() {
      expect(quickSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
      expect(quickSort([10, 10, 16, 12])).toEqual([10, 10, 12, 16]);
      expect(quickSort([10, -2, -7, 4])).toEqual([-7, -2, 4, 10]);
    });
  });
  
  describe('mergeSort(array)', function() {
    it('Debe retornar el array ordenado de menor a mayor', function() {
      expect(mergeSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
      expect(mergeSort([10, 10, 16, 12])).toEqual([10, 10, 12, 16]);
      expect(mergeSort([10, -2, -7, 4])).toEqual([-7, -2, 4, 10]);
    });
  });

  describe('cacheFunction(cb)', function() {
    it('should return the callback function', function() {
      const cb = function() {};
      expect(typeof cacheFunction(cb)).toEqual('function');
    });
    it('should return the callback functions result when the cached function is invoked', function() {
      const cb = function(x) {
        return x * 2;
      };
      const cachedFunction = cacheFunction(cb);
      expect(cachedFunction(5)).toBe(10);
    });
    it('should cache function results', function() {
      const cb = jest.fn();
      const cachedFunction = cacheFunction(cb);
      cachedFunction(true);
      cachedFunction(true);
      cachedFunction(true);
      cachedFunction(true);
      cachedFunction(true);
      cachedFunction(10);
      cachedFunction(10);
      cachedFunction(10);
      cachedFunction(10);
      expect(cb).toHaveBeenCalledTimes(2);
    });
   });