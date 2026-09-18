const listaPedidos = [];
let totalAcumulado = 0;

function agregarPedido(nombre, precio, cantidad) {
    let subtotal = precio * cantidad;
    let pedido = {
        nombre : nombre,
        precio : precio,
        cantidad : cantidad,
        subtotal : subtotal 
    };

    listaPedidos.push(pedido);
    totalAcumulado = totalAcumulado + subtotal;
    console.log("Pedido agregado: " + nombre + " x" + cantidad + " = $" + subtotal);
}

function mostrarPedidos() {
    console.log("LISTA DE PEDIDOS");

    for (let i = 0; i < listaPedidos.length; i++) {
        let p = listaPedidos[i];
        console.log((i + 1) + p.nombre + " cantidad: " + p.cantidad + " subtotal: $" + p.subtotal);
    }
}

function mostrarTotal() {
    console.log("totalAcumulado: $" + totalAcumulado);
}

agregarPedido("Malteada", 60, 3);
agregarPedido("Chilaquiles", 75, 2);
agregarPedido("Quesadillas", 40, 1);

mostrarPedidos();
mostrarTotal();