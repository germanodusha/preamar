import Image from "next/image"
import { memo, ReactNode, useCallback, useMemo, useRef, useState } from "react";
import styles from "./styles.module.css";
interface SliderProps {
    fileNames: string[];
}

interface ModalProps {
    imgUrl: ReactNode;
    isOpen: boolean;
}

const Slider = ({fileNames}:SliderProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [modal, setModal] = useState<ModalProps>({imgUrl: "/corousel-photos/Chao1.jpg", isOpen: false});
    const click = useCallback(function handleClick(direction:number) {
        if(currentSlide===0 && direction === -1) {
            return;
        }
        if(currentSlide>=0 && currentSlide<fileNames.length-1){
            return setCurrentSlide(currentSlide+direction)
        }
        setCurrentSlide(0)
    },[currentSlide, fileNames])

    return(
        <div className={`${styles.container} containerModal`}>
            <div className={styles.gradient}/>
            <div className={`wrapper`}>
                {fileNames.map((fileName, index) => {
                        return(
                            <div onClick={()=>{setModal({imgUrl:`/corousel-photos/${fileName}`, isOpen:true})}} key={index} className={styles.cover}>
                                <Image src={`/corousel-photos/${fileName}`} objectFit="cover" alt='image' layout="fill"/>
                            </div>
                        )}
                )}
            </div>
            <div className={styles.leftArrow} onClick={()=>{click(-1)}}/>
            <div className={styles.rightArrow} onClick={()=>{click(1)}}/>
            <style jsx>{`
            .wrapper {
                transform: translateX(${currentSlide * -100}%);
                transition: all 2s ease-in-out;
                height: 100%;
                display: grid;
                grid-template-columns: repeat(${fileNames.length}, 100%);
            }
            `}</style>
        </div>
    )
}
export default memo(Slider);