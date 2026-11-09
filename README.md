# Ti & Mo

Landing corporativa en Astro, TypeScript y CSS. Ilustraciones originales construidas con HTML, CSS y SVG. Sin backend ni rastreadores.

## Desarrollo

```sh
npm install
npm run dev
npm run build
npm run preview
```

- `src/content.ts`: marca, servicios, gerencia, misión, visión, valores, proceso, conceptos, preguntas y configuración de testimonios.
- `src/pages/index.astro`: estructura semántica e interacciones del menú y contacto.
- `src/components/`: marca, iconos e ilustraciones reutilizables.
- `src/styles/global.css`: paleta, diseño adaptable y movimiento reducido.
- `vercel.json`: configuración del despliegue estático.

Por solicitud explícita para el curso de marketing, las tres reseñas ficticias son visibles (`showDemoTestimonials = true`), con identificación individual y aviso académico de sección. Los proyectos están identificados como demostraciones. El formulario valida campos y prepara un enlace mailto; el visitante debe enviar el mensaje desde su aplicación de correo. No se almacenan consultas. La alternativa de copia muestra texto seleccionable si el portapapeles no está disponible. Las fuentes se solicitan a Google Fonts con alternativas del sistema.

## Verificación

Compilación Astro y comprobación TypeScript sin errores. Revisión visual a 320 px y 1440 px. Se comprobaron menú móvil, cierre con Escape y devolución de foco, selección de servicio, errores del formulario y foco inicial, copia de correo y mensaje, anclas y ausencia de IDs duplicados. Se corrigió un desbordamiento de las tarjetas conceptuales a 320 px. Consola sin errores durante la revisión.

El envío final depende del cliente de correo del visitante. No se envió ningún correo de prueba. El modo de movimiento reducido está contemplado mediante CSS; no se simuló una preferencia del sistema. No se afirma certificación de accesibilidad.

## Publicación

```sh
npx vercel --prod
```

Se requiere una sesión autorizada de Vercel. El directorio `.vercel` contiene el vínculo local y no debe publicarse en Git. Para un dominio propio, configurar el dominio en Vercel y añadir después la URL canónica y metadatos sociales correspondientes.

## Edición académica: blog y movimiento

Tres artículos completos en `src/pages/blog/[slug].astro`, con contenido centralizado en `src/content.ts` e ilustraciones CSS en `src/components/EditorialArt.astro`. `src/motion.ts` añade aparición por desplazamiento y perspectiva 3D con puntero fino. Se desactiva el movimiento con `prefers-reduced-motion`; no hay animaciones infinitas ni dependencias adicionales.

Verificación de esta edición: compilación de cuatro páginas sin errores ni advertencias; revisión visual de blog, testimonios y artículo; ausencia de desbordamiento a 320 px; apertura del artículo desde su tarjeta; respuesta del efecto 3D al puntero y consola sin errores.
