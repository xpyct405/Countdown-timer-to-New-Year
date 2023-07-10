let header = document.querySelector('.header');
let daysEl = document.getElementById('days');
let hoursEl = document.getElementById('hours');
let minsEl = document.getElementById('mins');
let secondsEl = document.getElementById('seconds');

// тут можно указать любую дату!
let date = '1 Jan 2024';

function countdown() {
    let newYearDate = new Date(date);
    let currentDate = new Date()
    // console.log(newYearDate, currentDate);

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

    // console.log(days, hours, mins, seconds);

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time
}

setInterval(countdown, 1000)



// Popular Holidays

let btnNy = document.querySelector('.btn-ny');
let btnGd = document.querySelector('.btn-gd');
let btnSp = document.querySelector('.btn-sp');
let btnId = document.querySelector('.btn-id');
let btnHw = document.querySelector('.btn-hw');
let btnCs = document.querySelector('.btn-cs');

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




// function getDate() {
//     let date = document.querySelector('#date')

//     let newDiv = document.createElement('div');
//     newDiv.classList.add('div')
//     document.querySelector('.input-container').appendChild(newDiv)
//     newDiv.innerHTML = date.value;

//     return;
// }
// console.log(date.value);