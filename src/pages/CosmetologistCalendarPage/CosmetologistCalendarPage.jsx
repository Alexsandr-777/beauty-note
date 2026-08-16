import { useState } from "react";
import MonthSelector from "./MonthSelector/MonthSelector";
import SelectedDayInfo from "./SelectedDayInfo/SelectedDayInfo";

import "./CosmetologistCalendarPage.css";

function CosmetologistCalendarPage() {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);
  const changeDate = (newDate) => {
    setSelectedDate(newDate);
  }; // получаем выбранную юзером дату через аргумент, ( onSelect={changeDate})

  console.log(today);
  return (
    <main className="cosmetologistCalendarContainer">
      <MonthSelector selectDate={selectedDate} changeDate={changeDate} />
      <SelectedDayInfo selectDate={selectedDate} />
    </main>
  );
}

export default CosmetologistCalendarPage;
