import { useEffect, useState } from "react";
import Bottom from "./Bottom";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function Middle() {
  const [day, SetDay] = useState("");
  const [month, SetMonth] = useState("");
  const [date, SetDate] = useState(0);
  const [tasks, setTask] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTask((prevTasks) => [...prevTasks, newTask]);
      setNewTask("");
    }
  }

  function handleDelete(indexToRemove: number) {
    setTask((prevTasks) =>
      prevTasks.filter((_, index) => index !== indexToRemove)
    );
  }

  function handleEdit(indexToEdit: number, newTask: string) {
    setTask((prevTasks) =>
      prevTasks.map((task, index) => (index === indexToEdit ? newTask : task))
    );
  }

  useEffect(() => {
    const now = new Date();
    SetDay(days[now.getDay()]);
    SetMonth(months[now.getMonth()]);
    SetDate(now.getDate());
  }, []);

  return (
    <>
      <div className="row p-5">
        <div className="col">
          <p>
            <strong>Today's task</strong>
          </p>
          <p>
            <em>
              {day}, {date} {month}
            </em>
          </p>
        </div>
        <div className="col d-flex flex-column justify-content-center">
          <>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                T
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Take out the trash..."
                aria-describedby="basic-addon1"
                value={newTask}
                onChange={handleInputChange}
              />
            </div>
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => addTask()}
            >
              Add
            </button>
          </>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="card w-50">
          <Bottom
            tasks={tasks}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </div>
      </div>
    </>
  );
}
