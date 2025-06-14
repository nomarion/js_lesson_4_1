'use strict';

const WHAT_YOUR_NAME_MESSAGE = 'Как тебя зовут?';
const EXIT_MESSAGE = 'Все? Жаль(';
const EMPTY_NAME_ERROR_MESSAGE = 'Так не пойдет! Надо указать имя!';
const NUMBER_NAME_ERROR_MESSAGE = 'Не похоже на имя. Попробуй еще разок!';

const helloMessage = (name) => `Hello, ${name}! How are you?`

const askNameAndSayHi = () => {
    const userName = prompt(WHAT_YOUR_NAME_MESSAGE);

    if (userName === null) {
        alert(EXIT_MESSAGE);
        return;
    }

    if (userName.trim() === '') {
        alert(EMPTY_NAME_ERROR_MESSAGE);
        return askNameAndSayHi()
    }

    if (!checkString(userName)) {
        alert(NUMBER_NAME_ERROR_MESSAGE)
        return askNameAndSayHi()
    }
    alert(helloMessage(userName));
}

const checkString = (value) => {
    return /^[a-zA-Zа-яА-ЯёË]{3,}$/.test(value)
}

askNameAndSayHi()