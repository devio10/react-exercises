import { useContext } from "react";
import SearchContext from "../../context/SearchContext";
import ClearButton from "./ClearButton"
import styles from "./SearchPanel.module.scss";
import TextInput from "../TextInput/TextInput";

function SearchInput () {
    const {searchQuery, setSearchQuery} = useContext(SearchContext);

    return (
        <div className={styles.input}>
            <TextInput placeholder="Search..." value={searchQuery} onChange={(e) => {
                setSearchQuery(e.target.value);
            }}>
                <ClearButton></ClearButton>
            </TextInput>
            
        </div>
    )
}
export default SearchInput;