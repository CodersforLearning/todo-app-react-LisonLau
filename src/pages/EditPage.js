import { useNavigate } from 'react-router-dom';
import NewToDoForm from "../components/NewToDoForm";

function EditPage() {
    const navigate = useNavigate();

    function addTask(toDoData) {
        fetch(
            'https://to-do-app-d9379-default-rtdb.firebaseio.com/tasks.json',
            {
                method: 'POST',
                body: JSON.stringify(toDoData),
                headers: {
                    'Content-Type': 'application/json'
                },
            }
        ).then(() => { navigate.replace('/', { replace: true }) }
        );
    }

    return (
        <div>
            <h1 className='header'>Add a Task</h1>
            <NewToDoForm onAddTask={addTask} />
        </div>
    );
}

export default EditPage;