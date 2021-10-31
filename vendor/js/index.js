let countPlace = 0;
const sliderLine = document.querySelector('.places__slider-line');
document.querySelector('.places__btn_left').addEventListener('click', () => {
    countPlace += 690;
    if (countPlace > 1380) {
        countPlace = 0;
    }
    sliderLine.style.left = -countPlace + 'px';
})

document.querySelector('.places__btn_rigth').addEventListener('click', () => {
    countPlace -= 690;
    if (countPlace < -1380) {
        countPlace = 0;
    }
    sliderLine.style.left = countPlace + 'px';
})