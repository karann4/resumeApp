import React from 'react'
import NavBar from './NavBar'
import Header from './Header'
import Particles from 'react-particles-js'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles({
    partcilesCanca: {
        position: "absolute",
        opacity: "0.6"
    }
})

const Home = () => {
    const classes = useStyles()
    return (
        <>
        <Particles canvasClassName={classes.partcilesCanca} params={{
            particles:{
                number:{
                    value:69,
                    density: {
                        enable: true,
                        value_area: 900
                    }
                },
                shape:{
                    type: "circle",
                    stroke: {
                        width: 1,
                        color: "tomato"
                    }
                },
                size: {
                    value: 8,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 10,
                        size_min: 0.1,
                        sync: true
                    }
                }
            }
        }}/>
            <NavBar></NavBar>
            <Header></Header>
           
        </>
    )
}

export default Home;
