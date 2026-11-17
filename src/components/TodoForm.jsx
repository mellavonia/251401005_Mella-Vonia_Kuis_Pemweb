import { useState } from "react";
import { statuses, priorities } from "../data/todos";

const emptyForm = {
  title: "",
  description: "",
  priority: "low",
  deadline: "",
  status: "to-do",
};

function TodoForm({ title, initialData, onSubmit, onCancel }) {
  const [form, setForm] = useState(initialData || emptyForm);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    onSubmit(form);
  };

  return (
    <div className="overlay">
      <form className="modal" onSubmit={handleSubmit}>
        <h2>{title}</h2>

        <label>
          Judul
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Deskripsi
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows="3"
          />
        </label>

        <div className="row">
          <label>
            Status
            <select name="status" value={form.status} onChange={handleChange}>
              {statuses.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </label>

          <label>
            Prioritas
            <select
              name="priority"
              value={form.priority}
              onChange={handleChange}
            >
              {priorities.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label>
          Deadline
          <input
            type="date"
            name="deadline"
            value={form.deadline}
            onChange={handleChange}
          />
        </label>

        <div className="actions">
          <button type="button" className="btn btn-danger" onClick={onCancel}>
            Batal
          </button>
          <button type="submit" className="btn btn-primary">
            {title.includes("Update") ? "Update" : "Tambah"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoForm;