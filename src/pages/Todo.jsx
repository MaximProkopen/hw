import useFetch from "../hooks/useFetch";

const Todo = () => {
    const { data, isLoading, error } = useFetch("https://jsonplaceholder.typicode.com/todos");

    return (
        <div>
            <h1>Todos component</h1>
            {isLoading ? <h1>Loading</h1> : null}
            {error ? (
                <h1 style={{ color: "red" }}>"Something went wrong ..."</h1>
            ) : null}
            {data.length > 0 && data.map((todo) => <p key={todo.id}>{todo.title}</p>)}

        </div>
    )
}

export default Todo