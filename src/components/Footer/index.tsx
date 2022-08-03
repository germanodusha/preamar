import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import final from '../../../editavel';
import Scroller from '../Scroller';
import styles from './styles.module.css';

const Footer = () =>{
    const containerRef = useRef<HTMLDivElement>();
    const [parentofsetTop, setoffsetTop] = useState(0)
    useEffect(
        ()=>{
            const {offsetTop} = containerRef.current || {offsetTop:0};
            setoffsetTop(offsetTop)
        },[])
    return(
        <div ref={containerRef} className={styles.container}>
            <div className={styles.textContainer}>
                <h3 className={styles.title}>AÇÕES REALIZADAS</h3>
                {final.map(
                    (section, index) => {
                        console.log(final)
                        return(
                            <>
                                        <Scroller parentoffset={parentofsetTop * 0.85}>
                                        {section}
                                        </Scroller>
                                </>
                        )
                    }
                    )}
            </div>
            <div>
                <div className={styles.sticky}>
                    <div className={styles.cover}>
                        <div>
                            <Image src="/Preamar_Logo2.png" objectFit="contain"  alt='image' layout="fill"/>
                        </div>
                        <div>
                            <Image src="/Preamar_Logo2.png" objectFit="contain"  alt='image' layout="fill"/>
                        </div>
                        <div>
                            <Image src="/Preamar_Logo2.png" objectFit="contain" alt='image' layout="fill"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer