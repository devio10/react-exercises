import { useState } from "react";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import styles from "./AddUserModal.module.scss";
function AddUserModal ({onSave, onExit}) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    function saveUser() {
        onSave({
            name: name.trim(),
            age: Number(age)
        });
    }
    return (
        <div className={styles.screen}>
            <div className={styles.popupWindow}>
                <h3>Add user</h3>
                <div className={styles.inputs}>
                    <TextInput placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <TextInput placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)}  />
                </div>
                <div className={styles.buttons}>
                    <Button accent={true} onClick={saveUser}>Save</Button>
                    <Button onClick={onExit}>Exit</Button>
                </div>
            </div>
        </div>
    )
}
export default AddUserModal;