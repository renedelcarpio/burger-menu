import React, { useState, useRef } from 'react'
import { useOnClickOutside } from './hooks'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './global'
import { theme } from './theme'
import { Burger, Menu } from './components'

import BurgerIcon from './images/hamburguesa-con-queso.png'

function App() {
  const [open, setOpen] = useState(false)

  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles/>
        <div ref={node} >
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
          <h1>Hello. This is burger menu tutorial</h1>
          <img src={ BurgerIcon } alt="burger icon"/>
          <small>Icon made by Freepik from www.flaticon.com</small>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
