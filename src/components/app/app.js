import React, { Suspense } from 'react';
import './app.scss';
import Header from '../header/header';
import Footer from '../footer/footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Loading from '../loading/loading';
//import Mars from '../mars/mars';

const Earth = React.lazy(() => import('../earth/earth'));
const Mars = React.lazy(() => import('../mars/mars'));

const App = () => {

    return(
        <Router>
            <div className="content">
                <Header />
                <Suspense fallback={ <Loading /> }>
                    <Route path='/' exact component={Earth} />
                    <Route path='/earth' component={Earth} />
                    <Route path='/mars' component={Mars} />
                </Suspense>
            </div>
            <Footer />
        </Router>
    )
}

export default App;