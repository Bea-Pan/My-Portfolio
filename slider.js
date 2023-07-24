let slider_img = document.querySelector('.slider-img');
let images = ['HTML-codecademy.jpg','CSS-codecademy.jpg', 'JavaScript-UDEMY.jpg', 'JavaScript-sololearn.png', 'jQuery-codecademy.jpg', 'PHP-codecademy.jpg'];
let i = 0; //current image index

function prev(){
    if (i <= 0) i = images.length;
    i--;
    return setMyImg();
}

function next(){
    if (i >= images.length-1) i = -1;
    i++;
    return setMyImg();
}

function setMyImg(){
    return slider_img.setAttribute('src', './media/Quals/' + images[i]);
}

