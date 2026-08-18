import "./SelectedDayInfo.css";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

function SelectedDayInfo({ selectedDate }) {
  const date = format(selectedDate, "d, MMMM, EEEE", { locale: ru });
  return <div>{date}</div>;
}

export default SelectedDayInfo;
