import React from 'react';
import style from "./findUs.module.css";
import img from "../../assets/findUsImg.png"
import v2 from "../../assets/v2.svg"

const FindUs = () => {
    return (
        <div className={style.page}>
            <div className={style.content}>
                <div className={style.right}>
                    <p className={style.Contact}>Contact</p>
                    <img src={v2} className={style.v2} />
                    <h1 className={style.findUs}>Find Us</h1>
                    <p className={style.location}>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG.</p>
                    <h2 className={style.opening}>Opening Hours</h2>
                    <p className={style.time}>Mon - Fri: 10:00 am - 02:00 am</p>
                    <p className={style.time}>Mon - Fri: 10:00 am - 02:00 am</p>
                    <button className={style.btn}>Visit Us</button>

                </div>
                <div className={style.left}>
                    <img src={img} className={style.image} />
                </div>

            </div>
        </div>
    );
}

export default FindUs;
