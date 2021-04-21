// Блок данных
const lang = {
    ru: {
        id: 0,
        name: 'RU'
    },
    en: {
        id: 1,
        name: 'EN'
    }
}
const week = [
    ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
]
const persons = {
    Salima: {
        name: 'Салима',
        title: 'Студент'
    },
    Artem: {
        name: 'Артем',
        title: 'Директор'
    },
    Maxim: {
        name: 'Максим',
        title: 'Преподаватель'
    },
    Default: {
        name: 'name',
        title: 'Студент'
    }
}

const selectLang = 'en';

// Задание 2.А
// Переменная lang может принимать 2 значения: 'ru' 'en'.
// Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке.
// Решите задачу
// 1. через if,
// 2. через switch-case
// 3. через многомерный массив без ифов и switch.

// 1. через if
if (selectLang == lang.ru.name.toLowerCase()) {
    console.log(week[lang.ru.id])
}
if (selectLang == lang.en.name.toLowerCase()) {
    console.log(week[lang.en.id])
}

// 2. через switch-case
switch (selectLang) {
    case 'en':
        console.log(week[lang.en.id])
        break;
    case 'ru':
        console.log(week[lang.ru.id])
        break;
    default:
        console.log(week[lang.ru.id])
}

// 3. через многомерный массив без ифов и switch
const index = lang.ru.id
console.log(week[index])

// Задание 2.Б
// У нас есть переменная namePerson.
// Если значение этой переменной “Артем” то вывести в консоль “директор”,
// если значение “Максим” то вывести в консоль “преподаватель”,
// с любым другим значением вывести в консоль “студент”
// Решить задачу с помощью нескольких тернарных операторов,
// без использования if или switch

const namePerson = persons['Artem'].name;
const title = namePerson === persons['Artem'].name ?
    persons['Artem'].title :
    namePerson === persons['Maxim'].name ?
    persons['Maxim'].title :
    persons['Default'].title;
console.log(title)