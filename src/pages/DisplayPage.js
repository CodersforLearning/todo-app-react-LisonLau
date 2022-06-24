import { useState, useEffect } from 'react';
import List from "../components/List";

function DisplayPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedTasks, setLoadedTasks] = useState([]);
    useEffect(() => {
        setIsLoading(true);
        fetch(
            'https://to-do-app-d9379-default-rtdb.firebaseio.com/tasks.json',
        ).then((response) => {
            return response.json();
        }).then(data => {
            const tasks = [];
            for (const key in data) {
                const task = {
                    id: key,
                    ...data[key]
                };
                tasks.push(task);
            }
            setIsLoading(false);
            setLoadedTasks(tasks);
        });
    }, []);

    if (isLoading) {
        return (
            <div className='load'>
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className='whole'>
            <h1 className='header'>Weekly To Do</h1>
            <List todos={loadedTasks} />
        </div>
    );
}

export default DisplayPage;