import React from 'react';
import './app.scss';
import Header from '../header/header';
import Footer from '../footer/footer';
import Gallery from '../gallery/gallery';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Mars from '../mars/mars';

const App = () => {

    return(
        <Router>
            <div className="content">
                <Header />
                <Route path='/' exact component={Gallery} />
                <Route path='/earth' component={Gallery} />
                <Route path='/mars' component={Mars} />
            </div>
            <Footer />
        </Router>
    )
}

export default App;