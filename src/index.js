import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Typography from '@material-ui/core/Typography';

ReactDOM.render(
    <React.StrictMode>
        <Typography>
            <App />
        </Typography>
    </React.StrictMode>,
    document.getElementById('root')
);