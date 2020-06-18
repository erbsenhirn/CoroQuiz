import React from 'react';
import Container from '@material-ui/core/Container';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';


class Categories extends React.Component {
    
    handleChange = (e) => {
        this.props.onCategoryChange(e.target.value, e.target.checked);
    }
    
    
    render() {
        return (
            <Container>
                <h1>In Welchen Kategorien möchtest du dein Wissen testen?</h1>
                <FormGroup>
                    {Object.keys(this.props.categories).map(key => 
                        <FormControlLabel control={
                            <Checkbox color="primary" name={key} value={key} onChange={this.handleChange} />
                        } label={key} checked={this.props.categories[key]} />
                    )}
                </FormGroup>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={() => {this.props.changeToView("federalStates")}}>
                    Ok
                </Button>
            </Container>
        );
    }
}

export default Categories;