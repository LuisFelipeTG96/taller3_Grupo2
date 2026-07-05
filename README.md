Taller 3 - eCommerce - Grupo 2

Integrantes: Luis Torres / Frank Fabian

Requisitos

* MongoDB corriendo en "localhost:27017"
* Importar en Postman "taller3.postman_collection.json"

1. Levantar los servidores

En dos terminales distintas ejecutar lo siguiente:
* cd server && npm run start   
* cd client && npm run start

2. Conseguir un token JWT

Ejecuta en Postman en el siguiente orden: 
* Seguridad -- Crear persona (se crea un usuario)
* Seguridad -- Login (con esto se obtiene el token)

3. Probar Módulo de Pedido (2 ventanas)

* Abrir "http://localhost:3001/logistica.html"
* Abrir "http://localhost:3001/pedido.html" (pegar el token cuando lo pida)
* En pedido.html: llena número de pedido, cliente y monto, finalmente dar clic en "Enviar a Logística"
* En logistica.html: debe aparecer el pedido al instante, finalmente dar clic en "Marcar como leído"
* En pedido.html: debe aparecer la confirmación de lectura en tiempo real

4. Probar Módulo de Ventas (pago QR)

* En Postman: Pedido -- Registrar pedido (con esto creas un pedido)
* Abrir "http://localhost:3001/pagoqr.html" (pegar el token, pegar el "id_pedido")
* Dar clic en "Pagar pedido" y debe aparecer al instante "Pago confirmado" en la misma ventana
