import React from 'react';
import { connect } from "react-redux";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { resetQuiz, changeToView } from '../state';
import { VIEWS } from '../constants'



function mapDispatchToProps(dispatch) {
    return {
        resetQuiz: (view) => dispatch(resetQuiz()),
        changeToView: (view) => dispatch(changeToView(view)),
    };
}

class HomeButton extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {dialogOpen: false};
    }
    
    toggleDialog = () => {
        this.setState({
            dialogOpen: !this.state.dialogOpen,
        });
    }

    render() {
        return (
            <Box>
                <IconButton  aria-label="home" onClick={ this.toggleDialog }>
                    <HomeIcon />
                </IconButton> 
                <Dialog
                    open={ this.state.dialogOpen }
                    onClose={ this.toggleDialog }
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                 >
                    <DialogTitle id="alert-dialog-title">Quiz abbrechen und zurück zum Hauptmenu?</DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    Brichst Du das Quiz ab, geht dein aktueller Fortschritt verloren. Du kannst es allerdings im Hauptmenu neu starten.
                                </DialogContentText>
                            </DialogContent>
                        <DialogActions>
                        <Button onClick={ this.toggleDialog } color="primary">
                            Nein, Quiz fortführen
                        </Button>
                        <Button onClick={ () => {
                                this.props.resetQuiz();
                                this.props.changeToView(VIEWS.MENU);
                                }
                            } 
                            color="primary" variant="contained" autoFocus>
                            Ja, Quiz abbrechen
                        </Button>
                    </DialogActions>
                </Dialog>
            </Box>
        );
    }
}

export default connect(null, mapDispatchToProps)(HomeButton);