// Navegación móvil
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Cerrar menú al hacer click en un enlace
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Panel de administración
let isAdminVisible = false;

document.querySelector('.admin-link').addEventListener('click', (e) => {
    e.preventDefault();
    const adminSection = document.getElementById('admin');
    
    if (!isAdminVisible) {
        // Solicitar contraseña
        const password = prompt('Ingrese la contraseña de administrador:');
        if (password === 'admin123') { // Cambiar por una contraseña segura
            adminSection.style.display = 'block';
            isAdminVisible = true;
            adminSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            alert('Contraseña incorrecta');
        }
    } else {
        adminSection.scrollIntoView({ behavior: 'smooth' });
    }
});

// Funciones de carga de archivos
function uploadMusic() {
    const fileInput = document.getElementById('music-upload');
    const files = fileInput.files;
    
    if (files.length === 0) {
        alert('Por favor seleccione al menos un archivo de música');
        return;
    }
    
    // Simular carga de archivos
    const loadingMessage = document.createElement('div');
    loadingMessage.textContent = 'Subiendo música...';
    loadingMessage.style.color = '#FFD700';
    loadingMessage.style.marginTop = '1rem';
    
    const button = event.target;
    button.parentNode.appendChild(loadingMessage);
    
    setTimeout(() => {
        loadingMessage.textContent = `${files.length} archivo(s) de música subido(s) exitosamente`;
        addMusicToGrid(files);
        fileInput.value = '';
        
        setTimeout(() => {
            loadingMessage.remove();
        }, 3000);
    }, 2000);
}

function uploadVideo() {
    const fileInput = document.getElementById('video-upload');
    const files = fileInput.files;
    
    if (files.length === 0) {
        alert('Por favor seleccione al menos un archivo de video');
        return;
    }
    
    // Simular carga de archivos
    const loadingMessage = document.createElement('div');
    loadingMessage.textContent = 'Subiendo videos...';
    loadingMessage.style.color = '#FFD700';
    loadingMessage.style.marginTop = '1rem';
    
    const button = event.target;
    button.parentNode.appendChild(loadingMessage);
    
    setTimeout(() => {
        loadingMessage.textContent = `${files.length} archivo(s) de video subido(s) exitosamente`;
        addVideoToGrid(files);
        fileInput.value = '';
        
        setTimeout(() => {
            loadingMessage.remove();
        }, 3000);
    }, 2000);
}

function uploadImage() {
    const fileInput = document.getElementById('image-upload');
    const files = fileInput.files;
    
    if (files.length === 0) {
        alert('Por favor seleccione al menos una imagen');
        return;
    }
    
    // Simular carga de archivos
    const loadingMessage = document.createElement('div');
    loadingMessage.textContent = 'Subiendo imágenes...';
    loadingMessage.style.color = '#FFD700';
    loadingMessage.style.marginTop = '1rem';
    
    const button = event.target;
    button.parentNode.appendChild(loadingMessage);
    
    setTimeout(() => {
        loadingMessage.textContent = `${files.length} imagen(es) subida(s) exitosamente`;
        addImageToGallery(files);
        fileInput.value = '';
        
        setTimeout(() => {
            loadingMessage.remove();
        }, 3000);
    }, 2000);
}

// Funciones para agregar contenido dinámicamente
function addMusicToGrid(files) {
    const musicGrid = document.querySelector('.music-grid');
    
    Array.from(files).forEach(file => {
        const musicItem = document.createElement('div');
        musicItem.className = 'music-item';
        musicItem.innerHTML = `
            <div class="bubble-icon">
                <i class="fas fa-play"></i>
            </div>
            <h3>${file.name.replace(/\.[^/.]+$/, "")}</h3>
            <p>Archivo de música subido</p>
            <audio controls style="width: 100%; margin-top: 1rem;">
                <source src="${URL.createObjectURL(file)}" type="${file.type}">
                Tu navegador no soporta el elemento de audio.
            </audio>
        `;
        musicGrid.appendChild(musicItem);
    });
}

function addVideoToGrid(files) {
    const videoGrid = document.querySelector('.video-grid');
    
    Array.from(files).forEach(file => {
        const videoItem = document.createElement('div');
        videoItem.className = 'video-item';
        videoItem.innerHTML = `
            <video controls style="width: 100%; height: 200px; object-fit: cover;">
                <source src="${URL.createObjectURL(file)}" type="${file.type}">
                Tu navegador no soporta el elemento de video.
            </video>
            <div style="padding: 1rem; background: linear-gradient(135deg, #1a1a1a, #2a2a2a);">
                <h3 style="color: #FFD700; margin: 0;">${file.name.replace(/\.[^/.]+$/, "")}</h3>
            </div>
        `;
        videoGrid.appendChild(videoItem);
    });
}

function addImageToGallery(files) {
    const galleryGrid = document.querySelector('.gallery-grid');
    
    Array.from(files).forEach(file => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        img.alt = file.name;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        img.style.borderRadius = '18px';
        
        galleryItem.appendChild(img);
        galleryGrid.appendChild(galleryItem);
    });
}

// Efectos de scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.98)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    }
});

// Animación de entrada para elementos
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animación a elementos cuando se cargan
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.music-item, .video-item, .gallery-item, .contact-link, .admin-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Función para mostrar/ocultar secciones del admin
function toggleAdminSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.style.display = section.style.display === 'none' ? 'block' : 'none';
}

// Validación de archivos
function validateFile(file, type) {
    const maxSize = 50 * 1024 * 1024; // 50MB
    
    if (file.size > maxSize) {
        alert(`El archivo ${file.name} es demasiado grande. Máximo 50MB.`);
        return false;
    }
    
    const allowedTypes = {
        'music': ['audio/mpeg', 'audio/wav', 'audio/ogg', 'audio/mp3'],
        'video': ['video/mp4', 'video/webm', 'video/ogg'],
        'image': ['image/jpeg', 'image/png', 'image/gif', 'image/webp']
    };
    
    if (!allowedTypes[type].includes(file.type)) {
        alert(`Tipo de archivo no válido para ${file.name}`);
        return false;
    }
    
    return true;
}

// Mejorar las funciones de upload con validación
const originalUploadMusic = uploadMusic;
uploadMusic = function() {
    const fileInput = document.getElementById('music-upload');
    const files = Array.from(fileInput.files);
    
    const validFiles = files.filter(file => validateFile(file, 'music'));
    if (validFiles.length === 0) return;
    
    fileInput.files = new FileList();
    validFiles.forEach(file => fileInput.files.append(file));
    
    originalUploadMusic.call(this);
};

console.log('Página web de Domingo Bogado cargada exitosamente');