# 🎤 KLmusic

Aplicación web para **crear y reproducir karaokes**. Desarrollada con **React**, **TypeScript** y **Vite**, permite sincronizar letras con el audio, visualizar la forma de onda y disfrutar de la reproducción desde una interfaz moderna y responsive.
 
## ✨ Características
 
- 🎤 Creación de karaokes sincronizando la letra con la canción.
- ▶️ Reproducción de karaokes con letra sincronizada y controles (play/pausa, volumen, progreso).
- 🌊 Visualización de forma de onda con WaveSurfer.
- 🧭 Navegación entre páginas con React Router.
- 🎛️ Componentes accesibles (selectores, sliders, switches y pestañas) con Radix UI.
- 📝 Formularios con validación mediante React Hook Form.
- 🔔 Notificaciones tipo toast con Sonner.
- 🗂️ Estado global ligero con Zustand.
- 🌐 Consumo de API con Axios.
- 🎨 Estilos con Tailwind CSS.

## 🛠️ Tecnologías

| Categoría | Herramientas |
| --- | --- |
| Framework | React 18 |
| Lenguaje | TypeScript |
| Bundler | Vite |
| Estilos | Tailwind CSS, PostCSS |
| UI | Radix UI (Select, Slider, Switch, Tabs), React Select |
| Estado | Zustand |
| Rutas | React Router DOM |
| Audio | React Player, @wavesurfer/react |
| Formularios | React Hook Form |
| HTTP | Axios |
| Notificaciones | Sonner |
| Calidad de código | ESLint |

## 📋 Requisitos previos

- [Node.js](https://nodejs.org/) 18 o superior
- npm (incluido con Node.js)

## 🚀 Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/andres941cs/KLmusic.git

# 2. Entrar en el proyecto
cd KLmusic

# 3. Cambiar a la rama de desarrollo
git checkout develop

# 4. Instalar dependencias
npm install
```

## ▶️ Uso

```bash
# Servidor de desarrollo (http://localhost:5173)
npm run dev

# Compilar para producción
npm run build

# Previsualizar la build de producción
npm run preview

# Ejecutar el linter
npm run lint
```

## ⚙️ Configuración

Si el proyecto usa una API externa, crea un archivo `.env` en la raíz:

```env
VITE_API_URL=http://localhost:3000
```

> `TODO:` ajusta las variables de entorno a las que realmente use la aplicación.

## 👤 Autor

**andres941cs** · [GitHub](https://github.com/andres941cs)
