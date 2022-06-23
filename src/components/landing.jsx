import React, {useState} from 'react';
import Hero from "./hero/hero";
import Menu from "./Menu";
import {activeMenuContext} from "../context";

const Landing = () => {
    const [activeMenu, setActiveMenu] = useState(false)

    return (
        <div>
            <activeMenuContext.Provider value={{activeMenu, setActiveMenu}}>
                <Hero/>
                <Menu visible={activeMenu}/>
            </activeMenuContext.Provider>
        </div>
    );
};

export default Landing;
