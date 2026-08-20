import { useEffect, useState } from "react";
import { format } from "date-fns";

function AppointmentList({ selectedDate }) {
  const [appoiments, setAppoiments] = useState([]);

  const supabaseURL = import.meta.env.VITE_SUPABASE_URL;
  const supabaseKEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
  const formattedDate = format(selectedDate, "yyyy-MM-dd");
  const appointmentsURL =
    `${supabaseURL}/rest/v1/appointments` +
    `?date=eq.${formattedDate}` +
    `&select=*,clients(*)`;

  useEffect(() => {
    async function loadAppointments() {
      const response = await fetch(appointmentsURL, {
        headers: {
          apikey: supabaseKEY,
        },
      });
      const data = await response.json();
      console.log(data);
      setAppoiments(data);
    }

    loadAppointments();
  }, [selectedDate]);

  return (
    <>
      <div>
        {appoiments.length === 0 ? (
          <p>Записей нет</p>
        ) : (
          appoiments.map((appoiments) => (
            <div key={appoiments.id}>
              <p>{appoiments.time}</p>
              <p>{appoiments.clients?.name}</p>
              <p>{appoiments.procedure}</p>
              <p>{appoiments.clients?.phone}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default AppointmentList;
