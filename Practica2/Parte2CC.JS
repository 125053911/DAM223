const listaPedidos = [];
let totalAcumulado = 0;

function agregarPedido(nombre, precio, cantidad) {
  let subtotal = precio * cantidad;

  let pedido = {
    nombre: nombre,
    precio: precio,
    cantidad: cantidad,
    subtotal: subtotal
  };

  listaPedidos.push(pedido);

  totalAcumulado = totalAcumulado + subtotal;

  console.log("Pedido agregado: " + nombre + " x" + cantidad + " = $" + subtotal);
}

function mostrarPedidos() {
  console.log("LISTA DE PEDIDOS");

  for (let i = 0; i < listaPedidos.length; i++) {
    const { nombre, cantidad, subtotal } = listaPedidos[i];
    console.log((i + 1) + " " + nombre + " cantidad: " + cantidad + " subtotal: $" + subtotal);
  }
}

function mostrarTotal() {
  console.log("totalAcumulado: $" + totalAcumulado);
}

function calcularTotalConIva() {
  const subtotalGeneral = listaPedidos.reduce(function (acumulado, pedido) {
    return acumulado + pedido.subtotal;
  }, 0);

  const iva = subtotalGeneral * 0.16;
  const totalFinal = subtotalGeneral + iva;

  console.log("Subtotal: $" + subtotalGeneral);
  console.log("IVA: $" + iva);
  console.log("Total con IVA: $" + totalFinal);
}

agregarPedido("Hamburguesa", 55, 2);
agregarPedido("Refresco", 20, 3);
agregarPedido("Papas", 35, 1);

mostrarPedidos();
mostrarTotal();
calcularTotalConIva();

function marcarPedidoListo(index, avisar) {
  let pedido = listaPedidos[index];

  if (!pedido) {
    console.log("No existe ese pedido");
    return;
  }

  avisar("Tu pedido de " + pedido.nombre + " ya esta listo");
}

function cancelarPedido(index, avisar) {
  let pedido = listaPedidos[index];

  if (!pedido) {
    console.log("No existe ese pedido");
    return;
  }

  totalAcumulado = totalAcumulado - pedido.subtotal;
  listaPedidos.splice(index, 1);

  avisar("Se cancelo el pedido de " + pedido.nombre);
}

marcarPedidoListo(0, function (mensaje) {
  console.log(mensaje);
});

cancelarPedido(1, function (mensaje) {
  console.log(mensaje);
});

mostrarPedidos();
mostrarTotal();