import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function BookCalendar() {
  const [date, setDate] = useState(new Date());
  
  const onChange=()=>{
    setDate(date)
  }

  return (
    <div>
      <Calendar onChange={onChange} value={date} />
    </div>
  );
}