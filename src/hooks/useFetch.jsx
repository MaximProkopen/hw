import { useEffect, useState } from "react";

const useFetch = (initialUrl) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            setIsLoading(true);
            try {
                const responce = await fetch(initialUrl)

                if (!responce.ok) {
                    throw new Error("Failed fetch users")
                };

                const json = await responce.json();

                setData(json)
            } catch (e) {
                setError(e.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData()
    }, [initialUrl]);

    return { data, isLoading, error }
}

export default useFetch;