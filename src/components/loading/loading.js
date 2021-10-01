import React from 'react';
import './loading.scss';

const Loading = () => {
    return(
        <div className="background">
            <div className="planet-content">
                <div className="planet">
                    <div className="ring"></div>
                    <div className="cover-ring"></div>
                    <div className="spots">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>

                    </div>
                </div>
                <p>loading</p>
            </div>
        </div>
    )
}

export default Loading;