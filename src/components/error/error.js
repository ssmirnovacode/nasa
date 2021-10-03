
import React from 'react';
import './error.scss';

const Error = ({text=''}) => {
    return(
        <div className="error pt-5">{text}
            <img className="d-block error_img" alt={text} src="https://c.tenor.com/6xd1kGTGV-EAAAAC/houston-we-have-a-problem-tom-hanks.gif" />
        </div>
    )
}

export default Error;