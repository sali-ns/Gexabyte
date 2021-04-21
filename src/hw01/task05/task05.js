const week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
for (var i = 0; i < 7; i++) {
    if (i == 5 || i == 6) {
        console.log(week[i].italics())
    } else if (new Date().getDay() == i) {
        console.log(week[i].bold());
    } else {
        console.log(week[i])
    }
}