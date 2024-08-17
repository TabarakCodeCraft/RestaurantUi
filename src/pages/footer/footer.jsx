import React from 'react';
import style from "./footer.module.css";
import v2 from "../../assets/v2.svg";
import { CiTwitter } from "react-icons/ci";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
    return (
        <div className={style.page}>


            <div className={style.rectangle}>
                <p className={style.title}>Newsletter</p>
                <img src={v2} className={style.v2} />
                <h1 className={style.Subscribe}>Subscribe to Our Newsletter</h1>
                <p className={style.Updates}>And never miss latest Updates!</p>
                <div className={style.inputs}>
                    <input
                        className={style.inputEmail}
                        type="text"
                        placeholder='Email Address'
                    />
                    <button className={style.btn}>Subscribe</button>
                </div>
            </div>
            <div className={style.footerSection}>
                <div className={style.ContactUs}>
                    <h1 className={style.qqq}>Contact Us</h1>
                    <p className={style.ee}>9 W 53rd St, New York, NY 10019, USA</p>
                    <p className={style.eee}>+1 212-344-1230</p>
                    <p className={style.eee}>+1 212-344-1230</p>

                </div>

                <div className={style.Gericht}>
                    <h1 className={style.zzz}>GERÍCHT</h1>
                    <p className={style.e}>"The best way to find yourself is to lose yourself in the <br /> service of others.”</p>
                    <div className={style.icons}>
                        <CiTwitter className={style.icon} />
                        <FaSquareFacebook className={style.icon} />
                        <FaInstagram className={style.icon} />

                    </div>
                </div>

                <div className={style.Working}>
                    <h1>Working Hours</h1>
                    <p className={style.ccc}>Monday-Friday:<br />
                        08:00 am -12:00 am</p>
                    <p className={style.cc}>Saturday-Sunday:<br />
                        07:00am -11:00 pm</p>
                </div>

            </div>
            <p className={style.copyRight}>2024 All Rights reserved @Programmer Tabarak.</p>
        </div>

    );
}

export default Footer;
