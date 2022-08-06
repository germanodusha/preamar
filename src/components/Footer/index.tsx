import Image from 'next/image';
import { createElement, useEffect, useRef, useState } from 'react';
import final from '../../../editavel';
import Scroller from '../Scroller';
import styles from './styles.module.css';
import Logo from "../../../public/Preamar_Logo2.png"

const Footer = () =>{
    const div = createElement('div', { className: styles.container }) as unknown as HTMLDivElement;
    const containerRef = useRef<HTMLDivElement>(div);
    const [parentofsetTop, setoffsetTop] = useState(0)
    useEffect(
        ()=>{
            const {offsetTop} = containerRef.current || {offsetTop:0};
            setoffsetTop(offsetTop)
        },[])
    return(
        <div ref={containerRef} className={styles.container}>
                <h3 className={styles.title}>AÇÕES REALIZADAS</h3>
                <div className={styles.grid}>
                    <div className={styles.infoGrid}>
                        {final.map(
                            (section, index) => {
                                return(
                                    <div key={index}>
                                        <Scroller  parentoffset={parentofsetTop * 1.05}>
                                            {section}
                                        </Scroller>
                                    </div>
                                )
                            }
                            )}
                    </div>
                    <div>
                            <div className={styles.cover}>
                                
                                    <img src="/Preamar_Logo2.png" />
                                
                                
                                    <img src="/Preamar_Logo2.png"/>
                                
                                
                                    <img src="/Preamar_Logo2.png" />
                                
                            </div>
                    </div>
                </div>
        </div>
    )
}
export default Footer