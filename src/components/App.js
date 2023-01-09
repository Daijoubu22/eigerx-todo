import AuthPage from "./AuthPage/AuthPage";
import { Route, Routes } from "react-router-dom";
import ToDoListPage from "./ToDoListPage/ToDoListPage";

function App() {
  return (
    <div className="app">
        <Routes>
            <Route path="/" element={<ToDoListPage />} />
            <Route path="/login" element={<AuthPage />} />
        </Routes>
    </div>
  );
}

export default App;
