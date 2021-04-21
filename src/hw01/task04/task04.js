// Задание 4
// Создать массив arr = []
// Записать в него 7 любых многозначных чисел в виде строк
// Вывести в консоль только те, что начинаются с цифры 2 или 4 (Должны присутствовать в массиве)
// Вывести в столбик все простые числа от 1 до 100
// Рядом с каждым числом написать оба делителя данного числа
// Например: “Делители этого числа: 1 и n
const arr = [
    '679876589',
    '4892',
    '9385',
    '29793',
    '4038',
    '8934',
    '41827'
]

arr.forEach((item) => {
    if (item.startsWith('2') || item.startsWith('4')) {
        console.log(item);
    }
})

const aa = arr.filter(item => (item.startsWith('2') || item.startsWith('4')))
console.log(aa)

for (var i = 2; i <= 100; i++) {
    let flag = 0;
    for (var j = 2;
        (j ** 2 <= i) && (flag == 0); j++) {
        if (i % j == 0) {
            flag = 1
        };
    }
    if (flag == 0) {
        console.log(`Делители числа ${i}: 1 и ` + i)
    }
}