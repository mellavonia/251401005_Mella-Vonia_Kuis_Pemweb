import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoListPage from "./pages/TodoListPage";
import TodoDetailPage from "./pages/TodoDetailPage";
import { initialTodos } from "./data/todos";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [toast, setToast] = useState("");

  // Notifikasi hilang otomatis setelah 2,5 detik
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(""), 2500);
    return () => clearTimeout(timer);
  }, [toast]);

  const addTodo = (data) => {
    const newId = todos.length ? Math.max(...todos.map((t) => t.id)) + 1 : 1;
    setTodos([...todos, { ...data, id: newId }]);
    setToast("Tugas baru berhasil ditambahkan");
  };

  const updateTodo = (id, data) => {
    setTodos(todos.map((t) => (t.id === id ? { ...data, id } : t)));
    setToast("Tugas berhasil diperbarui");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
    setToast("Tugas berhasil dihapus");
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <TodoListPage
              todos={todos}
              addTodo={addTodo}
              deleteTodo={deleteTodo}
            />
          }
        />
        <Route
          path="/todo/:id"
          element={<TodoDetailPage todos={todos} updateTodo={updateTodo} />}
        />
      </Routes>

      {toast && <div className="toast">{toast}</div>}
    </BrowserRouter>
  );
}

export default App;