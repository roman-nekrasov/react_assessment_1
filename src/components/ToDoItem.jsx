const ToDoItem = ({
    id,
    text,
    isDone,
    isDeleted,
    handleStatusChange,
    handleDeleteItem,
    handleRestoreItem,
}) => {
    const type = isDone ? "done" : isDeleted ? "deleted" : "to-do";
    return (
        <div className={`toDoItem-wrapper ${type}`}>
            {!isDeleted && (
                <input
                    type="checkbox"
                    checked={isDone}
                    onChange={() => handleStatusChange(id)}
                />
            )}
            <p className={isDone ? "done" : ""}>{text}</p>
            <button
                className="ToDoItemButton"
                onClick={() => {
                    if (isDeleted) {
                        handleRestoreItem(id);
                    } else {
                        handleDeleteItem(id);
                    }
                }}
            >
                {isDeleted ? "Restore" : "Delete"}
            </button>
        </div>
    );
};

export default ToDoItem;
