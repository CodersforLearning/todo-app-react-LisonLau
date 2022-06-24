import { useRef } from 'react';
import classes from './NewToDoForm.module.css'
import Format from './ui/Format.js';

function NewToDoForm(props) {
    const taskInputRef = useRef();
    const dayInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();
        const enteredTask = taskInputRef.current.value;
        const enteredDay = dayInputRef.current.value;

        const toDoData = {
            day: enteredDay,
            task: enteredTask,
        };

        props.onAddTask(toDoData);
    }

    return (
        <Format>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='daytask'>Which Day?</label>
                    <select id='daytask' ref={dayInputRef}>
                        <option value="Sunday">Sunday</option>
                        <option value="Monday">Monday</option>
                        <option value="Tueday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor='task'>New Task</label>
                    <input type='text' required id='task' ref={taskInputRef} />
                </div>
                <div className={classes.actions}>
                    <button>Add To Do</button>
                </div>
            </form>
        </Format>
    );
}

export default NewToDoForm;