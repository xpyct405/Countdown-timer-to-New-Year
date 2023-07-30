let header = document.querySelector('.header');
let daysEl = document.getElementById('days');
let hoursEl = document.getElementById('hours');
let minsEl = document.getElementById('mins');
let secondsEl = document.getElementById('seconds');


// тут можно указать любую дату! по умолчанию НГ
let date = '1 Jan 2024';

function countdown() {
    let myDate = new Date(date);
    let currentDate = new Date()
    // console.log(newYearDate, currentDate);

    // Ниже значение в миллиисекундах, делим на 1000. Столько всего секунд до нг!
    let totalSeconds = Math.floor((myDate - currentDate) / 1000)

    // В одном дне 3600сек * 24часа = 86400 секунд
    let days = Math.floor(totalSeconds / 3600 / 24)
    // В одном часе 3600сек, оставляем остаток после деления на 24 часа
    let hours = Math.floor(totalSeconds / 3600) % 24
    // В одной минуте 60 сек и оставляем остаток после деления на 60 минут
    let mins = Math.floor(totalSeconds / 60) % 60
    // Оставляем  остаток после деления на 60 секунд
    let seconds = Math.floor(totalSeconds) % 60

    // console.log(days, hours, mins, seconds);

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

}

function formatTime(time) {
    return time < 10 && time > 0 ? (`0${time}`) : time
}

// Изменения функции countdown будет каждую 1 секунду
setInterval(countdown, 1000)



// Popular Holidays
let btnNy = document.querySelector('.btn-ny');
let btnGd = document.querySelector('.btn-gd');
let btnSp = document.querySelector('.btn-sp');
let btnId = document.querySelector('.btn-id');
let btnHw = document.querySelector('.btn-hw');
let btnCs = document.querySelector('.btn-cs');
let allBtns = document.querySelectorAll('button');

btnNy.addEventListener('click', () => {
    header.innerHTML = 'New Year 2024';
    date = '1 Jan 2024';
})
btnGd.addEventListener('click', () => {
    header.innerHTML = 'Groundhog Day 2024';
    date = '2 Feb 2024';
})
btnSp.addEventListener('click', () => {
    header.innerHTML = "Saint Patrick's Day 2024";
    date = '18 Mar 2024';
})
btnId.addEventListener('click', () => {
    header.innerHTML = "Independence Day 2024";
    date = '4 July 2024';
})
btnHw.addEventListener('click', () => {
    header.innerHTML = "Halloween 2024";
    date = '31 Oct 2024';
})
btnCs.addEventListener('click', () => {
    header.innerHTML = "Christmas 2024";
    date = '25 Dec 2024';
})


// Lets choose any day
let chooseContainer = document.querySelector('.input-container');
let btnChoose = document.querySelector('.btn-choose');
let inputDate = document.querySelector('#date');
let modal = document.querySelector(".modal");

// Активируем модальное окно
btnChoose.addEventListener('click', () => {
    modal.style.display = "block"
})

// НЕОБХОДИМО СДЕЛАТЬ УСЛОВИЕ ЧТО ЭТО РАБОТАЕТ ТОЛЬКО ЕСЛИ МОДАЛЬНОЕ ОКНО ЗАПУЩЕНО
if (modal.style.display = "block") {}
// Убираем модальное окно при клике по любой кнопке кроме последней
for (let i = 0; i < allBtns.length - 1; i++) {
    allBtns[i].addEventListener('click', () => {
        modal.style.display = "none"
        console.log(allBtns[i]);
    })
}


// Обработка события по клику вне окна. Те при клике по модальному окну будет изменяться display у модального окна. А модальное окно будет на весь экран!! кроме input и кнопок (z-index меньше)
window.addEventListener('click', function (event) {
    console.log(event.target);
    if (event.target == modal) {
        modal.style.display = "none"
    }
})

// change отслеживает любое изменение и изменяется value при потере фокуса. Можно использоваться input но значение будет меняться быстро слишком даже при пролистывании
inputDate.addEventListener('change', () => {
    date = inputDate.value;
    header.innerHTML = 'Your day in'
    console.log(date);
    // Делаем отображение none
    modal.style.display = "none"
})

// По умолчанию делаем отображение none
modal.style.display = "none"