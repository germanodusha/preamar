import Image from "next/image"
import { useEffect, useState } from "react";
import styles from "./styles.module.css"

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            handleClick(1);
        }, 3000);
    }, [currentSlide]);

    function handleClick(direction:number) {
        console.log(direction, currentSlide)
        if(currentSlide>=0 && currentSlide<2){
            return setCurrentSlide(currentSlide+direction)
        }
        setCurrentSlide(0)
    }
    return(
        <div className={styles.container}>
            <div className={styles.gradient}/>
            <div className={`wrapper ${styles.wrapper }`}>
                <div>
                    <Image src="/photo-3.jpg" alt="photo" layout="fill" objectFit="cover"/>
                </div>
                <div>
                    <Image src="/photo-2.jpg" alt="photo" layout="fill" objectFit="cover"/>   
                </div>
                <div>
                    <Image src="/photo-1.jpg" alt="photo" layout="fill" objectFit="cover"/>
                </div>
            </div>
            <div className={styles.leftArrow} onClick={()=>{handleClick(-1)}}/>
            <div className={styles.rightArrow} onClick={()=>{handleClick(1)}}/>
            <style jsx>{`
            .wrapper {
                transform: translateX(${currentSlide * -100}%);
                transition: all 0.8s ease-in-out;
            }
            `}</style>
        </div>
    )
}
export default Slider