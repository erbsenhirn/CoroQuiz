import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';


class Menu extends React.Component {
    render() {
        return (
            <Container>
                <Typography align="center">
                    <h1>CoroQuiz</h1>
                    <h2>Teste dein Wissen über Corona Richtlinien</h2>
                    <ButtonGroup orientation="vertical">
                        <Button 
                            variant="contained" 
                            color="primary" 
                            onClick={() => {this.props.changeToView("menu")}}>
                            Quiz starten
                        </Button>
                        <Button 
                            variant="contained" 
                            color="secondary" 
                            onClick={() => {this.props.changeToView("categories")}}>
                            Kategorien ändern
                        </Button>
                        <Button 
                            variant="contained" 
                            color="secondary" 
                            onClick={() => {this.props.changeToView("federalStates")}}>
                            Bundesländer ändern
                        </Button>
                    </ButtonGroup>
                </Typography>
            </Container>
        );
    }
}

export default Menu;