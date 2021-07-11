// Dado el siguiente array de productos en stock, agregar a cada producto
//un atributo booleano agotado en true si el stock es mayor a
// 0, caso contrario false.

const productos = [
  { id: "1", nombre: "lapiceras", stock: 164 },
  { id: "2", nombre: "marcadores", stock: 0 },
  { id: "3", nombre: "cartulinas", stock: 25 },
  { id: "4", nombre: "cartucheras", stock: 0 },
  { id: "5", nombre: "mochilas", stock: 4 },
];

productos.forEach((element) => {
  if (element.stock > 0) {
    element.agotado = false;
  } else {
    element.agotado = true;
  }
});

console.log(productos);
