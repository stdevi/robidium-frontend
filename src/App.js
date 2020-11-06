import React, { useState } from 'react'
import { CssBaseline, AppBar, Toolbar, Avatar, Typography}  from '@material-ui/core';
import { Zoom, Slide }  from '@material-ui/core';
import 'fontsource-roboto'

import Main from './Main'
import HomeText from './Home/HomeText'
import Box from "@material-ui/core/Box";

const App = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [showImport, setShowImport] = useState(false);

  return (
    <div>
      <CssBaseline />
      <AppBar color="primary" position="relative">
        <Toolbar style={{ height: '130px', background: "#b8baba"}}>
            <Avatar alt="Logo"  variant={"square"} src="/logo.png" style={{ height: '100px', width: '80px' }}/>
            <Box ml={1} fontWeight="fontWeightBold" fontSize="h4.fontSize">
                Robidium
            </Box>
        </Toolbar>
      </AppBar>
      <Zoom
        in={!showIntro}
        mountOnEnter
        unmountOnExit
        onExited={() => setShowImport(true)}>
        <HomeText setShowIntro={setShowIntro}/>
      </Zoom  >
      <Slide
        direction="right"
        in={showImport}
        mountOnEnter
        unmountOnExit>
        <Main />
      </Slide>
    </div>
  )
}

export default App
