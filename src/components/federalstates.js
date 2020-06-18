import React from 'react';
import Container from '@material-ui/core/Container';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

class FederalStates extends React.Component {
    
    handleChange = (e) => {
        this.props.onFederalStateChange(e.target.value, e.target.checked);
    }
    
    render() {
        return (
            <Container>
                <h1>Für welche Bundesländer möchtest du dein Wissen testen?</h1>
                <FormGroup>
                    {Object.keys(this.props.federalStates).map(key => 
                        <FormControlLabel control={
                            <Checkbox color="primary" name={key} value={key} onChange={this.handleChange} />
                        } label={key} checked={this.props.federalStates[key]} />
                    )}
                </FormGroup>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={() => {this.props.changeToView("menu")}}>
                    Ok
                </Button>
            </Container>
        );
    }
}

export default FederalStates;