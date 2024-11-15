const images = document.querySelectorAll('.open-case__img');
let popup = document.querySelector('.popup');
let popup__link = document.querySelector('.popup-block__link');



const LINK = 'https://t.me/+Ld4AFyZwhX8zYTZi';

function startRandomAnimation() {

    if (images.length === 0) {
        console.error("No images found with the class 'image'.");
        return;
    }

    images.forEach(img => img.classList.remove('animated'));

    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];

    if (randomImage) {
        randomImage.classList.add('animated');
    }

    setTimeout(startRandomAnimation, Math.random() * 2000 + 1000);
}

startRandomAnimation();


images.forEach(function(el) {
    el.addEventListener('click', () =>   popup.classList.add('df'))
})

images[0].addEventListener('click', function() {
    
    popup.classList.add('df');

});

document.querySelector('.popup-close').addEventListener('click', function() {
    popup.classList.remove('df');
});


popup__link.href = LINK;
