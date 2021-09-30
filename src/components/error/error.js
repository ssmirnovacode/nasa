
import React from 'react';
import './error.scss';

const Error = ({text=''}) => {
    return(
        <div className="error pt-5">{text}</div>
    )
}

export default Error;