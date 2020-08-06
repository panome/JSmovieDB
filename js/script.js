/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)+

2) Изменить жанр фильма, поменять "комедия" на "драма"+

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const   adv = document.querySelector('.promo__adv'),
        advImg = adv.querySelectorAll('img'),
        background = document.querySelector('.promo__bg'),
        genre = document.querySelector('.promo__genre')

const deleteAdv = (selector) => {
    selector.forEach(item => {
        item.remove()
    })
}
deleteAdv(advImg)

const changeGenre = (selector) => {
    selector.innerHTML = 'drama'
}
changeGenre(genre)

const changeBackground = (selector) => {
    selector.style.backgroundImage = 'url(./img/bg.jpg)'
}
changeBackground(background)