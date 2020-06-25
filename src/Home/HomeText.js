import React from 'react'
import {Typography, Container, Box, Button, Link}  from '@material-ui/core';

const HomeText = (props) => {
  return (
    <Container maxWidth="md">
      <Box mt={5} p={5}>
        <Typography
          variant="h3"
          color="primary"
          gutterBottom>
          <Box
            letterSpacing={3}
            fontWeight="fontWeightRegular">
            Robidium
          </Box>
        </Typography>
        <Typography
          variant="h6"
          color="inherit"
          align="justify">
          <Box fontWeight="fontWeightRegular">
            Robidium allows you to uncover repetitive and automatable routines
            from User Interface (UI) logs. Given an UI log, Robidium finds
            frequently repeated routines (candidate routines) and then analyzes
            the inputs and outputs of each action in a routine to determine if
            the routine can be fully automated. If a routine can be fully
            automated, Robidium generates a Robotic Process Automation (RPA)
            script.
          </Box>
        </Typography>
        <Typography
          variant="h6"
          variantMapping="subtitle1"
          color="inherit"
          align="justify">
          <Box fontWeight="fontWeightRegular">
            In its present form, Robidium accepts as input UI logs
            recorded using the <Link
            target="_blank"
            rel="noopener"
            href="https://github.com/apromore/RPA_UILogger">
            RPA UI Logger
          </Link>.
          It produces as output a script in
          the scripting language of the UiPath RPA tool. The script can be
          executed in the UiPath Community Edition toolset.
        </Box>
      </Typography>
      <Box mt={3}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => props.setShowIntro(true)}>
          <Box fontWeight="fontWeightRegular">
            Get started
          </Box>
        </Button>
      </Box>
    </Box>
  </Container>
)
}

export default HomeText
