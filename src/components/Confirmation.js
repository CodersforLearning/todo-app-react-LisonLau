import classes from './Confirmation.module.css';

function Confirmation(props) {
    function yesHandler() {
        props.onYes();
    }
    function noHandler() {
        props.onNo();
    }
    return (
        <div className={classes.confirmation}>
            <p>Task is completed?</p>
            <button className={classes.btn} id={classes.alt} onClick={noHandler}>No</button>
            <button className={classes.btn} onClick={yesHandler}>Yes</button>
        </div>
    );
}

export default Confirmation;