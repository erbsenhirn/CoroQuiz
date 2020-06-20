import React from 'react';
import { connect } from "react-redux";
import Box from '@material-ui/core/Box';

import Answer from './answer'
import Explanation from './explanation'


const mapStateToProps = (state) => {
    return { 
        tasks: state.tasks,
        numberOfTasks: state.numberOfTasks,
        currentTaskIndex: state.currentTaskIndex,
        currentTaskAnswered: state.currentTaskAnswered,
        score: state.score,
    };
};

class Quiz extends React.Component {

    render() {
        let currentTask = this.props.tasks[this.props.currentTaskIndex];
        return (
            <Box>
                <p>{ currentTask.question }</p>
                
                {Object.keys(currentTask.answers).map(key => 
                    <Answer text={ currentTask.answers[key] } answerIndex={ key }></Answer>
                )}
                
                <Explanation text={ currentTask.explanation } />              
            </Box>
        );
    }
}

export default connect(mapStateToProps)(Quiz);