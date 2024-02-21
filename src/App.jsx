import { useEffect, useState } from "react";
import CreateToDo from "./components/CreateToDo";
import List from "./components/List";
import Tabs from "./components/Tabs";
import { tabs } from "./consts/tabs";
import { createToDoItem } from "./helpers/createToDoItem";
import { getFilteredItems } from "./helpers/getFilteredItems";

const storedTasks = JSON.parse(localStorage.getItem("tasks"));
const initialTasks = storedTasks === null ? [] : storedTasks;

function App() {
    const [currentTab, setCurrentTab] = useState(tabs[1]);
    const [tasks, setTasks] = useState(initialTasks);
    const [filtered, setFiltered] = useState(null);

    const addItemToList = (toDoText) => {
        const item = createToDoItem(tasks.length, toDoText);
        setTasks((prev) => [item, ...prev]);
    };

    const changeToDoStatus = (id) => {
        setTasks((prev) =>
            prev.map((item) =>
                item.id === id
                    ? {
                          ...item,
                          isDone: !item.isDone,
                      }
                    : item
            )
        );
    };

    const handleDeleteItem = (id) => {
        setTasks((prev) =>
            prev.map((item) =>
                item.id === id
                    ? {
                          ...item,
                          isDeleted: true,
                      }
                    : item
            )
        );
    };

    const handleRestoreItem = (id) => {
        setTasks((prev) =>
            prev.map((item) =>
                item.id === id
                    ? {
                          ...item,
                          isDone: false,
                          isDeleted: false,
                      }
                    : item
            )
        );
    };

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        setFiltered(getFilteredItems(currentTab, tasks));
    }, [currentTab, tasks]);

    return (
        <div className="wrapper">
            <CreateToDo createToDo={addItemToList} />
            <Tabs
                tabs={tabs}
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
            />
            {filtered && (
                <List
                    toDoItems={filtered}
                    handleStatusChange={changeToDoStatus}
                    handleDeleteItem={handleDeleteItem}
                    handleRestoreItem={handleRestoreItem}
                />
            )}
        </div>
    );
}

export default App;
