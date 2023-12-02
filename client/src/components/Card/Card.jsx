import styles from "./Card.module.css";
import tags from "../../tools/tag-svgrepo-com.svg";

export default function Card({id, image, name, genres}) {

    return(

        <div id={id} className={styles.card}>

            <div className={styles.subcard}>
                <img className={styles.image} src={image} alt={name}></img>
                <div className={styles.info}>
                    <h4>{name}</h4>
                    <div className={styles.genres}>
                        {
                            genres.length && (
                                <div>
                                    <img src={tags} alt="icon"></img>
                                    <h5>{genresShow}</h5>
                                </div>
                            )
                        }
                    </div>  
                </div>
            </div>
            <div className={styles.show_grid}>{name}</div>
        </div>
    )
}


