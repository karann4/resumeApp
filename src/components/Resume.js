import React from 'react'
import {makeStyles} from '@material-ui/styles'
import {Typography,Box} from '@material-ui/core'
import NavBar from "./NavBar";

const Resume = () => {
    return (
        <>
        <NavBar/>
        <Box component="header">
            <Typography variant="h4" align="center">
                Working Experinece
            </Typography>
            <Box component="div">
                <Typography variant="h2">2013</Typography>
            </Box>
        </Box>
        </>
    )
}

export default Resume
