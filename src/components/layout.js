import { GlobalStyle } from "./styles/GlobalStyles" 
import Header from "./Header"
import "./layout.css"
import Dropdown from "./Dropdown"
import React, {useState} from 'react'


const Layout = () => {

  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
    <GlobalStyle />
    <Header onAdd={() => setShowDropdown(!showDropdown)}/>
    {showDropdown && <Dropdown/>}
    </>
  )
}

export default Layout
