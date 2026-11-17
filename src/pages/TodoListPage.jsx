import { useState } from "react";
import { Link } from "react-router-dom";
import TodoForm from "../components/TodoForm";
import ConfirmDialog from "../components/ConfirmDialog";

function TodoListPage({ todos, addTodo, deleteTodo }) {
  const [showForm, setShowForm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const handleAdd = (data) => {
    addTodo(data);
    setShowForm(false);
  };

  const handleDelete = () => {
    deleteTodo(deleteId);
    setDeleteId(null);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Todo List</h1>
        <button className="btn btn-primary" onClick={() => setShowForm(true)}>
          Tambah Todo
        </button>
      </div>

      <table className="todo-table">
        <thead>
          <tr>
            <th>Judul</th>
            <th>Status</th>
            <th>Prioritas</th>
            <th>Deadline</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.title}</td>
              <td>{todo.status}</td>
              <td>{todo.priority}</td>
              <td>{todo.deadline}</td>
              <td>
                <div className="action-buttons">
                  <Link to={`/todo/${todo.id}`} className="btn btn-small">
                    Lihat
                  </Link>
                  <button
                    className="btn btn-danger btn-small"
                    onClick={() => setDeleteId(todo.id)}
                  >
                    Hapus
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && (
        <TodoForm
          title="Tambah Todo"
          onSubmit={handleAdd}
          onCancel={() => setShowForm(false)}
        />
      )}

      {deleteId !== null && (
        <ConfirmDialog
          message="Hapus tugas ini?"
          onConfirm={handleDelete}
          onCancel={() => setDeleteId(null)}
        />
      )}
    </div>
  );
}

export default TodoListPage;