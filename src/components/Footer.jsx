import styles from '../styles/App.module.scss'
import { Link } from 'react-router-dom';


export function Footer(){
    return(
        <div className={styles.footer}>
            <Link className={styles.link} to='/about'> Описание </Link>
        </div>
    );
}