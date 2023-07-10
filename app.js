let daysEl = document.getElementById('days');
let hoursEl = document.getElementById('hours');
let minsEl = document.getElementById('mins');
let secondsEl = document.getElementById('seconds');

// тут можно указать любую дату!
const newYear = '1 Jan 2024';

function countdown() {
    let newYearDate = new Date(date.value);
    let currentDate = new Date()
    console.log(newYearDate, currentDate);

    // Ниже значение в миллиисекундах, делим на 1000. Сттолько всего секунд до нг!
    let totalSecods = Math.floor((newYearDate - currentDate) / 1000)

    // В одном дне 3600сек * 24часа = 86400 секунд
    let days = Math.floor(totalSecods / 3600 / 24)
    // В одном часе 3600сек, оставляем остаток после деления на 24 часа
    let hours = Math.floor(totalSecods / 3600) % 24
    // В одной минуте 60 сек и оставляем остаток после деления на 60 минут
    let mins = Math.floor(totalSecods / 60) % 60
    // Оставляем  остаток после деления на 60 секунд
    let seconds = Math.floor(totalSecods) % 60

    console.log(days, hours, mins, seconds);

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time
}

setInterval(countdown, 1000)


function getDate() {
    let date = document.querySelector('#date')

    let newDiv = document.createElement('div');
    newDiv.classList.add('div')
    document.querySelector('.input-container').appendChild(newDiv)
    newDiv.innerHTML = date.value;

    return;
    console.log(date.value);
}
// getDate()
console.log(date.value);