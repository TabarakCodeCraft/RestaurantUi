import React from 'react';
import style from "../chef's/chef.module.css";
import image from "../../assets/chefImg.png"
import v2 from "../../assets/v2.svg"
import coma from "../../assets/coma.svg"
import Kevin from "../../assets/Kevin.png"

const Chef = () => {
    return (
        <div className={style.Page}>

            <div className={style.content}>
                <dev className={style.left}>
                    <img src={image} alt="" className={style.imageChaf} />
                </dev>


                <div className={style.right}>
                    <div className={style.top}>
                        <div className={style.title}>Chef’s Word</div>
                        <img src={v2} className={style.v2} />
                        <div className={style.subTitle}>What we believe in</div>
                    </div>
                    <div className={style.lorem}>
                        <img src={coma} alt="" ></img>

                        <p className={style.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
                            aliquam alias iure sed vel, molestiae sapiente repellendus blanditiis, error assumenda obcaecati
                            rem architecto exercitationem explicabo! Tempore, provident? Libero, dolore ipsa.</p>
                    </div>
                    <div className={style.Chef_Founder}>
                        <h2 className={style.text}>Kevin Luo</h2>
                        <p className={style.text2}>Chef & Founder</p>
                    </div>
                    <div className={style.bottomImg} >
                        <img src={Kevin} />
                    </div></div>
            </div>
        </div>
    );
}

export default Chef;
