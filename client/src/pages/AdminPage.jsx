import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import UserList from "../components/UserList";
function TasksPage() {
  const { getUsers, users } = useAuth();

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <UserList users={users}/>
    </div>
  );
}

export default TasksPage;