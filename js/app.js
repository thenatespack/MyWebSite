let images = ['java.png', 'js.png', 'php.png'];
let image_index = 1;

setInterval(() => {
    document.getElementById('rotating-img').src = "images/" + images[image_index];
    image_index = (image_index + 1) % images.length;
}, 5000);



