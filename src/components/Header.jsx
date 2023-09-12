import styles from './Header.module.css';
import igniteLogo from '../image/ignite-logo.svg'; //

console.log(igniteLogo);

export const Header = () => {
    return(
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo" />
        </header>
    );
}