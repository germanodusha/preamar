import Image from "next/image"
import { memo, ReactNode, useCallback, useMemo, useRef, useState } from "react";
import styles from "./styles.module.css";
interface SliderProps {
    fileNames: string[];
}

const Slider = ({fileNames}:SliderProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const click = useCallback(function handleClick(direction:number) {
        if(currentSlide===0 && direction === -1) {
            return;
        }
        if(currentSlide>=0 && currentSlide<fileNames.length-1){
            return setCurrentSlide(currentSlide+direction)
        }
        setCurrentSlide(0)
    },[currentSlide, fileNames])

    console.log(fileNames)
    return(
        <div className={styles.container}>
            <div className={styles.gradient}/>
            <div className={`wrapper ${styles.wrapper }`}>
                {fileNames.map((fileName, index) => {
                        return(
                            <div key={index} className={styles.cover}>
                                <Image src={`/corousel-photos/${fileName}`} objectFit="contain" alt='image' layout="fill"/>
                            </div>
                        )}
                )}
            </div>
            <div className={styles.leftArrow} onClick={()=>{click(-1)}}/>
            <div className={styles.rightArrow} onClick={()=>{click(1)}}/>
            <style jsx>{`
            .wrapper {
                transform: translateX(${currentSlide * -100}%);
                transition: all 0.8s ease-in-out;
                height: 100%;
                display: grid;
                grid-template-columns: repeat(${fileNames.length}, 100%);
            }
            `}</style>
        </div>
    )
}
export default memo(Slider);