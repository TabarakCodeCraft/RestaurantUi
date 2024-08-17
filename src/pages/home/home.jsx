import React from 'react';
import style from "../home/home.module.css";
import Container from '../../components/container/container';
import Hearder from '../../components/header/hearder';
import img from "../../assets/homeImg.png"
import v1 from "../../assets/v1.svg";

const Home = () => {
    return (
        <>
            <Container>
                {/* <Hearder /> */}
                
                <div className={style.home}>
                    <div className={style.right}>
                        <div >
                            <p className={style.flavaur}>Chase the new Flavour</p>
                            <img src={v1} className={style.v1} />
                        </div>
                        <div> <h1 className={style.fine}>
                            The Key To <br />Fine Dining
                        </h1>
                        </div>

                        <div className={style.pp}> <p>Sit tellus lobortis sed senectus vivamus molestie.<br />
                            Condimentum volutpat morbi facilisis quam scelerisque sapien. <br />
                            Et, penatibus aliquam amet tellus </p>
                        </div>

                        <div className={style.explore}> <button>Explore Menu</button></div>
                    </div>
                    <div className={style.left}>
                        <img src={img} className={style.image} />
                    </div>
                    <div className={style.space}></div>
                </div>
            </Container>

        </>
    );
}

export default Home;
