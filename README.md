# ⚽ FootCast - La Plataforma Definitiva de Podcasts de Fútbol
w
**FootCast** es una aplicación web moderna y elegante diseñada para los amantes del fútbol que buscan una experiencia premium al escuchar sus podcasts favoritos. Con un diseño oscuro, efectos de *glassmorphism* y una interfaz intuitiva, FootCast redefine el consumo de contenido deportivo.

---

## ✨ Características Principales

-   **🎯 Interfaz Premium**: Diseño oscuro con acentos vibrantes, tipografía moderna y efectos visuales de alta gama.
-   **🎙️ Reproductor Integrado**: Escucha los últimos episodios directamente desde la plataforma con un reproductor estilizado.
-   **📅 Gestión de Episodios**: Navega por la biblioteca completa de episodios, desde clásicos hasta las últimas noticias.
-   **📱 Diseño Responsivo**: Experiencia fluida optimizada para computadoras de escritorio, tablets y móviles.
-   **⚡ Altamente Performante**: Construido sobre **Vite** para tiempos de carga ultrarrápidos y desarrollo ágil.

---

## 🛠️ Stack Tecnológico

| Tecnología | Propósito |
| :--- | :--- |
| **Vue 3** | Framework de componentes reactivos. |
| **Vite** | Herramienta de construcción y servidor de desarrollo. |
| **Bootstrap 5** | Estructura y utilidades de diseño responsivo. |
| **Vue Router** | Gestión de navegación entre páginas. |
| **Pinia** | Store para manejo de estado global. |
| **Vanilla CSS** | Personalización avanzada con efectos de desenfoque y gradientes. |

---

## 📁 Estructura del Proyecto

```text
audio-task/
├── public/                 # Assets estáticos y archivos de audio
│   ├── images/             # Portadas de podcasts e imágenes
│   └── podcasts/           # Archivos .mp3
├── src/
│   ├── components/         # Componentes VUE (Header, Footer, Inicio, etc.)
│   │   ├── inicio.vue      # Página principal
│   │   ├── episodios.vue   # Listado de podcasts
│   │   └── contacto.vue    # Formulario de contacto
│   ├── router/             # Configuración de Vue Router
│   ├── stores/             # Estado global con Pinia
│   ├── App.vue             # Componente raíz
│   └── main.js             # Punto de entrada de la aplicación
├── index.html              # Template principal
├── package.json            # Dependencias y scripts
└── vite.config.js          # Configuración de Vite
```

---

## 🚀 Instalación y Uso

Sigue estos pasos para ejecutar el proyecto localmente:

1.  **Instalar dependencias**:
    ```sh
    npm install
    ```

2.  **Iniciar el servidor de desarrollo**:
    ```sh
    npm run dev
    ```
    *La aplicación estará disponible en [http://localhost:5173](http://localhost:5173)*

3.  **Generar bundle de producción**:
    ```sh
    npm run build
    ```

---

## 🎨 Diseño y Estética

FootCast utiliza una paleta de colores sofisticada:
-   **Fondo**: Gradientes radiales oscuros (`#1e293b` a `#0f172a`).
-   **Acento**: Índigo vibrante (`#4f46e5`) con efectos de gradiente de texto.
-   **Efectos**: Glassmorphism (`backdrop-filter`) en tarjetas de episodios y secciones destacadas.

---

Desarrollado con ❤️ para los apasionados del buen fútbol. 🏟️
