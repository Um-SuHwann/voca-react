import { useEffect, useState } from "react";
import useFetch from "../hooks/userFetch";
export default function CreateDay() {
  const initialDays = useFetch("http://localhost:3001/days");
  const [days, setDays] = useState([]);
  function addDay() {
    const newDay = { day: days.length + 1, id: days.length + 1 };
    fetch(`http://localhost:3001/days/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDay),
    }).then((res) => {
      if (res.ok) {
        alert("생성이 완료 되었씁니다!");
        setDays([...days, newDay]);
      }
    });
  }
  useEffect(() => {
    if (initialDays) {
      setDays(initialDays);
    }
  }, [initialDays]);
  return (
    <div>
      <h3>현재 일수 : {days.length}일</h3>
      <button onClick={addDay}>Day 추가</button>
    </div>
  );
}
