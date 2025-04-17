import { Link } from 'react-router-dom';
import styles from '../styles/App.module.scss'


export function Header(){
    return(
        <div className={styles.header}>
        <Link className={styles.title_h1} to='/Map/'> Интерактивная карта </Link>
        </div>
    );
}