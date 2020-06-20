import React, { useState } from 'react'
import { CssBaseline, AppBar, Toolbar, Avatar, Typography}  from '@material-ui/core';
import { Zoom, Slide }  from '@material-ui/core';
import 'fontsource-roboto'

import Main from './Main'
import HomeText from './Home/HomeText'

const App = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [showImport, setShowImport] = useState(false);

  return (
    <div>
      <CssBaseline />
      <AppBar color="primary" position="relative">
        <Toolbar>
          <Avatar alt="Logo" src="/logo.png"/>
          <Typography variant="h6">
            Robidium
          </Typography>
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
