document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector(".button");
    const pictures = document.querySelectorAll(".images");

    function loadImage(img) {
        const src = img.dataset.src;
        img.src = src;
    }

    button.addEventListener('click', () => {
        pictures.forEach(loadImage);
    });
});