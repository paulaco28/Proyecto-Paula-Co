



// {function presentacion() {
//     alert("Hola bienvenido a Pasteleria de Frida");
// }
// presentacion();

// const comprarProductos = () => {
// let productosalados = 0;
// let productodulces = 0;
// let cantidad = 0;
// let precioProducto = 0;
// let precioCompra= 0;
// let seguirComprando = false;

// do {
//     let producto = 0;
//     do {
//     producto = parseInt(prompt('Que clase de producto quiere:\n1) Dulce;\n2) Salado.'));
//         }while (producto != 1 && producto != 2)
//           if (producto === 1) {
//             do {
//             productodulce = parseInt(prompt('Seleccione que producto dulce quiere comprar:\n1) Lemon pie $3.400;\n2) Chess  $2.900;\n3) Torta arandanos $3.000.'));
//             } while (productodulce != 1 && productodulce != 2 && productodulce != 3);
//           switch (productodulce) {
//                     case 1:
//                               precioProducto = 3400;
//                     break;
//                     case 2:
//                               precioProducto = 2900;
//                     break;
//                     case 3:
//                               precioProducto = 3000;
//                     break;
//                 }
//         } else if (producto=== 2) {
//             do {
//                 productosalado = parseInt(prompt('Seleccione que producto salado quiere comprar:\n1) Facturas $1000;\n2) Pan de molde $2.300;\n3) Pizzas $1800'));
//             } while (productosalado != 1 && productosalado != 2 && productosalado!= 3);
//             switch (productosalado) {
//                     case 1:
//                         precioProducto = 1000;
//                         break;
//                     case 2:
//                         precioProducto = 2300;
//                         break;
//                     case 3:
//                         precioProducto = 1800;
//                         break;
//                     }
//           }
//           cantidad = parseInt(prompt('¿Cuántos productos queres comprar?'));
//           while (isNaN(cantidad)) {
//                     cantidad = parseInt(prompt('¿Cuántos producos queres comprar?'));
//           }
// precioCompra += precioProducto * cantidad;

// seguirComprando = confirm("¿Querés agregar otra cosa?");
// } while (seguirComprando)
// return precioCompra;
// }

// let pago = 0;
// let tarjeta = 0;
// let descuento = 0;
// let precioFinal =0;
// const formaDePago = (precioCompra) => {
//     do {
//     pago = parseInt(prompt('Seleccione la forma de pago que desea:\n1) Efectivo ;\n2) Tarjeta (1 o 3 cuotas sin interés).'));
//         } while (pago != 1 && pago != 2);
//         if (pago === 2) {
//               do {
//               tarjeta = parseInt(prompt('Seleccione la opción según correponda a su prefeencia de cuotas a pagar:\n1) 1 cuotas sin interés;\n2) 3 cuotas sin interés.'));
//                } while (tarjeta != 1 && tarjeta != 2);
//                if (tarjeta === 1) {
//                         (alert('Su compra se realizó en 1 cuotas sin interés de $' + (precioCompra / 1).toFixed(2) + '.'));
//                } else {
//                         (alert('Su compra se realizó en 3 cuotas sin interés de $' + (precioCompra / 3).toFixed(2) + '.'));
//                }
//                return precioCompra;
               
    
//         }
// }

// let envio = 0;
// const calcularEnvio = (precioCompra, precioFinal) => {
//     do {
//     envio = parseInt(prompt('¿Querés envío a domicilio? (costo adicional $800 en ciudad o alrededores).\n1) Si;\n2) No.'));
//     }
//           while (envio != 1 && envio != 2);
//           if (envio === 1 && precioCompra >= 8000){
//                 alert('El precio total de tu compra + el envío es de: $' + (precioFinal + 800) + '.');
//                     return precioFinal;
//           } else if (envio === 1){
//                 alert('El precio total de tu compra + el envío es de: $' + (precioCompra + 800) + '.');
//           } else if (envio === 2 && precioCompra >=8000) {
//                 alert('El precio total de tu compra es de: $' + precioFinal + '.');
//                     return precioFinal;
//           } else if (envio === 3) {
//                 alert('El precio total de tu compra es de: $' + precioCompra + '.');
//           }
// return precioCompra;
// 

// calcularEnvio(formaDePago(comprarProductos()));
// alert('MUCHAS GRACIAS POR COMPRAR EN PASTELERIA FRIDA!');
//
//}

{
 class Producto {
    constructor(nombre, categoria, precio, stock) {
         this.nombre = nombre;
          this.categoria = categoria;
           this.precio = precio;
       this.stock = stock;
      }
       sumaIva(){
           this.precio =this.precio * 1.21;
       }
  }

const pastafrola = new Producto("pastafrola ", "dulce",  "1300", true,);
const lemonpie = new Producto("lemonpie ", "dulce",  "1500", true,);

pastafrola.sumaIva();
lemonpie.sumaIva();
console.log(pastafrola)
console.log (lemonpie)
 }

const listaProductosdulces = ["pastafrola", "lemon pie", "wafles", "chess", "torta"];
console.log(listaProductosdulces);

listaProductosdulces.push("Torta manzana");
console.log(listaProductosdulces);

const listaProductossalados = ["Pan de campo", "Medialunas saladas, Chipa, Pizza"];
const listaPasteleria = listaProductosdulces.concat(listaProductossalados);
  console.log(listaPasteleria);