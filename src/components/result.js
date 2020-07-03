import React from 'react';
import { connect } from "react-redux";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

import { changeToView } from '../state';
import { VIEWS } from '../constants'



const mapStateToProps = (state) => {
    return { 
        numberOfTasks: state.numberOfTasks,
        score: state.score,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        changeToView: (view) => dispatch(changeToView(view))
    };
}

function Feedback(props) {
    const percentageRight = (props.score / props.numberOfTasks) * 100;
      if (percentageRight => 0 && percentageRight < 50) {
    return "Du solltest dich auf jeden Fall noch mehr über die Regelungen informieren!";
  }
   else if (percentageRight => 50 && percentageRight < 75) {
    return "Du weißt schon gut Bescheid, aber das geht noch besser!";
  }
   else if (percentageRight => 75 && percentageRight <= 100) {
    return "Gut gemacht!";
  }

}


class Result extends React.Component {
    render() {
        return (
            <Box>
                  <div>
                    <IconButton  aria-label="home" onClick={() => {this.props.changeToView(VIEWS.MENU)}}>
                        <HomeIcon />
                    </IconButton> 
                 </div>
                <Typography
                    align="center">
                    Du hast { this.props.score } von { this.props.numberOfTasks } Fragen richtig beantwortet. <Feedback score ={this.props.score} numberOfTasks = { this.props.numberOfTasks }  />
                </Typography>   
                <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth
                    onClick={() => {this.props.changeToView(VIEWS.BACKGROUNDINFORMATION)}}
                    style={{ textTransform: 'none', marginBottom: 8, marginTop: 8 }}>
                    Hintergrundinfos
                </Button>
                <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth
                    onClick={() => {this.props.changeToView(VIEWS.MENU)}}
                    style={{ textTransform: 'none', marginBottom: 8 }}>
                    Zurück zum Menu
                </Button>
            </Box>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);