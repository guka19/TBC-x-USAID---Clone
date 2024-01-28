// navbar scroll effect
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// slider
const slides = document.querySelectorAll(".slide");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {

    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index) {

    if(index >= slides.length) {
        slideIndex = 0;
    } else if(index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    })

    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

// accordion
document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const content = item.querySelector('.accordion-content');

        item.addEventListener('click', function () {
            const isActive = content.classList.toggle('active');

            if (isActive) {
                closeOtherAccordionItems(item);
            }
        });
    });

    function closeOtherAccordionItems(currentItem) {
        accordionItems.forEach(function (item) {
            if (item !== currentItem) {
                const content = item.querySelector('.accordion-content');
                content.classList.remove('active');
            }
        });
    }
});

// navbar responsive
const burgerMenu = document.querySelector('.burger-menu');
const sidebar = document.querySelector('#sidebar');

burgerMenu.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

sidebar.addEventListener('click', (event) => {
  if (event.target.classList.contains('close-sidebar')) {
    sidebar.classList.remove('active');
  }
});
