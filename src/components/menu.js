import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';


class Menu extends React.Component {
    render() {
        return (
            <Box>
                <Typography align="center">
                    <h1>CoroQuiz</h1>
                    <h2>Teste dein Wissen über Corona Richtlinien</h2>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            fullWidth
                            onClick={() => {this.props.changeToView("menu")}}>
                            Quiz starten
                        </Button>
                        <Button 
                            variant="contained" 
                            color="secondary" 
                            fullWidth
                            onClick={() => {this.props.changeToView("categories")}}>
                            Kategorien ändern
                        </Button>
                        <Button 
                            variant="contained" 
                            color="secondary" 
                            fullWidth
                            onClick={() => {this.props.changeToView("federalStates")}}>
                            Bundesländer ändern
                        </Button>
                </Typography>
            </Box>
        );
    }
}

export default Menu;