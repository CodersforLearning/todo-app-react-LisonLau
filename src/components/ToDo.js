import { useState } from 'react';
import Confirmation from './Confirmation';
import Backdrop from './Backdrop';
import classes from './ToDo.module.css'

function ToDo(props) {
    const [confirmationOpen, setConfirmationOpen] = useState(false);
    function deleteHandler() {
        setConfirmationOpen(true);
    }

    function closeNo() {
        setConfirmationOpen(false);
    }

    function closeYes() {
        setConfirmationOpen(false);
    }

    return (
        <div id='taskID' className={classes.task}>
            <button className={classes.check} onClick={deleteHandler}></button>
            <h3 className={classes.text}>{props.day} : {props.text}</h3>
            { confirmationOpen && <Confirmation onYes={closeYes} onNo={closeNo}/>}
            { confirmationOpen && <Backdrop onClick={closeNo}/>}
        </div>
    );
}

export default ToDo;
