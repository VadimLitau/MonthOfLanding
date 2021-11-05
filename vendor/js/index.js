let countPlace = 0;
let countPlaceTitle = 0;
let countPlaceIcon = 0;
const sliderLine = document.querySelector('.places__slider-line');
const sliderLineTitle = document.querySelector('.places__list');
const sliderLineIcon = document.querySelector('.places__list_slider')
document.querySelector('.places__btn_left').addEventListener('click', () => {
    countPlace += 690;

    if (countPlace > 1380) {
        countPlace = 0;
    } else if (countPlace == -690) {
        countPlace = 0;
    }

    countPlaceTitle += 460;
    if (countPlaceTitle > 920) {
        countPlaceTitle = 0;
    } else if (countPlaceTitle == -460) {
        countPlaceTitle = 0;
    }

    countPlaceIcon += 75;
    if (countPlaceIcon > 150) {
        countPlaceIcon = 0;
    } else if (countPlaceIcon == -75) {
        countPlaceIcon = 0;
    }

    sliderLineIcon.style.left = -countPlaceIcon + 'px';
    sliderLineTitle.style.left = -countPlaceTitle + 'px';
    sliderLine.style.left = -countPlace + 'px';

})

document.querySelector('.places__btn_rigth').addEventListener('click', () => {
    countPlace -= 690;
    if (countPlace < -1380) {
        countPlace = 0;
    }
    countPlaceTitle -= 460;
    if (countPlaceTitle < -920) {
        countPlaceTitle = 0;
    }

    countPlaceIcon -= 75;
    if (countPlaceIcon < -150) {
        countPlaceIcon = 0;
    }

    sliderLineIcon.style.left = countPlaceIcon + 'px';
    sliderLineTitle.style.left = countPlaceTitle + 'px';
    sliderLine.style.left = countPlace + 'px';
})