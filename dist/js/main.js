const slides = document.querySelectorAll('.landing-inner');
const auto = true;
const intervalTime = 7000;
let slideInterval;

const nextSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    // check for next slide
    if (current.nextElementSibling) {
        // add current to next sibling
        current.nextElementSibling.classList.add('current');
    } else {
        // add current to the 1st slide
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
};

// set autoto true to enable auto slider
if (auto) {
    slideInterval = setInterval(nextSlide, intervalTime);
}
