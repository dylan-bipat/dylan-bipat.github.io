const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
const images = ["images/pic1.png", "images/pic2.jfif", "images/pic12.jpg", "images/pic4.jpg", "images/pic11.jpg"];
images.forEach(image => {
    const photo = document.createElement('img');
    photo.setAttribute('src', image);
    photo.onclick = ()=>{
        displayedImage.setAttribute('src', image);
    }
    thumbBar.appendChild(photo);

})

/* Wiring up the Darken/Lighten button */
btn.onclick = ()=>{
    if (btn.getAttribute('class') == 'dark') {
        btn.setAttribute('class', 'light');
        btn.innerHTML = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else if (btn.getAttribute('class') == 'light') {
        btn.setAttribute('class', 'dark');
        btn.innerHTML = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}