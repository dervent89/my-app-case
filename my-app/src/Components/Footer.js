import { Component } from 'react';

import '../assets/style/Footer.scss';
import Flag from '../assets/images/flag.png';
class Footer extends Component {
    render() {
        return (
            <footer className="site_footer">
                <div className="container">
                    <div className="site_footer-top">
                        <div className="menu">
                            <div><a href="/">Contact</a></div>
                            <div><a href="/">Tutorials</a></div>
                            <div><a href="/">Privacy</a></div>
                            <div><a href="/">About</a></div>
                            <div><a href="/">FAQ's</a></div>
                            <div><a href="/">Blog</a></div>
                            <div><a href="/">Banned Items</a></div>
                            <div><a href="/">Jobs</a></div>
                        </div>
                        <div className="socialMedia">
                            <div><a href="/">Facebook</a></div>
                            <div><a href="/">Twitter</a></div>
                            <div><a href="/">Linkedin</a></div>
                        </div>
                    </div>
                    <div className="site_footer-bottom">
                        <div className="copyright">FE 2020, All rights reserved.</div>
                        <div className="made_in">
                            <span>Made in</span>
                            <img src={Flag} alt="Flag"/>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer;