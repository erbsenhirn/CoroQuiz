import React from 'react';
import { connect } from "react-redux";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

import { changeToView } from '../state';
import { VIEWS } from '../constants'



const mapStateToProps = (state) => {
    return { 
        tasks: state.tasks,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        changeToView: (view) => dispatch(changeToView(view))
    };
}

class BackgroundInformation extends React.Component {
    render() {
        return (
            <Box>
                <div>
                    <IconButton  aria-label="home" onClick={() => {this.props.changeToView(VIEWS.MENU)}}>
                        <HomeIcon />
                    </IconButton> 
                 </div>
                 <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth
                    onClick={() => {this.props.changeToView(VIEWS.RESULT)}}
                    style={{ textTransform: 'none' }}>
                    Zurück zur Quizausertung
                </Button>
                <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth
                    onClick={() => {this.props.changeToView(VIEWS.MENU)}}
                    style={{ textTransform: 'none' }}>
                    Zurück zum Menu
                </Button>
                {Object.keys(this.props.tasks).map(key => 
                    <Card>
                    	<CardContent>
                    		<Typography color="primary">
                    			{ this.props.tasks[key].question }
                    		</Typography>
                    		<Divider />
                    		<Typography>
                    			Richtige Antwort: { this.props.tasks[key].answers[this.props.tasks[key].correctAnswerIndex] }
                    		</Typography>
                    		<Divider />
                    		<Typography>
                    			Deine Antwort: { this.props.tasks[key].answers[this.props.tasks[key].answerIndex] }
                    		</Typography>
	                    	<Button 
			                    variant="contained" 
			                    color="primary" 
			                    fullWidth
			                    href= { this.props.tasks[key].sourceLink }
			                    target="_blank"
			                    style={{ textTransform: 'none' }}>
			                    Link zur Quelle
			                </Button>
			            </CardContent>
                    </Card>
                )}
                <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth
                    onClick={() => {this.props.changeToView(VIEWS.RESULT)}}
                    style={{ textTransform: 'none' }}>
                    Zurück zur Quizauswertung
                </Button>
                <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth
                    onClick={() => {this.props.changeToView(VIEWS.MENU)}}
                    style={{ textTransform: 'none' }}>
                    Zurück zum Menu
                </Button>
            </Box>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundInformation);