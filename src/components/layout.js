import React from "react"
import { GlobalStyle } from "./styles/GlobalStyles" 
import Header from "./Header"
import Main from "./Main"
import "./layout.css"

const Layout = () => {
  return (
    <>
    <GlobalStyle />
    <Header />
    <Main />
    </>
  )
}


export default Layout
