// image-carousel.js

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image-carousel .image-item');
    let index = 0;

    function showImage(index) {
        images.forEach((image, idx) => {
            if (idx === index) {
                image.classList.add('active');
            } else {
                image.classList.remove('active');
            }
        });
    }

    function nextImage() {
        index = (index + 1) % images.length;
        showImage(index);
    }

    setInterval(nextImage, 2000); // Change image every 3 seconds
});
