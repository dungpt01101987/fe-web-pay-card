import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import classNames from "classnames/bind";
import styles from 'layouts/components/Header/Header.module.scss';

const cx = classNames.bind(styles);


const NavHeader = () => {
    return (
        <div className={cx('nav-header-wrapper')}>
            <Navbar bg="primary" data-bs-theme="dark">
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Navbar.Brand href="#home">Douyin Top up</Navbar.Brand>
                <Navbar.Brand href="#home">Apple Top up</Navbar.Brand>
                <Navbar.Brand href="#home">Honkai: Star Rail (International Server)</Navbar.Brand>
                <Navbar.Brand href="#home">Kuaishou Top up</Navbar.Brand>
                <Navbar.Brand href="#home">PUBG MOBILE (International Server)</Navbar.Brand>
            </Navbar>
        </div>

    )
}

export default NavHeader;