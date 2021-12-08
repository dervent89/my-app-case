import { Component } from 'react';

import '../assets/style/Header.scss';
import logo from '../assets/images/logo.svg';
import Button from './Button';
class Header extends Component {
    render() {
        return (
            <header className="site-header">
                <div className="container">
                    <div className="site-header-inner">
                        <div className="logo-wrap">
                            <img src={logo} alt="Logo"/>
                        </div>
                        <div className="action-wrap">
                            <a href="/" className="link link-white">Sign In</a>
                            <Button variant="white" text="Register"/>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header;