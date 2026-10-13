import styles from "./FloatingButton.module.scss";
function FloatingButton({children, ...props}) {
    return (<button className={styles.button} {...props}>{children}</button>)
}
export default FloatingButton;