import styles from './Menu.module.css'
import MenuLink from '../MenuLink'

function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to="/">Início</MenuLink>
                <MenuLink to="/sobre-mim">Sobre Mim</MenuLink>
            </nav>
        </header>
    )
}

export default Menu
