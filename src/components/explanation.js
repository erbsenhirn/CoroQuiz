import React from 'react';
import { connect } from "react-redux";
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

import { endTask } from '../state';


const mapStateToProps = (state) => {
    return { 
        currentTaskAnswered: state.currentTaskAnswered,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        endTask: (payload) => dispatch(endTask(payload))
    };
}

class Explanation extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {modalOpen: false};
    }
    
    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen,
        });
    }
    
    render() {
        if (this.props.currentTaskAnswered) {
            return (
                <Box>
                    <Dialog open={ this.state.modalOpen } onClose={ this.toggleModal }>
                        <Container maxWidth="xs">
                            <Typography>
                                { this.props.text }
                            </Typography>
                        </Container>
                    </Dialog>
                    <Button onClick={ this.toggleModal } fullWidth style={{ textTransform: 'none' }}>
                        Warum ist das so?
                    </Button>
                    <Button onClick={ () => { this.props.endTask(null) } } fullWidth style={{ textTransform: 'none' }}>
                        Weiter
                    </Button>
                </Box>
            );
        } else {
            return (null);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Explanation);