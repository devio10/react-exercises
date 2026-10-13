import SearchInput from "./SearchInput";
import ThemeToggle from "./ThemeToggle";

function SearchPanel () {
    return (
        <div style={{display: "flex", width: "fit-content", margin: "16px auto", alignItems: "center", position: "relative"}}>
            <SearchInput />
            <ThemeToggle />
        </div>
    )
}
export default SearchPanel;