import React from 'react';
import { connect } from "react-redux";
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

import Answer from './answer'
import Explanation from './explanation'
import { changeToView } from '../state';
import { VIEWS } from '../constants'



const mapStateToProps = (state) => {
    return { 
        currentTask: state.currentTask,
        currentTaskIndex: state.currentTaskIndex + 1,
        numberOfTasks: state.numberOfTasks
    };
};

function mapDispatchToProps(dispatch) {
    return {
        changeToView: (view) => dispatch(changeToView(view))
    };
}

class Quiz extends React.Component {

    render() {
        return (
           
            <Box>
            <div>
                <div>
                    <IconButton  aria-label="home" onClick={() => {this.props.changeToView(VIEWS.MENU)}}>
                        <HomeIcon />
                    </IconButton> 
                 </div>
                
                 <div style={{ textAlign: 'center' }}>
                    <p>Frage { this.props.currentTaskIndex } / { this.props.numberOfTasks }</p>
                    <Chip label={ this.props.currentTask.federalState } variant="outlined" />
                 </div>
            </div>
   
                <p>{ this.props.currentTask.question }</p>
                
                {Object.keys(this.props.currentTask.answers).map(key => 
                    <Answer text={ this.props.currentTask.answers[key] } answerIndex={ key }></Answer>
                )}
                
                <Explanation text={ this.props.currentTask.explanation } />              
            </Box>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);