import styles from './Botao.module.css'

function Botao({children, size}) {
    return (
        <button className={`${styles.botao} ${styles[size]}`}>{children}</button>
    )
}

export default Botao