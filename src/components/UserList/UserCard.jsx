import styles from "./UserCard.module.scss";

function UserCard ({name, age}) {
    return (
        <div className={styles.card}>
            {name} – {age} y.o.
        </div>
    )
}
export default UserCard;