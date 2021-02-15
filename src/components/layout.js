import React from "react"
import { GlobalStyle } from "./styles/GlobalStyles" 
import Header from "../components/Header"
import Main from "./Main"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
    <GlobalStyle />
    <Header />
    <Main />
    
    
    
    <main>{children}</main>
    </>
  )
}


export default Layout
