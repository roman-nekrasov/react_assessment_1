export const createToDoItem = (id, text) => {
    return {
        id,
        text,
        isDone: false,
        isDeleted: false,
    };
};
