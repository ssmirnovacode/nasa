import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom'

const Footer = () => {

    return(
        <footer className="footer">
            <div className="footer_col navmenu">
               {/*  <div className="footer headerlink"><Link to={`/`} >NASA app</Link></div> */}
                <ul className="footer_nav">
                    <li><Link className="footer nav-link navmenu_link  py-1" to='/'>Home</Link></li>
                    <li><Link className="footer nav-link navmenu_link py-1" to='/earth'>Earth</Link></li>
                    <li><Link className="footer nav-link navmenu_link py-1" to='/mars'>Mars</Link></li>
                </ul>
            </div>
            <div className="footer_col">
                <div className="mb-2 py-1">Useful links:</div>
                <div>
                    <a href={'https://github.com/ssmirnovacode'} className="navmenu_link underline" target="blank">Github profile</a><br/>
                    <a href={'https://www.nasa.gov'} className="navmenu_link underline" target="blank">NASA website</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;