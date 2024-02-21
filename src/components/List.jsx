import ToDoItem from "./ToDoItem";

const List = ({
    toDoItems,
    handleStatusChange,
    handleDeleteItem,
    handleRestoreItem,
}) => {
    return (
        <div className="itemsListWrapper">
            {toDoItems.map(({ id, text, isDone, isDeleted }) => (
                <ToDoItem
                    key={id}
                    id={id}
                    text={text}
                    isDone={isDone}
                    isDeleted={isDeleted}
                    handleStatusChange={handleStatusChange}
                    handleDeleteItem={handleDeleteItem}
                    handleRestoreItem={handleRestoreItem}
                />
            ))}
        </div>
    );
};

export default List;
