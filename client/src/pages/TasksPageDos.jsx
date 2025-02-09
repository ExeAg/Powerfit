import { useEffect } from "react";
import { useTasks } from "../context/TasksContext";
import TaskcardDos from "../components/TaskcardDos";

function TasksPageDos() {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.length === 0) return (<h1>No hay rutinas ni dietas recibidas</h1>);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2"
      style={{ backgroundImage: `url(/images/imagenParaPagina.jpg)` }}
      >
      <div className="grid sm:grid-cols-2 md:grid-cols-1 gap-4">
        {tasks.map((task) => (
          <TaskcardDos task={task} key={task._id} />
        ))}
      </div>
    </div>
  );
}

export default TasksPageDos;