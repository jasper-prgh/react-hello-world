import { useState } from "react";

function TodoInputs(props) {
    const [inputValue, setInputValue] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        props.addTodo(inputValue);
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="text" onInput={e => setInputValue(e.target.value)} />
            <input type="submit" value="Add"/>
        </form>
    );
}

export default TodoInputs;
