import Image from "next/image"
import styles from "./styles.module.css"

const Slider = () => {
    return(
        <div className={styles.container}>
            <div className={styles.gradient}/>
            <div className={styles.wrapper}>
                <div>
                    <Image src="/photo-1.jpg" layout="fill" objectFit="cover"/>
                </div>
            </div>
        </div>
    )
}
export default Slider