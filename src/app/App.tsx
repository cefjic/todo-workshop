import { useState } from "react";
import Form from "../form/Form";
import Task from "../task/Task";
import { TaskInterface } from "./App.interfaces";

function App() {
  const [tasks, setTasks] = useState<TaskInterface[]>([]);

  const addTask = (content: string) => {
    setTasks([...tasks, { id: Date.now(), content }]);
  };

  const removeTask = (idToRemove: number) => {
    console.log("here");
    setTasks(tasks.filter(({ id }) => id !== idToRemove));
  };

  return (
    <div>
      <h1 className="w-50 m-auto mt-4">Ma todo list</h1>
      <div>
        {tasks.map((task) => (
          <Task task={task} removeTask={removeTask} />
        ))}
      </div>
      <Form addTask={addTask} />
    </div>
  );
}

export default App;
