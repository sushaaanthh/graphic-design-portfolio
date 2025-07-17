
document.getElementById('show-portfolio').addEventListener('click', function() {
    document.getElementById('portfolio').classList.remove('hidden');
    this.style.display = 'none';
});

// Lightbox viewer
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const images = document.querySelectorAll('.gallery img');
images.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.innerHTML = '';
        const imgClone = img.cloneNode();
        lightbox.appendChild(imgClone);
        lightbox.style.display = 'flex';
    });
});

lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});
