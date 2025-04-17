import styles from '../styles/App.module.scss'
import { Header } from '../components/Header.jsx';





export function About() {
    return (
        <div className={styles.about}>
            <Header />
            <div className={styles.wrapper}>
                <p className={styles.title_h2}>ИПР 9 Вариант - Руденко</p>
                <p className={styles.text}>Создать интерактивную карту с метками и их загрузкой через API.</p>
                <a className={styles.text} href="">Репозиторий на гитхабе</a>
            </div>
        </div>
    );
}