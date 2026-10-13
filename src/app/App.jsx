import { useEffect, useState } from 'react'
import Header from "../components/Header/Header.jsx"
import './App.css'
import SearchPanel from '../components/SearchPanel/SearchPanel.jsx'
import IconPlus from "../components/icons/IconPlus.jsx"
import UserList from '../components/UserList/UserList.jsx'
import SearchContext from '../context/SearchContext.jsx'
import usersDB from '../data/users.js'
import ThemeContext from '../context/ThemeContext.jsx'
import FloatingButton from '../components/FloatingButton/FloatingButton.jsx'
import AddUserModal from '../components/AddUserModal/AddUserModal.jsx'



function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [theme, setTheme] = useState("light");
  const [users, setUsers] = useState(usersDB);
  const [newUserPopup, setNewUserPopup] = useState(false);

  useEffect(() => {
    console.log(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <SearchContext.Provider value={{searchQuery, setSearchQuery}}>
        <Header />
        <SearchPanel />
        <FloatingButton onClick={() => {
          setNewUserPopup(!newUserPopup);
        }}><IconPlus /></FloatingButton>
        <UserList users={users.filter(person => person.name.toLowerCase().trim().includes(searchQuery.toLowerCase().trim()))} />
      </SearchContext.Provider>
      {newUserPopup && (
        <AddUserModal onSave={(newUser) => {
          console.log(newUser);
          setUsers([...users, newUser]);
          setNewUserPopup(false);
        }} onExit={() => setNewUserPopup(false)} />
      )}
    </ThemeContext.Provider>
  )
}

export default App
