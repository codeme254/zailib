//scrolling
const btnScrollPrev = document.querySelector('.testimonial__button-left');
const btnScrollNext = document.querySelector('.testimonial__button-right');

const testimonialsToScroll = document.querySelectorAll('.testimony');

let currentIndex = 0;

testimonialsToScroll.forEach((testimony, index) => {
    testimony.style.transform = `translateX(${(index*100)}%)`
})

btnScrollNext.addEventListener('click', () => {
    currentIndex++;
    testimonialsToScroll.forEach((testimony, index) => {
        console.log(index, currentIndex, index+currentIndex)
        testimony.style.transform = `translateX(${(currentIndex - index)*100}%)`;
    })
})