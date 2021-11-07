//Слайдеры
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

//Велосипеды - смена галереи
document.querySelector('#bikes-road').addEventListener('click', () => {
    document.querySelector('#road').classList.add('bikes__gallery_active_road');
    document.querySelector('#bikes-road').classList.add('bikes__head-road_active');
    document.querySelector('#tt').classList.remove('bikes__gallery_active_tt');
    document.querySelector('#grevel').classList.remove('bikes__gallery_active_grevel');
    document.querySelector('#bikes-grevel').classList.remove('bikes__head-road_active');
    document.querySelector('#bikes-tt').classList.remove('bikes__head-road_active');
})

document.querySelector('#bikes-grevel').addEventListener('click', () => {
    document.querySelector('#grevel').classList.add('bikes__gallery_active_grevel');
    document.querySelector('#bikes-grevel').classList.add('bikes__head-road_active');
    document.querySelector('#tt').classList.remove('bikes__gallery_active_tt');
    document.querySelector('#road').classList.remove('bikes__gallery_active_road');
    document.querySelector('#bikes-road').classList.remove('bikes__head-road_active');
    document.querySelector('#bikes-tt').classList.remove('bikes__head-road_active');
})

document.querySelector('#bikes-tt').addEventListener('click', () => {
    document.querySelector('#tt').classList.add('bikes__gallery_active_tt');
    document.querySelector('#bikes-tt').classList.add('bikes__head-road_active');
    document.querySelector('#road').classList.remove('bikes__gallery_active_road');
    document.querySelector('#grevel').classList.remove('bikes__gallery_active_grevel');
    document.querySelector('#bikes-road').classList.remove('bikes__head-road_active');
    document.querySelector('#bikes-grevel').classList.remove('bikes__head-road_active');
})

//Включение темной темы
const darkThemeButn = document.querySelector('.footer__switch-btn');
const darkThemeHeaderLink = document.querySelectorAll('ul >li>a.header__link');
const darkThemePlaceSubtitle = document.querySelectorAll('ul >li>p.places__subtitle');
const darkThemeBikesHeadbtn = document.querySelectorAll('ul >li>button.bikes__head-btn');
const darkThemeBikesGalleryLink = document.querySelectorAll('ul >li>figure>figcaption>a.bikes__gallery-link');
const darkThemeTrainingLink = document.querySelectorAll('ul >li>a.training__link');
darkThemeButn.addEventListener('click', () => {
    darkThemeButn.classList.toggle('footer__switch-btn_active');
    document.querySelector('.header__menu').classList.toggle('header__menu_dark-theme');
    darkTheme(darkThemeHeaderLink, 'header__link_dark-theme');
    document.querySelector('.content').classList.toggle('content_dark-theme');
    document.querySelector('.main').classList.toggle('main_dark-theme');
    document.querySelector('.info__text-subtitle').classList.toggle('info__text-subtitle_dark-theme');
    document.querySelector('.motivation__text-prof').classList.toggle('motivation__text-prof_dark-theme');
    darkTheme(darkThemePlaceSubtitle, 'places__subtitle_dark-theme');
    document.querySelector('.places__btn').classList.toggle('places__btn_dark-theme');
    document.querySelector('.places__btn').classList.toggle('places__btn_dark-theme');
    darkTheme(darkThemeBikesHeadbtn, 'bikes__head-btn_dark-theme');
    darkTheme(darkThemeBikesGalleryLink, 'bikes__gallery-link_dark-theme');
    document.querySelector('.training__text').classList.toggle('training__text_dark-theme');
    darkTheme(darkThemeTrainingLink, 'training__link_dark-theme');
    document.querySelector('.footer').classList.toggle('footer_dark-theme');
    document.querySelector('.footer__email').classList.toggle('footer__email_dark-theme');
    document.querySelector('.footer__form').classList.toggle('footer__form_dark-theme');
    document.querySelector('.footer__logo').classList.toggle('footer__logo_dark-theme');
    document.querySelector('.footer__switch').classList.toggle('footer__switch_dark-theme');
    document.querySelector('.footer__form-btn').classList.toggle('footer__form-btn_dark-theme');
})

function darkTheme(lightClass, darkClass) {
    for (let i = 0; i < lightClass.length; i++) {
        lightClass[i].classList.toggle(darkClass);
    }
}