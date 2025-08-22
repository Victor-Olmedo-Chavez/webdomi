# Página Web de Domingo Bogado

Una página web responsiva y moderna para el artista musical Domingo Bogado, con esquema de colores amarillo y negro, iconos en forma de burbujas esféricas y panel de administración completo.

## Características

### 🎨 Diseño
- **Esquema de colores**: Amarillo (#FFD700) sobre fondo negro (#000000)
- **Iconos esféricos**: Burbujas con efectos 3D y animaciones flotantes
- **Diseño responsivo**: Adaptable a dispositivos móviles y desktop
- **Animaciones suaves**: Transiciones y efectos visuales modernos

### 📱 Secciones
1. **Inicio**: Hero section con presentación del artista
2. **Sobre Mí**: Información personal y biografía
3. **Música**: Galería de canciones con reproductor integrado
4. **Videos**: Galería de videos con reproductor
5. **Galería**: Colección de imágenes del artista
6. **Contacto**: Enlaces a redes sociales y medios de contacto
7. **Panel Admin**: Sistema de administración para subir contenido

### 🔗 Enlaces de Contacto
- **Email**: contacto@domingobogado.com
- **Facebook**: facebook.com/domingobogado
- **WhatsApp**: Número configurable
- **TikTok**: tiktok.com/@domingobogado
- **YouTube**: youtube.com/@domingobogado

### 🛠️ Panel de Administración
- **Contraseña por defecto**: `admin123` (cambiar en script.js)
- **Subida de música**: Archivos MP3, WAV, OGG
- **Subida de videos**: Archivos MP4, WebM, OGG
- **Subida de imágenes**: JPEG, PNG, GIF, WebP
- **Límite de archivo**: 50MB por archivo

## Instalación

1. **Descarga los archivos**:
   - `index.html`
   - `styles.css`
   - `script.js`

2. **Estructura de carpetas**:
   ```
   domingobogado.com/
   ├── index.html
   ├── styles.css
   ├── script.js
   └── README.md
   ```

3. **Abrir en navegador**:
   - Doble click en `index.html`
   - O servir desde un servidor web local

## Configuración

### Cambiar Contraseña de Admin
En `script.js`, línea 45:
```javascript
if (password === 'admin123') { // Cambiar por una contraseña segura
```

### Actualizar Enlaces de Contacto
En `index.html`, sección de contacto:
```html
<a href="mailto:tu-email@domingobogado.com" class="contact-link">
<a href="https://wa.me/TU-NUMERO" class="contact-link" target="_blank">
```

### Personalizar Información
- **Nombre del artista**: Cambiar "Domingo Bogado" en el HTML
- **Biografía**: Editar la sección "Sobre Mí"
- **Título de la página**: Modificar el `<title>` en el HTML

## Uso del Panel de Administración

1. **Acceder al panel**:
   - Click en "Admin" en la navegación
   - Ingresar contraseña: `admin123`

2. **Subir música**:
   - Seleccionar archivos de audio
   - Click en "Subir"
   - Los archivos aparecerán en la sección Música

3. **Subir videos**:
   - Seleccionar archivos de video
   - Click en "Subir"
   - Los videos aparecerán en la sección Videos

4. **Subir imágenes**:
   - Seleccionar archivos de imagen
   - Click en "Subir"
   - Las imágenes aparecerán en la Galería

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con gradientes y animaciones
- **JavaScript ES6**: Funcionalidad interactiva
- **Font Awesome**: Iconos vectoriales
- **CSS Grid & Flexbox**: Layout responsivo

## Características Técnicas

### Responsividad
- **Desktop**: Layout completo con grid de múltiples columnas
- **Tablet**: Adaptación a pantallas medianas
- **Móvil**: Menú hamburguesa y layout de una columna

### Optimización
- **Carga lazy**: Imágenes se cargan según necesidad
- **Animaciones CSS**: Hardware accelerated
- **Compresión**: Archivos optimizados para web

### Compatibilidad
- **Navegadores modernos**: Chrome, Firefox, Safari, Edge
- **Dispositivos**: Desktop, tablet, móvil
- **Resoluciones**: Desde 320px hasta 4K

## Personalización Avanzada

### Cambiar Colores
En `styles.css`:
```css
/* Color principal */
--primary-color: #FFD700;
--secondary-color: #FFA500;
--background-color: #000000;
```

### Agregar Nuevas Secciones
1. Añadir HTML en `index.html`
2. Agregar estilos en `styles.css`
3. Añadir funcionalidad en `script.js`

### Modificar Animaciones
En `styles.css`, sección de animaciones:
```css
@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
}
```

## Soporte y Mantenimiento

### Actualizaciones Recomendadas
- Cambiar contraseña de administrador regularmente
- Actualizar enlaces de redes sociales
- Revisar compatibilidad con nuevos navegadores

### Backup
- Respaldar archivos subidos regularmente
- Mantener copia de seguridad del código fuente

### Seguridad
- Usar HTTPS en producción
- Implementar autenticación más robusta para admin
- Validar archivos subidos en el servidor

## Licencia

Este proyecto está diseñado específicamente para Domingo Bogado. Todos los derechos reservados.

---

**Desarrollado con ❤️ para Domingo Bogado**
**Dominio**: domingobogado.com