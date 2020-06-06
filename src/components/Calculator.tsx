import React from 'react';
import { Container, InputLabel, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        border: 0,
        borderRadius: 10,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        width: 380,
        height: 487,
        padding: '0 30px',
        display: 'block',
        background: '#EAE7DC',
        marginTop: 60
    },

    screen: {
        textAlign: 'right'
    },

    formula: {
        fontSize: 15,
        color: "grey"
    },

    resultDisplay: {
        fontSize: 25,
        color: "black"
    },

    button: {
        width: 80,
        height: 80,
        fontSize: 20,
        background: '#E85A4F',
        borderRadius: 120
    }


});


function Calculator() {
    const classes = useStyles();

    return(
       <Container maxWidth="sm" className={classes.root}>
           <form className={classes.screen}>
               <InputLabel className={classes.formula}>
                   10*10
               </InputLabel>

               <InputLabel className={classes.resultDisplay}>
                   100
               </InputLabel>
           </form>

           <Button className={classes.button}>C</Button>
           <Button className={classes.button}>+/-</Button>
           <Button className={classes.button}>%</Button>
           <Button className={classes.button}>DEL</Button>


           <Button className={classes.button}>7</Button>
           <Button className={classes.button}>8</Button>
           <Button className={classes.button}>9</Button>
           <Button className={classes.button}>/</Button>

           <Button className={classes.button}>4</Button>
           <Button className={classes.button}>5</Button>
           <Button className={classes.button}>6</Button>
           <Button className={classes.button}>*</Button>

           <Button className={classes.button}>1</Button>
           <Button className={classes.button}>2</Button>
           <Button className={classes.button}>3</Button>
           <Button className={classes.button}>-</Button>

           <Button className={classes.button}>0</Button>
           <Button className={classes.button}>.</Button>
           <Button className={classes.button}>=</Button>
           <Button className={classes.button}>+</Button>


       </Container>
    )
}


export default Calculator;