 import {Link} from "react-router-dom";
 import imageMain from "../../tools/hogarts_legaxy.jpg";
 import styles from "./LandingPage.module.css";


export default function LandingPage(){

    return(
        <div className={styles.wallpaper}>
            <img src={imageMain} alt="imageMain" />

            <div className={styles.buttonHome} >
                <div className={styles.buttonDiv}>
                    <Link to={"/home"}>
                        <button>GO TO HOME</button>
                    </Link>
                </div>
            </div>
        </div>
    ) 
};









