import { useContext } from "react";
import styles from "./SearchPanel.module.scss";
import ThemeContext from "../../context/ThemeContext";
import IconDark from "../icons/IconDark";
import IconLight from "../icons/IconLight";
function ThemeToggle() {

    const {theme, setTheme} = useContext(ThemeContext);

    return (
        <button className={styles.themeSwitch} onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            {theme === "light" ? (
                <IconDark />
            ): (
                <IconLight />
            )}
        </button>
    )
}
export default ThemeToggle