# Joha Tattoo

Este es el sitio web y portfolio para la artista del tatuaje Joha, que incluye una guía de estilos de tatuajes impulsada por IA para ayudar a los clientes a desarrollar sus ideas utilizando la API de Gemini.

Este proyecto fue configurado para usar [Vite](https://vitejs.dev/) para el desarrollo y la construcción.

## Configuración y Desarrollo

### Prerrequisitos

- Node.js (v18 o superior recomendado)
- npm, yarn, o pnpm

### Variables de Entorno

Para ejecutar este proyecto, necesitarás agregar la siguiente variable de entorno a un archivo `.env.local` en la raíz del proyecto:

`VITE_API_KEY=TU_API_KEY_DE_GEMINI`

Reemplaza `TU_API_KEY_DE_GEMINI` con tu clave real de Google AI Studio.

### Instalación

1.  Clona el repositorio:
    ```bash
    git clone https://github.com/tu-usuario/joha-tattoo.git
    cd joha-tattoo
    ```
2.  Instala las dependencias:
    ```bash
    npm install
    ```

### Ejecutar el Servidor de Desarrollo

Para iniciar el servidor de desarrollo local, ejecuta:
```bash
npm run dev
```
Abre [http://localhost:5173](http://localhost:5173) (o el puerto que se muestre en la terminal) para verlo en el navegador.

### Construir para Producción

Para crear una compilación lista para producción de la aplicación, ejecuta:
```bash
npm run build
```
Los archivos de la compilación se guardarán en el directorio `dist/`.

## Despliegue

Esta aplicación está lista para ser desplegada en plataformas como Vercel o Netlify.

1.  Sube tu código a un repositorio de GitHub.
2.  Importa el repositorio en tu cuenta de Vercel.
3.  Vercel debería detectar automáticamente que es un proyecto de Vite. Usará el comando `npm run build` y publicará el contenido del directorio `dist`.
4.  **Importante**: En la configuración del proyecto de Vercel, agrega tu clave de API de Gemini como una variable de entorno llamada `VITE_API_KEY`.
