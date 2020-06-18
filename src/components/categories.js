import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
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
            <Box>
                <h1>In Welchen Kategorien möchtest du dein Wissen testen?</h1>
                <FormGroup>
                    {Object.keys(this.props.categories).map(key => 
                        <FormControlLabel control={
                            <Checkbox color="primary" name={key} value={key} onChange={this.handleChange} />
                        } label={key} checked={this.props.categories[key]} />
                    )}
                </FormGroup>
                <Typography align="center">
                    <Button 
                        variant="contained" 
                        color="primary" 
                        fullWidth
                        onClick={() => {this.props.changeToView("federalStates")}}>
                        Ok
                    </Button>
                </Typography>
            </Box>
        );
    }
}

export default Categories;