const date = document.querySelector('.timer__desc > span');
const days = document.querySelector('.card__days span');
const hours = document.querySelector('.card__hours span');
const minutes = document.querySelector('.card__min span');
const seconds = document.querySelector('.card__sec span');

let today = new Date();
let eventDate = new Date(today.setDate(today.getDate() + 30));

date.innerHTML = getEventDate();

function getEventDate() {
    let day = eventDate.getDate();
    let month = eventDate.getMonth();
    let year = eventDate.getFullYear();
    let monthes = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov', 'Dec'];
    return `${day} ${monthes[month]} ${year}`;
}

function timer() {
    let diff = new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate()) - new Date();

    if (diff <= 0) {
        clearInterval(timer);
    }
    let day = Math.floor(diff / 1000 / 60 / 60 / 24);
    let hour = Math.floor((diff / 1000 / 60 / 60) % 24);
    let min = Math.floor((diff / 1000 / 60 ) % 60);
    let sec = Math.floor((diff / 1000) % 60);
    days.innerHTML = day < 10 ? '0' + day : day;
    hours.innerHTML = hour < 10 ? '0' + hour : hour;
    minutes.innerHTML = min < 10 ? '0' + min : min;
    seconds.innerHTML = sec < 10 ? '0' + sec : sec;
}

setInterval(timer, 1000);
