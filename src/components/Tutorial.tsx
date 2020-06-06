import React from 'react';
import { Container, InputLabel, Button,    } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        border: 0,
        borderRadius: 10,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        width: 380,
        height: 487,
        padding: '0 30px',
        display: 'block',
        marginTop: 60,
        background: '#EAE7DC',
        fontcolor: '#8E8D8A'
    },
    screen: {
        textAlign: 'right'
    },
    formula: {
        fontSize: 20,
        color: "grey"
    },

    display: {
        fontSize: 30,
        color: "black"
    },
    button: {
        width: 80,
        height: 80,
        fontSize: 20,
        borderRadius: 120,
        background: '#E85A4F'
    }
});



function Tutorial() {
    const classes = useStyles();
    return (
        <Container maxWidth="sm" className={classes.root}>
            <form className={classes.screen}>
                <InputLabel id="formula" className={classes.formula}>0
                </InputLabel>

                <InputLabel id="display" className={classes.display}>
                    0
                </InputLabel>
            </form>

            <Button className={classes.button}>C</Button>
            <Button className={classes.button}>+/-</Button>
            <Button className={classes.button}>%</Button>
            <Button className={classes.button}>DEL</Button>

            <Button className={classes.button}  >7</Button>
            <Button className={classes.button} >8</Button>
            <Button className={classes.button}>9</Button>
            <Button className={classes.button}>/</Button>

            <Button className={classes.button}  >4</Button>
            <Button className={classes.button}>5</Button>
            <Button className={classes.button}  >6</Button>
            <Button className={classes.button}>*</Button>

            <Button className={classes.button}  >1</Button>
            <Button className={classes.button}  >2</Button>
            <Button className={classes.button}>3</Button>
            <Button className={classes.button}>-</Button>

            <Button className={classes.button} >0</Button>
            <Button className={classes.button}>.</Button>
            <Button className={classes.button}>=</Button>
            <Button className={classes.button}>+</Button>

        </Container>
        )
}

export default Tutorial;