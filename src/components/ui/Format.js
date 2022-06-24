import classes from './Format.module.css';

function Format(props) {
  return <div className={classes.format}>{props.children}</div>;
}

export default Format;