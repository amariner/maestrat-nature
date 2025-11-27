# Animaciones Implementadas - Maestrat Nature

## Resumen
Se han implementado efectos de fade-in sutiles y lazy loading en toda la web para hacerla más dinámica y mejorar la experiencia de usuario.

## Características Principales

### 1. **Fade-In Animations**
- **Tecnología**: Intersection Observer API para máximo rendimiento
- **Efecto**: Los elementos aparecen suavemente cuando entran en el viewport
- **Movimiento**: Translación vertical sutil de 12px
- **Duración**: Entre 0.8s y 1.3s dependiendo del tipo de elemento
- **Curva de animación**: cubic-bezier(0.4, 0, 0.2, 1) para transiciones naturales

### 2. **Lazy Loading de Imágenes**
- **Implementación**: Nativo HTML5 + JavaScript mejorado
- **Efecto**: Las imágenes se cargan solo cuando están cerca del viewport
- **Transición**: Fade-in suave de 0.8s
- **Opacidad durante carga**: 0.5 (muy sutil)

### 4. **Navbar Interactivo (Glassmorphism)**
- **Comportamiento**: Transparente al inicio, cambia al hacer scroll
- **Efecto Scrolled**: Fondo blanco semitransparente (95%) + Blur 10px + Sombra suave
- **Enlaces**: Animación de subrayado progresivo (izquierda a derecha)
- **Botón Contacto**: Elevación y sombra al hover

### 5. **Parallax Hero**
- **Efecto**: El fondo se mueve a una velocidad diferente al scroll (factor 0.2)
- **Resultado**: Sensación de profundidad sutil

### 6. **Micro-animaciones**
- **Botones**: Efecto "pulse" sutil continuo para llamar la atención
- **Imágenes Sticky**: Ligero zoom (scale 1.02) al pasar el ratón

## Elementos Animados

### Página Principal (index.astro)
- ✅ Hero heading y description
- ✅ Sección "Natural Adventure in the Mountains"
- ✅ Tres info cards con efecto escalonado
- ✅ Imágenes sticky con lazy loading y hover zoom
- ✅ Footer
- ✅ **NUEVO**: Parallax en fondo hero

### Navbar
- ✅ Detección de scroll
- ✅ Efecto glassmorphism
- ✅ Hover avanzado en enlaces

### Página Privacy Policy
- ✅ Título principal
- ✅ Contenido del texto

### Página LEADER
- ✅ Título principal
- ✅ Contenido del programa

### Footer (todas las páginas)
- ✅ Sección completa con fade-in

## Clases CSS Disponibles

```css
.fade-in-heading     /* Para títulos - 1s de duración */
.fade-in-description /* Para descripciones - 1.1s con delay de 0.15s */
.fade-in-card        /* Para tarjetas - 0.8s con stagger automático */
.fade-in-image       /* Para imágenes - 1.3s de duración */
.fade-in             /* Genérica - 0.9s de duración */
```

## Accesibilidad

✅ **Respeta preferencias de usuario**: Las animaciones se desactivan automáticamente si el usuario tiene activado `prefers-reduced-motion`

## Rendimiento

- **Intersection Observer**: Solo anima elementos visibles
- **Will-change**: Optimización de GPU para transiciones suaves
- **Unobserve**: Los elementos se dejan de observar después de animar (opcional)
- **Lazy loading nativo**: Reduce el tiempo de carga inicial

## Archivos Modificados

1. `/src/styles/animations.css` - Estilos de animaciones
2. `/public/js/animations.js` - Lógica de Intersection Observer
3. `/src/layouts/Layout.astro` - Importación de estilos y scripts
4. `/src/pages/index.astro` - Clases aplicadas a elementos
5. `/src/pages/privacy-policy.astro` - Clases aplicadas
6. `/src/pages/leader.astro` - Clases aplicadas
7. `/src/components/Footer.astro` - Clase aplicada

## Configuración

### Ajustar el trigger point
En `/public/js/animations.js`, línea 7:
```javascript
rootMargin: '0px 0px -50px 0px' // Ajusta el -50px para cambiar cuándo se activa
```

### Ajustar la duración
En `/src/styles/animations.css`, modifica los valores de `transition-duration`

### Ajustar el movimiento
En `/src/styles/animations.css`, línea 12:
```css
transform: translateY(12px); /* Aumenta para más movimiento */
```

## Próximos Pasos (Opcional)

- [ ] Añadir animaciones al hover de elementos interactivos
- [ ] Implementar parallax sutil en el hero
- [ ] Añadir micro-animaciones a iconos
- [ ] Implementar scroll reveal para secciones largas
