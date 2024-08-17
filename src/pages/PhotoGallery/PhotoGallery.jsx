import React from 'react';
import style from "./PhotoGallery.module.css"
import img1 from "../../assets/img1.png"
import img2 from "../../assets/img2.png"
import img3 from "../../assets/img3.png"
import v2 from "../../assets/v2.svg"
import mgg from "../../assets/mgg.png"


const PhotoGallery = () => {
  return (
    <div className={style.page}>
      <div className={style.content}>
        <div className={style.left}>
          <p className={style.Instagram}>
            Instagram
          </p>
          <img src={v2} className={style.v2} />
          <h1 className={style.title}>Photo Gallery</h1>
          <p className={style.pragraph}>
            Lorem ipsum dolor sit amet consectetur. Labore est provident aperiam sint quia.
            Doloribus dolores id aspernatur. Beatae, quisquam libero?</p>

          <button className={style.btn}>View More</button>
        </div>
        <div className={style.right}>
          <div className={style.img}>

            <img src={img3} className={style.image} />
            <img src={img1} className={style.image} />
            <img src={img2} className={style.image} />
            <img src={mgg} className={style.mgg} />


          </div>
        </div>

      </div>
    </div>
  );
}

export default PhotoGallery;
