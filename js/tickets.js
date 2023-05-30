function calcularDescuento() {
     var cantidad = parseInt(document.getElementById('cantidad').value);
     var categoria = document.getElementById('categoria').value;
     var descuento = 0;
   
     switch (categoria) {
       case 'opcion1': // 80% de descuento Estudiante
         descuento = 0.8;
         break;
       case 'opcion2': // 50% de descuento Trainee
         descuento = 0.5;
         break;
       case 'opcion3': // 15% de descuento Junior
         descuento = 0.15;
         break;
     }
   
     var precioTicket = 200; // Precio del ticket sin descuento
     var subtotal = precioTicket * cantidad; // Subtotal sin descuento
     var totalPagar = subtotal - (subtotal * descuento); // Total a pagar con descuento
   
     document.getElementById('total').value = 'Total a Pagar: $' + totalPagar.toFixed(2);
   }
   
 
   function borrarCampos() {
     document.getElementById('nombre').value = '';
     document.getElementById('apellido').value = '';
     document.getElementById('correo').value = '';
     document.getElementById('cantidad').value = '';
     document.getElementById('categoria').selectedIndex = 0;
     document.getElementById('total').value = 'Total a Pagar: $';
   }