import ToDo from './ToDo';
import classes from './List.module.css';

function List(props) {
    return (
        <div className={classes.list}>
            <h2 className={classes.header}>To Do List</h2>
            <ul className={classes.todolist}>
                {props.todos.map((task) => (
                    <ToDo 
                    text={task.task} day={task.day}
                    />
                ))}
            </ul>
        </div>
    );
}

export default List;