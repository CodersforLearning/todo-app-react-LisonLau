import { Link } from 'react-router-dom';
import classes from './Navigation.module.css'

function Navigation() {
    return (
    <header className={classes.header}>
        <div className={classes.logo}>Weekly To Do</div>
        <nav>
            <ul>
                <li><Link to='/'>ToDo</Link></li>
                <li><Link to='/edit'>Add</Link></li>
            </ul>
        </nav>
    </header>
    );
}

export default Navigation;