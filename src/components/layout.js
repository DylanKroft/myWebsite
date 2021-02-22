import { GlobalStyle } from "./styles/GlobalStyles" 
import Header from "./Header"
import Dropdown from "./Dropdown"
import React, {useState} from 'react'

const Layout = ({fluid}) => {

  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
    <GlobalStyle />
    <Header fluid={fluid} onAdd={() => setShowDropdown(!showDropdown)}/>
    {showDropdown && <Dropdown/>}
    </>
  )
}

export default Layout
