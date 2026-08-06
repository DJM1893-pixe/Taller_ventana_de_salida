let precio = parseFloat(prompt("Digite el precio del producto:"));

if (isNaN(precio)) {
  document.write("Debe digitar un precio válido.");
} else {
  let iva = precio * 0.19;
  let total = precio + iva;

  document.write("<h2>FACTURA</h2>");
  document.write("Precio del producto: $" + precio.toLocaleString("es-CO") + "<br>");
  document.write("IVA (19%): $" + iva.toLocaleString("es-CO") + "<br>");
  document.write("<strong>Total a pagar: $" + total.toLocaleString("es-CO") + "</strong>");
}