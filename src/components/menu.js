import React from 'react';
import { connect } from "react-redux";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

import { resetQuiz, changeToView } from '../state';
import { VIEWS } from '../constants'



function mapDispatchToProps(dispatch) {
    return {
        resetQuiz: () => dispatch(resetQuiz()),
        changeToView: (view) => dispatch(changeToView(view)),
    };
}

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
                            onClick={() => {
                                    this.props.resetQuiz()
                                    this.props.changeToView(VIEWS.QUIZ)
                                }
                            }
                            style={{ textTransform: 'none', marginBottom: 8 }}>
                            Quiz starten
                        </Button>
                        <Button 
                            variant="contained" 
                            color="secondary" 
                            fullWidth
                            onClick={() => {this.props.changeToView(VIEWS.CATEGORIES)}}
                            style={{ textTransform: 'none', marginBottom: 8 }}>
                            Kategorien ändern
                        </Button>
                        <Button 
                            variant="contained" 
                            color="secondary" 
                            fullWidth
                            onClick={() => {this.props.changeToView(VIEWS.FEDERAL_STATES)}}
                            style={{ textTransform: 'none' }}>
                            Bundesländer ändern
                        </Button>
                </Typography>
            </Box>
        );
    }
}

export default connect(null, mapDispatchToProps)(Menu);