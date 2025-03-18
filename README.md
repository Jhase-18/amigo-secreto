# Amigo Secreto

Este proyecto es una aplicación web para realizar sorteos de "Amigo Secreto". Permite a los usuarios ingresar nombres de amigos, validar las entradas, y sortear un amigo secreto de manera aleatoria. 
Además, incluye una animación de confeti para celebrar el sorteo.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Uso](#uso)
- [Dependencias](#dependencias)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Instalación

1. Clona el repositorio en tu máquina local:
    ```bash
    git clone https://github.com/tu-usuario/amigo-secreto.git
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd amigo-secreto
    ```

3. Abre el archivo `index.html` en tu navegador web preferido.

## Uso

1. En la página principal, ingresa los nombres de los amigos en el campo de texto. Los nombres deben tener al menos 5 caracteres y solo pueden contener letras.
2. Presiona "Enter" o haz clic en el botón "Añadir" para agregar el nombre a la lista.
3. Una vez que hayas ingresado al menos 4 nombres, haz clic en el botón "Sortear amigo" para realizar el sorteo.
4. El nombre del amigo secreto se mostrará en la pantalla junto con una animación de confeti.
5. Para reiniciar el sorteo y limpiar la lista, haz clic en el botón "Reiniciar sorteo".

## Dependencias

Este proyecto utiliza la biblioteca `canvas-confetti` para la animación de confeti. La biblioteca se incluye a través de un CDN en el archivo `index.html`:


<script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>

## Estructura del Proyecto

amigo-secreto/
├── assets/
│   ├── amigo-secreto.png
│   ├── play_circle_outline.png
│   └── restart_icon.png
├── [index.html](http://_vscodecontentref_/0)
├── [style.css](http://_vscodecontentref_/1)
└── [app.js](http://_vscodecontentref_/2)

* index.html: El archivo HTML principal que estructura la página web.
* style.css: Archivo de estilos CSS para la apariencia de la página.
* app.js: Archivo JavaScript que contiene la lógica del proyecto.
* assets/: Carpeta que contiene las imágenes utilizadas en el proyecto.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
3. Realiza tus cambios y haz commit (git commit -am 'Añadir nueva funcionalidad').
4. Sube tus cambios a tu fork (git push origin feature/nueva-funcionalidad).
5. Crea un Pull Request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más detalles.

Este README proporciona una descripción clara y detallada del proyecto, incluyendo instrucciones de instalación, uso, dependencias, estructura del proyecto, contribuciones y licencia. Puedes ajustarlo según las necesidades específicas de tu proyecto.

```html
