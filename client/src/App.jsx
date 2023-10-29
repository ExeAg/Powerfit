import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TasksPage from "./pages/TasksPage";
import TaskFormPage from "./pages/TaskFormPage";
import ProfilePage from "./pages/ProfilePage";
import AlumnHomePage from "./pages/AlumnHomePage";
import ProfesorHomePage from "./pages/ProfesorHomePage";
import ChatPage from "./pages/ChatPage";
import CompFormPage from "./pages/CompFormPage";
import CompsPage from "./pages/CompsPage";

import ProtectedRoute from "./ProtectedRoute";
import { TaskProvider } from "./context/TasksContext";
import { CompProvider } from "./context/CompsContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <CompProvider>
          <BrowserRouter>
            <main className="container mx-auto px-10">
              <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/chat" element={<ChatPage />} />
                <Route path="/comps" element={<CompsPage />} />
                <Route path="/add-comp" element={<CompFormPage />} />
                <Route path="/comps/:id" element={<CompFormPage />} />

                <Route element={<ProtectedRoute />}>
                  <Route path="/tasks" element={<TasksPage />} />
                  <Route path="/add-task" element={<TaskFormPage />} />
                  <Route path="/tasks/:id" element={<TaskFormPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/Alumn" element={<AlumnHomePage />} />
                  <Route path="/Profesor" element={<ProfesorHomePage />} />
                </Route>
              </Routes>
            </main>
          </BrowserRouter>
        </CompProvider>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
