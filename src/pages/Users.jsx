import useFetch from '../hooks/useFetch';


const Users = () => {
   const { data, isLoading, error } = useFetch("https://jsonplaceholder.typicode.com/users")

    return (
        <div>
            <h1>Users component</h1>
            {isLoading ? <h1>Loading</h1> : null}
            {error ? <h1 style={{ color: "red" }}>"Something went wrong ..."</h1> : null}
            {data.length > 0 && data.map((user) => (
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    );
}

export default Users
