'use strict';

const WHAT_YOUR_NAME = 'Как тебя зовут?';
const EXIT = 'Все? Жаль(';
const EMPTY_NAME = 'Так не пойдет! Надо указать имя!';
const NUMBER_NAME = 'Не поможе на имя. Попробуй еще разок!';

const name = () => {
    const userName = prompt(WHAT_YOUR_NAME);

    if (userName === null) {
        alert(EXIT);
        return;
    }
    if (userName.trim() === '') {
        alert(EMPTY_NAME);
        name()
    }

    if (!checkString(userName)) {
        alert(NUMBER_NAME)
        name()
    }
    alert(`Hello, ${userName}! How are you?`)
}

const checkString = (value) => {
    return /[a-zA-Zа-яА-ЯёË]/.test(value)
}

name()