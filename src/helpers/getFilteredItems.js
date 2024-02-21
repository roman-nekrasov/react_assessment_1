import { tabs } from "../consts/tabs";

export const getFilteredItems = (tab, tasks) => {
    switch (tab) {
        case tabs[0]: // "All"
            return tasks.filter(({ isDeleted }) => !isDeleted);
        case tabs[1]: // "To Do"
            return tasks.filter(
                ({ isDeleted, isDone }) => !isDeleted && !isDone
            );
        case tabs[2]: // "Done"
            return tasks.filter(
                ({ isDeleted, isDone }) => isDone && !isDeleted
            );
        case tabs[3]: // "Deleted"
            return tasks.filter(({ isDeleted }) => isDeleted);
        default:
            return tasks.filter(({ isDeleted }) => !isDeleted);
    }
};
