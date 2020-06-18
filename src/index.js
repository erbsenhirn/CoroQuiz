import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


ReactDOM.render(
    <React.StrictMode>
        <Typography>
            <Container maxWidth="sm">
                <App />
            </Container>
        </Typography>
    </React.StrictMode>,
    document.getElementById('root')
);