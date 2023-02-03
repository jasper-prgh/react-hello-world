function TodoList(props) {
    return (
        <ul>
            {props.todos.map((t, i) => <li key={i}>{t}</li>)}
        </ul>
    );
}

export default TodoList;
