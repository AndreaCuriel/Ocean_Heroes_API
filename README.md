# Ocean_Heroes_API

## Requerimientos Backend

- Crear Una base de datos en PostgresSQL llamada `ocean` con tres tablas que se tienen que relacionar mutuamente ( `Organizaciones`, `Santuarios` y `Eventos`.
- Creación de endpoints que muestren toda la información de las tablas anteriormente mencionadas, su relación y busqueda especifica por id.
- Diagrama de las tablas y sus relaciones:

![relaciondetablas](https://user-images.githubusercontent.com/99285898/168500679-76dc6643-dc15-4533-a424-7def7ca93444.png)

## Servidor:

Lenguaje: Javascript

Framwork: Node.js

Base de Datos: posgresSQL

Dependencias:

Express: Es un marco de desarrollo para estructurar la API mediante los metodos HTPP (GET, POST, PUT, DELETE).

Prisma: Permite la conexion de la Base de Datos con el Servidor, Generar consultas y migracion.

CORS: Permite que una App consuma la API, mediante URLs cruzados. 

## Correr la aplicacion Servidor.
1. Crear una base de datos en PostgresSQL.
2. Realiza un fork y clona los repositorio del servidor e instale las dependencias necesarias con `npm intall`.
3. Verificar que los URLs del Servidor y del Cliente esten correctos (en el servidor en el archivo server.js en la línea 13, donde es la inicialización del CORS). 
4. Servidor: Ingresar la información de la Base de Datos para tener una exitosa conexion con la API. La cual se encuentra en `.env`. No versione el username y password.
5. Servidor: Corre la app con `node server.js`.

### API

#### Consultas:

|Endpoint| URL|Respuesta|
|:--------|:----------|:----------|
| "/" | http://localhost:3000/ | Mensaje de bienvenida|
| "/organizaciones" | http://localhost:3000/organizaciones | Regresa todas las Organizaciones |
| "/organizaciones/:id" | http://localhost:3000/organizaciones/1 | Regresa una organización especifico por ID|
| "/organizacionesWithEventos"| http://localhost:3000/organizacionesWithEventos |Regresa todas las Organizaciones con sus eventos|
| "/organizacionesWithEventos/:id"| http://localhost:3000/organizacionesWithEventos/1| Represa una organización por ID con sus eventos |
| "/santuarios" |http://localhost:3000/santuarios | Regresa todos los Santuarios| 
| "/santuarios/:id"| http://localhost:3000/santuarios/:id | Regresa un santuario especifico por ID|
| "/santuariosWithEventos"|http://localhost:3000/santuariosWithEventos | Regresa todos los Santuarios con sus eventos |
| "/santuariosWithEventos/:id"| http://localhost:3000/santuariosWithEventos/1| Regresa un santuario por ID con sus Eventos|
| "/eventos"| http://localhost:3000/eventos | Regresa todos los eventos |
| "/eventos/:id"|  http://localhost:3000/eventos/1 | Regresa un evento especifico por ID|
| "/eventosWithOrganizacionSantuario"|  http://localhost:3000/eventosWithOrganizacionSantuario | Regresa todos los eventos con las organizaciones y santuarios que lo patrocinan |
| "/eventosWithOrganizacionSantuario/:id"| http://localhost:3000/eventosWithOrganizacionSantuario/1 | Regresa un evento por ID  con las organizaciones y santuarios que lo patrocinan|
| "/organizacionesWithSantuarios"| http://localhost:3000/organizacionesWithSantuarios  | Regresa todas las organizaciones con los Santuarios que tienen |
| "/organizacionesWithSantuarios/:id"| http://localhost:3000/organizacionesWithSantuarios/1 | Regresa una organización por ID  con los Santuarios que tiene|
| "/santuariosWithOrganizaciones"|http://localhost:3000/santuariosWithOrganizaciones | Regresa todos los Santuarios con sus organizaciones|
| "/santuariosWithOrganizaciones/:id"| http://localhost:3000/santuariosWithOrganizaciones/1 | regresa un Santuaario por ID con sus organizaciones|

Ejemplos: 

![organizaciones](https://user-images.githubusercontent.com/99285898/168499887-457f1cef-e0dd-459f-b072-a66bf3b81ecf.png)

![santuarios](https://user-images.githubusercontent.com/99285898/168499896-5916e450-e4bc-486d-a099-a3588946d8b4.png)

![eventos](https://user-images.githubusercontent.com/99285898/168499903-e47b73c1-e1dd-4771-82f5-ab3ab636e2ea.png)

![eventosconOrganizacionySantuarios](https://user-images.githubusercontent.com/99285898/168499966-f3311652-7a10-4cae-96d1-5fbc98412b7d.png)







