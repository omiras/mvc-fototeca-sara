# MVC Fototeca

Modifica el modelo de esta fototeca para conseguir los siguientes requisitos

## Requisito 1
Todas imagenes de la fototeca deben guardarse ahora, no en un array de objetos, si no en un fichero. Por ejemplo, puedes ponerle como nombre __imagenes.json__. 

Cada vez que añadimos una nueva imagen, debemos:

1. Leer el fichero imagenes.json
2. Añadir la imagen al array de objetos recuperados
3. Volver a guardar toda la información en imagenes.json

## Requisito 2
Mostrar todas las imágenes cuando hagamos un GET a 'http://localhost:3000/imagenes".

Para ello el **modelo** debe recuperar los datos de __imagenes.json__

Sabremos si lo hemos hecho bien cuando, al salir del servidor o reiniciarlo y volver más tarde; los datos sobre las imágenes que recuperamos son los que hemos guardado en __imagenes.json__

Nota: Para escribir ficheros en formato JSON:

```
const fs = require('fs')
fs.writeFileSync('file.json', JSON.stringify(arrayDeObjetosAGuardar));
```

A continuación, la tabla de endpoints generada tras ejecutar el script con todas las rutas:

```
Aplicación:
-----------
['GET', '/', ejecute la función anónima
definida en este mismo fichero]
['GET', '/imagenes', getAllImages]
['GET', '/imagenes/anadir', getForm]
['POST', '/imagenes/anadir', postForm]

```

## Requisito 3
Transforma tu práctica de Fototeca al MVC. Alternativamente, puedes continuar con esta práctica.

## Requisito 4 
Queremos añadir la posibilidad de crear etiquetas o **tags** para la fototeca. Queremos conseguir algo parecido a [esta funcionalidad](https://oscarm.tinytake.com/tt/NTM1NzAyNV8xNjc2MDU4Ng).

### Requisito 4 - A
Crea las rutas, controladores y modelos necesarios para insertar una nueva etiqueta en tu base de datos. La base de datos puede ser un fichero de nombre **tags.json**.
Te proponemos seguir este orden:

1. Crea la vista para insertar una nueva etiqueta
2. Las etiquetas se componen de un título y un color
3. Crea las rutas y controladores necesarios para renderizar el formulario. Idealmente, al acceder a /tags/new-tag se debería renderizar el formulario
4. Al hacer click en el botón; deberías realizar un POST contra tu servidor. Puedes usar el mism endpoint /tags/new-tag. Añade las rutas y controladores necesarios para conseguir la funcionalidad
5. Deberás ahora crear un nuevo modelo en models/tags.js para poder almacenar, y posteriormente recuperar, las etiquetas.
6. Puedes añadir un nuevo item de menú para gestionar las etiquetas.

<img src="https://oscarm.tinytake.com/media/1052cc9?filename=1623130786516_TinyTake08-06-2021-07-39-43_637587275862603845.png&sub_type=thumbnail_preview&type=attachment&width=800&height=315" title="Powered by TinyTake Screen Capture"/><br><a href="https://www.tinytake.com">Powered by TinyTake Screen Capture</a>

**SUGERENCIA**: No copies/pegues código. Escribe manualmente tú las rutas, controladores y modelos; aunque te bases en otros ficheros.

### Requisito 4 - B
Modifica el formulario de **añadir imagen** para que ahora puedas seleccionar **una** etiqueta para cada foto.

1. La vista que renderiza el formulario de añadir imagen debe otorgar ahora la posibilidad de asociar una etiqueta 
2. Un control adecuado para esto sería un **select** ; donde vas a tener que generar tantos **option** como etiquetas hay en tu base de datos
3. Necesitaras modificar el modelo de la Imagen para tener en cuenta la etiqueta asociada.
4. Sabrás que lo has hecho bien, si ahora en el images.json tenemos la imagen insertada con un nuevo campo (de nombre tag?)

### Requisito 4 - C
Modifica la vista que muestra todas las imágenes para que ahora también incluya la etiqueta asociada a la imagen; con el color de fondo establecido para dicha etiqueta.
