import React, {useContext} from 'react';
import {activeMenuContext} from "../context";

const Menu = ({visible}) => {
    const {activeMenu, setActiveMenu} = useContext(activeMenuContext);
    const closeMenu = () => {setActiveMenu(false)};
    return (
        <div className={`menu-mask ${visible ? 'active' : ''}`}>
            <div className={`menu-nav`}>
                <button className={'btn-close'} onClick={closeMenu}></button>
                <h2>Menu</h2>
                <ul>
                    <li>Main</li>
                    <li>Shop</li>
                    <li>About us</li>
                    <li>Contacts</li>
                </ul>
            </div>
        </div>

    );
};

export default Menu;
