import React, { Suspense } from 'react';
import './app.scss';
import Header from '../header/header';
import Footer from '../footer/footer';
//import Gallery from '../gallery/gallery';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Loading from '../loading/loading';
//import Mars from '../mars/mars';

const Gallery = React.lazy(() => import('../gallery/gallery'));
const Mars = React.lazy(() => import('../mars/mars'));

const App = () => {

    return(
        <Router>
            <div className="content">
                <Header />
                <Suspense fallback={ <Loading /> }>
                    <Route path='/' exact component={Gallery} />
                    <Route path='/earth' component={Gallery} />
                    <Route path='/mars' component={Mars} />
                </Suspense>
            </div>
            <Footer />
        </Router>
    )
}

export default App;