import './index.css'

import ImgRetro from "../../assets/images/image-retro-pcs.jpg"
import ImgLeptop from "../../assets/images/image-top-laptops.jpg"
import ImgGame from "../../assets/images/image-gaming-growth.jpg"

export default function BannerImagens(){
    return(
        <section className='wrapper-container'>
            <div className="banner-box">
                <img src={ImgRetro} alt="" />
                <div className="box-right">
                    <h1>01</h1>
                    <h3>Reviving Retro PCs</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className="banner-box">
                <img src={ImgLeptop} alt="" />
                <div className="box-right">
                    <h1>02</h1>
                    <h3>Top 10 Laptops of 2022</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className="banner-box">
                <img src={ImgGame} alt="" />
                <div className="box-right">
                    <h1>03</h1>
                    <h3>The Growth Of Gaming</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </section>
    )
}