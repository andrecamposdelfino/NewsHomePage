import Folder from '../../assets/images/image-web-3-desktop.jpg'
import './index.css'

export default function Banner() {
    return (
        <section>

            <div className="box-left">

                <img src={Folder} alt="Folder" />

                <div className="box-left-division">

                    <h1>The Bright <br />Future of <br />Web 3.0 ?</h1>

                    <div className="box-division-right">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente maiores incidunt aut reprehenderit fuga iure eveniet suscipit voluptates ratione quae adipisci</p>
                        <button>read more</button>
                    </div>

                </div>

            </div>

        </section>
    )
}