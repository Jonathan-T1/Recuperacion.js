let carrito = [];


function añadiralcarrito() {
  const producto = document.getElementById('producto').value;
  const cantidad = parseInt(document.getElementById('cantidad').value);
  const precio = parseFloat(document.getElementById('precio').value);

  if (producto && !isNaN(cantidad) && !isNaN(precio)) {
    const subtotal = (cantidad * precio).toFixed(2);
    const item = { producto, cantidad, precio, subtotal };
    carrito.push(item);

    actualizarcarrito();
    calculartotal();
  } else {
    alert('No estas Haciendo bien todo completa antes de continuar.');
  }
}

function actualizarcarrito() {
  const lista = document.getElementById('acaelfor');
  lista.innerHTML = '';

  carrito.forEach((item, index) => {
    const row = lista.insertRow();
    row.innerHTML = `
      <td>${item.producto}</td>
      <td>${item.cantidad}</td>
      <td>${item.precio.toFixed(2)}</td>
      <td>${item.subtotal}</td>
      <td><button onclick="elimarelemento(${index})">Eliminar</button></td>
    `;
  });
}
function calculartotal() {
  const totaldeelementos = document.getElementById('total');
  const total = carrito.reduce((acc, item) => acc + parseFloat(item.subtotal), 0).toFixed(2);
  totaldeelementos.textContent = total;
}
function elimarelemento(index) {
  carrito.pop(index,1);
  actualizarcarrito();
  calculartotal();
}
