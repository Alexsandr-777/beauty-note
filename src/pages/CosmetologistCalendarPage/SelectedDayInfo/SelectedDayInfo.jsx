//Используем библиотеку для работы с датами date-fns
//принцип компонента- 7 карточек дней недели, сегодняшняя дата выделяется, смысл в том чтобы отобразить всю неделю

import "./SelectedDayInfo.css";
import { shortWeekDay } from "../data/shortWeekDay";
import { addDays, startOfWeek } from "date-fns";

function SelectedDayInfo({ selectDate }) {
  const WEEKDAYS = [0, 1, 2, 3, 4, 5, 6]; //Создаем массив сколько дней от понедельника 0-понедельлник, вторник +1 и тд .. воскр это  +6
  const weekStart = startOfWeek(selectDate, {
    weekStartsOn: 1,
  }); //startOfWeek- это функция из библиотеки , с параметрами(дата и опции) опция тут  weekStartsOn: 1,тоесть определяем старт -- это будет понедельник

  const week = WEEKDAYS.map((day) => {
    return addDays(weekStart, day);
  }); //туту мапаем, через фунцкцию addDays(из библиотеки) определяем дни. Старт с понедельника,weekStart- исходная дата, day- сколько дней прибавить.

  return (
    <>
      <div className="dayContainer">
        {week.map((day) => {
          const weekDayName = day
            .toLocaleString("ru-Ru", {
              weekday: "long",
            })
            .toLowerCase(); //перебираем массив week для каждой даты получаем полное название дня недели на русском.

          const shortDay = shortWeekDay[weekDayName]; //подставляем свойства в лбъект и вытаскиваем сокращенные значения(ПН, ВТ и тд)
          const dayNumber = day.getDate(); //получаем число месяца у текущего day из массива недели.Тоесть актуальное число для дня недели месяца
          return (
            //запихиваем в разметку
            <div key={day.getTime()} className="dayCard">
              <div>{shortDay}</div>
              <div>{dayNumber}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SelectedDayInfo;
