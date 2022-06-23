import React, {useContext} from 'react';
import {activeMenuContext} from "../../context";

const MenuBtn = () => {
    const {activeMenu, setActiveMenu} = useContext(activeMenuContext);
    const showMenu = () => {setActiveMenu(true)};
    return (
        <div onClick={showMenu} className={`menu__btn ${activeMenu ? 'active' : ''}`}>
            <div className={'btn__circle'}></div>
            <button>Menu</button>
        </div>

    );
};

export default MenuBtn;
