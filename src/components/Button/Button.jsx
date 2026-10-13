import classNames from "classnames";
import styles from "./Button.module.scss";
function Button({children, accent = false, ...props}) {
    return (
        <button className={classNames(styles.button, {
            [styles.accent]: accent,
        })} {...props}>{children}</button>
    )
}
export default Button;