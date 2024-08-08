import { useState } from "react";

export default function Bottom({
  tasks,
  handleDelete,
  handleEdit,
}: {
  tasks: string[];
  handleDelete: (indexToRemove: number) => void;
  handleEdit: (indexToEdit: number, newTask: string) => void;
}) {
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");

  const startEditing = (index: number, task: string) => {
    setEditIndex(index);
    setEditValue(task);
  };

  const saveEdit = () => {
    if (editIndex !== null && editValue.trim() !== "") {
      handleEdit(editIndex, editValue);
      setEditIndex(null);
    }
  };

  return (
    <div className="overflow-auto mh-30">
      <ul className="list-group list-group-numbered">
        {tasks.map((task, index) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={index}
          >
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  className="form-control"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <button className="btn btn-primary" onClick={saveEdit}>
                  Save
                </button>
              </>
            ) : (
              <>
                <span>{task}</span>
                <div>
                  <button
                    className="rounded btn btn-info me-2"
                    onClick={() => startEditing(index, task)}
                  >
                    Edit
                  </button>
                  <button
                    className="rounded btn btn-danger"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
