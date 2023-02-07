function TodoList(props) {
    return (
        <ul className={['class1', 'class2', 'class3'].join(' ')}>
            {[...props.todos].map((t, i) => <li key={i}>{t}</li>)}
        </ul>
    );
}

export default TodoList;
