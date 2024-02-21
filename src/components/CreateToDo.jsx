import { useState } from "react";

const CreateToDo = ({ createToDo }) => {
    const [toDoText, setToDoText] = useState("");
    return (
        <div className="createToDoWrapper">
            <input
                type="text"
                className="toDoInput"
                value={toDoText}
                onChange={(e) => setToDoText(e.target.value)}
            />
            {toDoText && (
                <button
                    onClick={() => {
                        setToDoText("");
                        createToDo(toDoText);
                    }}
                >
                    Add to List
                </button>
            )}
        </div>
    );
};

export default CreateToDo;
