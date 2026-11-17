import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TodoForm from "../components/TodoForm";

function TodoDetailPage({ todos, updateTodo }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const todo = todos.find((t) => t.id === Number(id));

  if (!todo) {
    return (
      <div className="container">
        <p>Tugas tidak ditemukan.</p>
        <button className="btn btn-primary" onClick={() => navigate("/")}>
          Kembali
        </button>
      </div>
    );
  }

  const handleUpdate = (data) => {
    updateTodo(todo.id, data);
    setShowForm(false);
  };

  return (
    <div className="detail-wrapper">
      <div className="detail-card">
        <div className="detail-left">
          <h4>Judul</h4>
          <p>{todo.title}</p>

          <h4>Deskripsi</h4>
          <p className="detail-desc">{todo.description}</p>
        </div>

        <div className="detail-right">
          <h4>Status</h4>
          <p>{todo.status}</p>

          <h4>Prioritas</h4>
          <p>{todo.priority}</p>

          <h4>Deadline</h4>
          <p>{todo.deadline}</p>

          <div className="detail-actions">
            <button className="btn btn-danger" onClick={() => navigate("/")}>
              Kembali
            </button>
            <button className="btn btn-primary" onClick={() => setShowForm(true)}>
              Update
            </button>
          </div>
        </div>
      </div>

      {showForm && (
        <TodoForm
          title="Update Todo"
          initialData={todo}
          onSubmit={handleUpdate}
          onCancel={() => setShowForm(false)}
        />
      )}
    </div>
  );
}

export default TodoDetailPage;