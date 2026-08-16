//используем библиотеку day-picker -  календарь
import "./MonthSelector.css";
import "react-day-picker/style.css";
import { DayPicker } from "react-day-picker"; //Библиотека с календарем
import { useState } from "react";

function MonthSelector({ selectDate, changeDate }) {
  const [month, setMonth] = useState(selectDate); // для переключения месяцев
  const [calendarIsOpen, setCalendarIsOpen] = useState(false); //флаг для закрытия или открытия(отображения календаря)

  // текущая или выбранная дата, отформатирована
  const date = selectDate
    .toLocaleString("ru-Ru", {
      month: "long",
      year: "numeric",
    })
    .replace("г.", "");
  const formattedDate = date[0].toUpperCase() + date.slice(1);

  const handleClick = () => {
    setCalendarIsOpen((prev) => !prev);
  };

  return (
    <>
      <div>
        {formattedDate}
        <button onClick={handleClick}>{calendarIsOpen ? "⬆️" : "⬇️"}</button>
      </div>
      {calendarIsOpen && (
        <DayPicker
          animate
          mode="single"
          selected={selectDate} //. сегодняшняя -по умолчанию
          onSelect={changeDate} //передаем новую дату через аргумент
          month={month}
          onMonthChange={setMonth} //для смены месяца чтобы работали стрелки смены
          components={{
            CaptionLabel: () => null, //убираем тексt календаря который стоит по умолчанию
          }}
        />
      )}
    </>
  );
}

export default MonthSelector;
