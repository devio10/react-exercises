import { useMemo } from "react";
import UserCard from "./UserCard";
import styles from "./UserList.module.scss";

function UserList ({users, ...props}) {

    const listItems = useMemo(() => users.map(person => <UserCard name={person.name} age={person.age} key={person.id} />), [users]);
    return (
        <div className={styles.list} {...props}>
            {listItems}
        </div>
    )
}
export default UserList;