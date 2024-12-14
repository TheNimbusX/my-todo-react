import { useState } from "react";
import DeleteButton from "../DeleteButton/DeleteButton";
import TodoInput from "../TodoInput/TodoInput";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.scss";
import { Tabs, Tab, Card } from "@nextui-org/react";
import { TASKS } from "../../data/tasks";

export default function TodoList() {
  const [todoState, setState] = useState(TASKS);

  const deleteCompletedTasks = () => {
    setState(todoState.filter((task) => !task.isDone));
  };

  const deleteTask = (id: number) => {
    setState(todoState.filter((task) => task.id !== id));
  };

  const toggleTask = (id: number) => {
    setState((prevState) =>
      prevState.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const addTask = (title: string) => {
    const newTask = {
      id: todoState.length > 0 ? todoState[todoState.length - 1].id + 1 : 1,
      title,
      isDone: false,
    };

    setState([...todoState, newTask]);
  };

  return (
    <div className="todolist-wrapper">
      <TodoInput onAddTask={addTask} />
      <div className="flex w-full h-full overflow-x-hidden flex-col-reverse justify-between ">
        <Tabs aria-label="Options">
          <Tab key="all" title="Все">
            <Card className="shadow-none rendered-card">
              {todoState.length === 0 ? (
                <p className="none-tasks">Ура! Задач нет, совсем</p>
              ) : (
                todoState.map((task) => (
                  <TodoItem
                    key={task.id}
                    title={task.title}
                    isDone={task.isDone}
                    onToggleTask={() => toggleTask(task.id)}
                    onDeleteTask={() => deleteTask(task.id)}
                  />
                ))
              )}
            </Card>
          </Tab>

          <Tab key="active" title="Активные">
            <Card className="shadow-none overflow-y-scroll rendered-card">
              {todoState.filter((task) => !task.isDone).length === 0 ? (
                <p className="none-tasks">Активных задач нет, к счастью</p>
              ) : (
                todoState.map((task) =>
                  task.isDone ? null : (
                    <TodoItem
                      key={task.id}
                      title={task.title}
                      isDone={task.isDone}
                      onToggleTask={() => toggleTask(task.id)}
                      onDeleteTask={() => deleteTask(task.id)}
                    />
                  )
                )
              )}
            </Card>
          </Tab>

          <Tab key="completed" title="Выполненные">
            <Card className="shadow-none rendered-card">
              {todoState.filter((task) => task.isDone).length === 0 ? (
                <p className="none-tasks">Пока нет выполненных задач :(</p>
              ) : (
                todoState.map((task) =>
                  task.isDone ? (
                    <TodoItem
                      key={task.id}
                      title={task.title}
                      isDone={task.isDone}
                      onToggleTask={() => toggleTask(task.id)}
                      onDeleteTask={() => deleteTask(task.id)}
                    />
                  ) : null
                )
              )}
            </Card>
          </Tab>

          <Tab>
            <DeleteButton onDeleteCompleted={deleteCompletedTasks} />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
