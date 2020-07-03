import React from 'react';
import { connect } from "react-redux";
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';

import HomeButton from './homebutton'
import Answer from './answer'
import Explanation from './explanation'



const mapStateToProps = (state) => {
    return { 
        currentTask: state.currentTask,
        currentTaskIndex: state.currentTaskIndex + 1,
        numberOfTasks: state.numberOfTasks
    };
};

class Quiz extends React.Component {

    render() {
        return (
           
            <Box>
                <HomeButton />
                
                 <div style={{ textAlign: 'center' }}>
                    <p>Frage { this.props.currentTaskIndex } / { this.props.numberOfTasks }</p>
                    <Chip label={ this.props.currentTask.federalState } variant="outlined" />
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

export default connect(mapStateToProps)(Quiz);