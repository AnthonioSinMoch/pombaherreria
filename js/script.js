const container = document.querySelector(".carousel-container");
const images = Array.from(container.children);
const totalImages = images.length;
let autoSlideInterval;

// Duplicamos las imágenes para asegurar un bucle visualmente continuo
images.forEach(img => {
    const clone = img.cloneNode(true);
    container.appendChild(clone);
});

// Aplicamos animación infinita con desplazamiento suave
function startAutoSlide() {
    let offset = 0;

    autoSlideInterval = setInterval(() => {
        offset += 1; // Ajustamos el desplazamiento de manera progresiva
        container.style.transform = `translateX(-${offset}px)`;

        // Cuando llega al final, lo reiniciamos sin espacio en blanco
        if (offset >= totalImages * 300) { // 300px es el ancho de cada imagen
            offset = 0;
            container.style.transform = `translateX(0px)`;
        }
    }, 10); // Cada 10 milisegundos, asegurando fluidez
}

// Detener desplazamiento cuando el usuario pase el cursor sobre el carrusel
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

container.addEventListener("mouseover", stopAutoSlide);
container.addEventListener("mouseleave", startAutoSlide);

startAutoSlide();
