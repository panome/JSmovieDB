/* Задания на урок:
3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
 */

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
        genre = document.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        form = document.querySelector('.add'),
        formInput = document.querySelector('.adding__input'),
        checkbox = document.querySelector('input[type=checkbox]'),
        btn = document.querySelector('button')

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

const addMovieFromDB = (selector) => {
    movieDB.movies.sort()
    movieDB.movies.forEach((item, i) => {
        selector.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${item}
                <div class="delete"></div>
            </li>
        `
    })
}
addMovieFromDB(movieList)

const addMovieFromForm = () => {
    btn.addEventListener('click', (e) => {
        let movieName = formInput.value,
            favorite = checkbox.checked

        e.preventDefault()

        if (movieName.length > 21) {
            movieName = movieName.substring(0, 22) + '...'
        }

        movieDB.movies.push(movieName)

        if(favorite) {
            console.log(`Pridal jste ${movieName} do oblibeneho!`)
        }

        movieList.innerHTML = ''
        addMovieFromDB(movieList)
        form.reset()
    })
}
addMovieFromForm()