import React from 'react';
import style from "../about/about.module.css";
import imgG from "../../assets/G.png";
import about from "../../assets/aboutImg.png";
import v1 from "../../assets/v1.svg";
import v2 from "../../assets/v2.svg";

const About = () => {
    return (
        
        <div className={style.Page}>
            <div className={style.center}>
                <div className={style.AboutUs}>
                    <h2 className={style.h2}>About Us</h2>
                    <img src={v1} className={style.v1} />
                    <p className={style.p}>Lorem ipsum dolor sit amet consectetur adipisicing<br />
                        Assumenda dolorem minus possimus nisi maxime
                        <br />perferendis veniam vel culpa molestias maxime </p>

                    <button className={style.btn}>Know More</button>
                </div>
                <div className={style.imgCenter}>
                    <img src={imgG} className={style.img1} />
                    <img src={about} className={style.img2} />
                </div>

                <div className={style.OurHistory}>
                    <h2 className={style.OurHistoryh2}>Our History</h2>
                    <img src={v2} className={style.v2} />
                    <p className={style.p1}>Lorem ipsum dolor sit amet consectetur <br />
                        Assumenda dolorem minus possimus nisi 
                        <br />perferendis veniam vel culpa molestias maxime </p>

                    <button className={style.btn2}>Know More</button>
                </div>
            </div>
        </div>
    );
}

export default About;
