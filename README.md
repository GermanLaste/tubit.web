# 🔧 Tubit.PC - Landing Page de Servicios IT

![Project Banner](public/banner-placeholder.png)
> Una landing page moderna, performante y diseñada para **Tubit.PC**, un servicio técnico de hardware y software en Villa Adelina. Desarrollada con arquitectura de Islas para máxima velocidad.

## 🚀 Demo
[Ver Demo en Vivo](https://tubit-web.vercel.app/)

## ✨ Características Principales

Esta no es una web estática común. Está construida pensando en la experiencia de usuario (UX) y el SEO local.

* **⚡ Astro + React:** Lo mejor de los dos mundos. HTML estático para velocidad (Astro) y componentes interactivos para la UI (React).
* **🌊 Animaciones Fluidas:** Integración de **Framer Motion** para entradas suaves, hover effects y transiciones de estado.
* **🍱 Bento Grid UI:** Sección de servicios organizada en grillas asimétricas modernas.
* **📱 100% Responsive:** Se ve perfecto en celulares, tablets y monitores ultrawide.
* **🔍 SEO Local Optimizado:** Microdatos `JSON-LD` integrados para que Google entienda el negocio (Ubicación, horarios, servicios).
* **🗺️ Mapa Interactivo:** Footer con integración de Google Maps en escala de grises interactiva.

## 🛠️ Tecnologías Usadas

Este proyecto utiliza un stack moderno para asegurar rendimiento y escalabilidad:

| Tecnología | Propósito |
|------------|-----------|
| **[Astro](https://astro.build/)** | Framework principal (MPA) para velocidad de carga zero-js por defecto. |
| **[React](https://react.dev/)** | Librería de UI para los componentes interactivos (Navbar, Tabs, FAQ). |
| **[Tailwind CSS](https://tailwindcss.com/)** | Framework de estilos utilitarios para un diseño rápido y consistente. |
| **[Framer Motion](https://www.framer.com/motion/)** | Librería de animaciones de producción para React. |
| **[Lucide React](https://lucide.dev/)** | Íconos SVG ligeros y modernos. |

## 📂 Estructura del Proyecto

```bash
/
├── public/          # Assets estáticos (imágenes, favicon)
├── src/
│   ├── components/  # Componentes reutilizables (.jsx y .astro)
│   │   ├── Hero.jsx       # Portada animada
│   │   ├── Navbar.jsx     # Menú flotante con dropdown
│   │   ├── Services.jsx   # Grilla Bento
│   │   ├── Process.jsx    # Línea de tiempo
│   │   ├── FAQ.jsx        # Acordeón de preguntas
│   │   └── Footer.astro   # Pie de página estático
│   ├── layouts/     # Plantilla base (HTML, Head, SEO)
│   └── pages/       # Rutas del sitio
│       ├── index.astro    # Página de inicio
│       └── servicios.astro # Catálogo detallado
└── astro.config.mjs # Configuración del framework
```

## 🏁 Instalación y Uso Local

Instrucciones para correr el proyecto en entorno local:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/GermanLaste/tubit-pc.git](https://github.com/GermanLaste/tubit-pc.git)
    cd tubit-pc
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Correr el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

## 🤝 Autor

Desarrollado con ❤️ y mucho café por **German Laste**.

* **GitHub:** [@GermanLaste](https://github.com/GermanLaste/)
* **LinkedIn:** [German Laste](https://www.linkedin.com/in/german-laste/)
* **Web:** [tubit.pc](https://tubit-web.vercel.app/)

## 📄 Licencia

**Copyright © 2026 German Laste.**
Este proyecto no es Open Source. Todos los derechos están reservados. Se permite su visualización con fines educativos o de evaluación, pero se prohíbe estrictamente su copia, modificación o uso comercial sin permiso del autor.