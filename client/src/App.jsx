import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CompositionsPage from "./pages/CompositionsPage";
import CompositionFormPage from "./pages/CompositionFormPage";
import TasksPage from "./pages/TasksPage";
import TaskFormPage from "./pages/TaskFormPage";
import ProfilePage from "./pages/ProfilePage";
import AlumnHomePage from "./pages/AlumnHomePage";
import ModificarClientePage from "./pages/ModificarClientePage";
import ChatPage from "./pages/ChatPage";
import TasksPageDos from "./pages/TasksPageDos";
import QuienesSomos from "./pages/QuienesSomosPage";
import Testimonios from "./pages/Testimonios";
import Desmostracion from "./pages/Demostracion";
import Contactenos from "./pages/Contactenos";

import GraficoPage from "./pages/GraficoPage";

import ProtectedRoute from "./ProtectedRoute";
import { TaskProvider } from "./context/TasksContext";
import { CompositionProvider } from "./context/CompositionsContext"; //Recién agregado
import Navbar from "./components/Navbar";


function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <CompositionProvider>
          <BrowserRouter>
            <main className="container mx-auto px-10">
              <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/chat" element={<ChatPage />} />
                <Route path="/grafico" element={<GraficoPage />} />
                <Route path="/tasks" element={<TasksPage />} />
                <Route path="/tasksDos" element={<TasksPageDos />} />
                <Route path="/compositions" element={<CompositionsPage />} />
                <Route path="/quienessomos" element={<QuienesSomos />} />
                <Route path="/testimonios" element={<Testimonios />} />
                <Route path="/demostracion" element={<Desmostracion />} />
                <Route path="/contactenos" element={<Contactenos />} />

                <Route element={<ProtectedRoute />}>
                  <Route path="/grafico/:id" element={<GraficoPage />} />
                  <Route path="/add-grafico" element={<GraficoPage />} />
                  <Route path="/add-composition" element={<CompositionFormPage />}
                  /><Route path="/compositions/:id" element={<CompositionFormPage />}
                  />

                  <Route path="/add-task" element={<TaskFormPage />} />
                  <Route path="/tasks/:id" element={<TaskFormPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/Alumn" element={<AlumnHomePage />} />
                  <Route path="/modificar" element={<ModificarClientePage />} />
                </Route>
              </Routes>
            </main>
          </BrowserRouter>
        </CompositionProvider>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
