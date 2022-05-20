import React, {useState} from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';

function Calculator() {
    const [val, setVal] = useState('0');
    const [visibleVal, setVisibleVal] = useState('0');
    const [firstClick, setFirstClick] = useState(true);

    function handleInput(input){
        const specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
        if(specialChar.test(input)){
            const newVal = val.concat('', input);
            setVal(newVal);
            setVisibleVal(input)
        }else if(firstClick){
            setVal(input);
            setFirstClick(false);
            setVisibleVal(input);
        }else{
            const newVal = val.concat('', input);
            let newVisibleVal = '';
            if(specialChar.test(visibleVal)){
                newVisibleVal = input;
            } else {
                newVisibleVal = visibleVal.concat('', input);
            }
            setVal(newVal);
            setVisibleVal(newVisibleVal);
        }
    };

    function handleSolve() {
        const solution = eval(val).toString();
        setVal(solution);
        setVisibleVal(solution);
    }

    function handleClear() {
        setVal('');
        setVisibleVal('');
        setFirstClick(true);
    }

    return(
        <React.Fragment>
            <Box 
                component="form"
                noValidate
                autoComplete="off"
            >
                <Grid>
                    <TextField id="outlined-basic" label={visibleVal} variant="outlined" />
                </Grid>
                <Grid>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button
                        onClick={() => {
                            handleInput('7');
                          }}                    
                    >
                        7
                    </Button>
                    <Button
                        onClick={() => {
                            handleInput('8');
                          }}                    
                    >
                        8
                    </Button>
                    <Button
                        onClick={() => {
                            handleInput('9');
                          }}                    
                    >
                        9
                    </Button>
                    <Button
                        onClick={() => {
                            handleInput("/");
                          }}                    
                    >
                        {"/"}
                    </Button>
                </ButtonGroup>
                </Grid>
                <Grid>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button
                        onClick={() => {
                            handleInput('4');
                          }}                    
                    >
                        4
                    </Button>
                    <Button
                        onClick={() => {
                            handleInput('5');
                          }}                    
                    >
                        5
                    </Button>
                    <Button
                        onClick={() => {
                            handleInput('6');
                          }}                    
                    >
                        6
                    </Button>
                    <Button
                        onClick={() => {
                            handleInput('-');
                          }}                    
                    >
                        {'-'}
                    </Button>
                </ButtonGroup>
                </Grid>
                <Grid>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button
                        onClick={() => {
                            handleInput('1');
                          }}                    
                    >
                        1
                    </Button>
                    <Button
                        onClick={() => {
                            handleInput('2');
                          }}                    
                    >
                        2
                    </Button>
                    <Button
                        onClick={() => {
                            handleInput('3');
                          }}                    
                    >
                        3
                    </Button>
                    <Button
                        onClick={() => {
                            handleInput('+');
                          }}                    
                    >
                        {'+'}
                    </Button>
                </ButtonGroup>
                </Grid>
                <Grid>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button
                        onClick={() => {
                            handleInput('0');
                          }}                    
                    >
                        0
                    </Button>
                    <Button
                        onClick={() => {
                            handleSolve();
                          }}                    
                    >
                        {'='}
                    </Button>
                    <Button
                        onClick={() => {
                            handleClear();
                          }}                    
                    >
                        {'C'}
                    </Button>
                    <Button
                        onClick={() => {
                            handleInput('*');
                          }}                    
                    >
                        {'*'}
                    </Button>
                </ButtonGroup>
                </Grid>
            </Box>
        </React.Fragment>
    )
}

export default Calculator;