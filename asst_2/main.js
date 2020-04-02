const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
const images = ["images/pic1.png", "images/pic2.jfif", "images/pic3.jpg", "images/pic4.jpg", "images/pic5.jpg"];
images.forEach(image => {
    const photo = document.createElement('img');
    photo.setAttribute('src', image);
    photo.onclick = ()=>{
        displayedImage.setAttribute('src', image);
    }
    thumbBar.appendChild(photo);

})

/* Wiring up the Darken/Lighten button */
