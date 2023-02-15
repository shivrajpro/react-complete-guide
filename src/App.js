import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/use-http";

function App() {
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    const transformTasks = (tasksObj) => {
      const loadedTasks = [];

      for (const taskKey in tasksObj) {
        loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
      }

      setTasks(loadedTasks);
    };
  
    fetchTasks(
      { url: "https://react-http-f2187-default-rtdb.firebaseio.com/tasks.json"},
      transformTasks
    );

  }, [fetchTasks]);
  // If we specify only fetchTasks reference here in the dependency
  // it will lead to an inifinite loop of API calls because the reference of fetchTasks
  // keeps on changing after every request as its an async function
  // to avoid this - we must wrap the async function in useHttp hook
  // in useCallback hook which returns the same reference after an API call
  // and this useEffect hoook does not go in infinite loop

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
