import styles from "./TextInput.module.scss";
function TextInput({children, ...props}) {
    return (
        <div className={styles.inputContainer}>
            <input type="text" {...props} />
            {children}
        </div>
    );
}
export default TextInput