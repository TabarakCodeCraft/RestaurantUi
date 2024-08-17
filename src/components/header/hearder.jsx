import React from 'react';
import style from "../header/header.module.css";

const Hearder = () => {

    return (
        <>
            <div className={style.hearder}>
                <div className={style.logo}>GERÍCHT</div>
                <div className={style.links}>
                    <ul>
                        <li><a href='#home'>Home</a></li>
                        <li><a href='#about'>About</a></li>
                        <li><a href='#menu'>Menu</a></li>
                        <li><a href="#chef">Chef</a></li>
                        <li><a href="#find_us">Find Us</a></li>

                    </ul>
                </div>
                <div className={style.login}>
                    <p>Log in / registration</p>
                    <p className={style.bookTable}>Book Table</p>
                </div>
            </div>

        </>
    );
}

export default Hearder;
