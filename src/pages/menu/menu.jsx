import React from 'react';
import style from "../menu/menu.module.css";
import v1 from "../../assets/v1.svg";
import menu from "../../assets/menu.png";

const Menu = () => {
    return (
        <div>
            <div className={style.top}>
                <h3 className={style.h3}>Menu that fits your palate</h3>
                <img src={v1} className={style.v1} />
                <h1 className={style.today}>Today’s Special</h1>
            </div>
            <div className={style.center}>
                <div className={style.left}>
                    <div className={style.topLeft}>Islamic Drinks</div>
                    <div className={style.content}>
                        <div className={style.div1}>
                            <div className={style.name}>
                                <h3 className={style.h3}>Pomegranate Juice</h3>
                                <p className={style.p}>Fresh | Glass</p>
                            </div>
                            <div className={style.separator}></div>
                            <div className={style.price}>$5</div>
                        </div>

                        <div className={style.div1}>
                            <div className={style.name}>
                                <h3 className={style.h3}>Date Smoothie</h3>
                                <p className={style.p}>Fresh | Glass</p>
                            </div>
                            <div className={style.separator}></div>
                            <div className={style.price}>$6</div>
                        </div>

                        <div className={style.div1}>
                            <div className={style.name}>
                                <h3 className={style.h3}>Rose Water Lemonade</h3>
                                <p className={style.p}>Fresh | Glass</p>
                            </div>
                            <div className={style.separator}></div>
                            <div className={style.price}>$4</div>
                        </div>

                        <div className={style.div1}>
                            <div className={style.name}>
                                <h3 className={style.h3}>Mint Lassi</h3>
                                <p className={style.p}>Fresh | Glass</p>
                            </div>
                            <div className={style.separator}></div>
                            <div className={style.price}>$5</div>
                        </div>

                        <div className={style.div1}>
                            <div className={style.name}>
                                <h3 className={style.h3}>Saffron Milk</h3>
                                <p className={style.p}>Fresh | Glass</p>
                            </div>
                            <div className={style.separator}></div>
                            <div className={style.price}>$7</div>
                        </div>
                    </div>
                </div>
                <img src={menu} className={style.menuImg} />
                <div className={style.right}>
                    <div className={style.topLeft}>Fresh Drinks</div>
                    <div className={style.content}>
                        <div className={style.div1}>
                            <div className={style.name}>
                                <h3 className={style.h3}>Apple Cider</h3>
                                <p className={style.p}>Fresh | Glass</p>
                            </div>
                            <div className={style.separator}></div>
                            <div className={style.price}>$4</div>
                        </div>

                        <div className={style.div1}>
                            <div className={style.name}>
                                <h3 className={style.h3}>Ginger Ale</h3>
                                <p className={style.p}>Fresh | Glass</p>
                            </div>
                            <div className={style.separator}></div>
                            <div className={style.price}>$3</div>
                        </div>

                        <div className={style.div1}>
                            <div className={style.name}>
                                <h3 className={style.h3}>Mango Lassi</h3>
                                <p className={style.p}>Fresh | Glass</p>
                            </div>
                            <div className={style.separator}></div>
                            <div className={style.price}>$5</div>
                        </div>

                        <div className={style.div1}>
                            <div className={style.name}>
                                <h3 className={style.h3}>Cucumber Cooler</h3>
                                <p className={style.p}>Fresh | Glass</p>
                            </div>
                            <div className={style.separator}></div>
                            <div className={style.price}>$4</div>
                        </div>

                        <div className={style.div1}>
                            <div className={style.name}>
                                <h3 className={style.h3}>Berry Blast</h3>
                                <p className={style.p}>Fresh | Glass</p>
                            </div>
                            <div className={style.separator}></div>
                            <div className={style.price}>$6</div>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <button className={style.viewMoreBtn}>View More</button>
            </div>
            {/* <img src={test} alt="" /> */}
        </div>
    );
}

export default Menu;
