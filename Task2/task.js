function getDayInfo(date) {
    //преобразование даты в форму dd.mm.yyyy
    let newData = date.replace(/(\d+[.])(\d+[.])/, '$2$1');

    let data = new Date(newData); //дата в новой форме, с которой продолжаем работать
    let month = data.getMonth();
    let dayOfWeek = data.getDay();
    let year = data.getFullYear();

    //определение начала недели с понедельника, а не с воскресенья
    let monthStartDate = new Date(year, month, 1);
    let day_ = monthStartDate.getDay();
    let date_ = data.getDate();

    //вспомогательные массивы
    let dayNames = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];
    let monthNamesGenitive = ["Января","Февраля","Марта","Апреля","Мая","Июня","Июля",
        "Августа","Сентября","Октября","Ноября","Декабря" ];

    return (dayNames[dayOfWeek] + ", " + Math.ceil((date_ + day_ - 1)/ 7) + " неделя "
        + monthNamesGenitive[month] + " "+ year + " года");

}

console.log(getDayInfo("15.12.2021"));
console.log(getDayInfo("01.01.2022"));
console.log(getDayInfo("20.12.2021"));
