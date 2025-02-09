import { useEffect } from "react";
import { useTasks } from "../context/TasksContext";
import Taskcard from "../components/Taskcard";

function TasksPage() {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.length === 0) return (<h1>No hay rutinas ni dietas enviadas</h1>);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2"
      style={{ backgroundImage: `url(/images/imagenParaPagina.jpg)` }}
    >
      <div className="grid sm:grid-cols-2 md:grid-cols-1 gap-4">
        {tasks.map((task) => (
          <Taskcard task={task} key={task._id} />
        ))}
      </div>
    </div>
  );
}

export default TasksPage;
