import React from 'react';
import style from "../OurLaurels/OurLaurels.module.css";
import image from "../../assets/leftOurPage.svg";
import image2 from "../../assets/leftOurPage2.svg";
import G from "../../assets/G2.png";
import mgg from "../../assets/mgg.png";
import v2 from "../../assets/v2.svg";
import cNum from "../../assets/CNum.svg";
import cNum2 from "../../assets/CNum2.svg";
import cNum3 from "../../assets/CNum3.svg";
import cNum4 from "../../assets/CNum4.svg";



const OurLaurels = () => {
    return (
        <div className={style.page}>
            <div className={style.Images}>
                <img src={image} className={style.leftImg} />
                <img src={image2} className={style.leftImg2} />
            </div>
            <div className={style.content}>
                <div className={style.left}>
                    <p className={style.title}>Awards & recognition</p>
                    <img src={v2} className={style.v2} />
                    <h1 className={style.subTitle}>Our Laurels</h1>

                    <div className={style.Group}>
                        <div className={style.div1}>
                            <div>
                                <img src={cNum} className={style.cNum} />
                                <h1 className={style.Num}>1</h1>
                            </div>
                            <div>
                                <h2 className={style.title1}>Bib Gourmond</h2>
                                <p className={style.subTitle1}>Lorem ipsum dolor sit lorem, consectetur.</p>
                            </div>
                        </div>


                        <div className={style.div1}>
                            <div>
                                <img src={cNum2} className={style.cNum} />
                                <h1 className={style.Num}>2</h1>
                            </div>
                            <div>
                                <h2 className={style.title1}>Bib Gourmond</h2>
                                <p className={style.subTitle1}>Lorem ipsum dolor sit amet, consectetur.</p>
                            </div>
                        </div>




                    </div>

                    <div className={style.Group}>
                        <div className={style.div1}>
                            <div>
                                <img src={cNum3} className={style.cNum} />
                                <h1 className={style.Num4}>4</h1>
                            </div>
                            <div>
                                <h2 className={style.title1}>Bib Gourmond</h2>
                                <p className={style.subTitle1}>Lorem ipsum dolor sit lorem, consectetur.</p>
                            </div>
                        </div>


                        <div className={style.div1}>
                            <div>
                                <img src={cNum4} className={style.cNum} />
                                <h1 className={style.Num}></h1>
                            </div>
                            <div>
                                <h2 className={style.title1}>Bib Gourmond</h2>
                                <p className={style.subTitle1}>Lorem ipsum dolor sit amet, consectetur.</p>
                            </div>
                        </div>


                    </div>

                </div>
                <div className={style.rigt}>
                    <div className={style.img}>
                        <img src={mgg} className={style.mgg} />
                        <img src={G} className={style.G} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurLaurels;
