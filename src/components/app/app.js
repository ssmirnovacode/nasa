import React from 'react';
import './app.scss';
import Header from '../header/header';
import Footer from '../footer/footer';
import Gallery from '../gallery/gallery';

const App = () => {

    return(
        <>
            <div className="content">
                <Header />
                <div className="main">some main text</div>
                <Gallery />
            </div>
            <Footer />
        </>
    )
}

export default App;