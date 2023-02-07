function Header(props) {
    return (
        <header>
            <h1>Todo-App</h1>
            {props.children}
        </header>
    );
}

export default Header;
