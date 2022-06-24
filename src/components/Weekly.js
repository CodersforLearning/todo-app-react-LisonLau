import ToDo from './ToDo';
import classes from './Weekly.module.css';

function Weekly(props) {
    return (
        <div className={classes.day}>
            <h2 className={classes.header}>{props.day}</h2>
            <ul className={classes.todolist}>
                {props.todos.map((task) => (
                    <ToDo 
                    text={task.task} 
                    />
                ))}
            </ul>
        </div>
    );
}

export default Weekly;