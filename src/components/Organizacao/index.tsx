import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import Scroller from '../Scroller'
import styles from './styles.module.css'

const Organization = () =>{
    const containerRef = useRef<HTMLDivElement>();
    const [parentofsetTop, setoffsetTop] = useState(0)
    useEffect(
        ()=>{
            const {offsetTop} = containerRef.current || {offsetTop:0};
            setoffsetTop(offsetTop)
        },[])
    return (
        <div className={styles.container}>
            <div>
                <ul className={styles.parent}>
                    <li className={styles.chield}>
                        <Scroller parentoffset={parentofsetTop}>
                            <h3>IDEALIZAÇÃO</h3>
                        </Scroller>
                        <Scroller parentoffset={parentofsetTop}>
                            <ul>
                                <li>SAMANTHA MOREIRA</li>
                                <li>FREDERICO SILVA</li>
                                <li>YURI LOGRADO</li>
                                <li>MARCO LIMA</li>
                                <li>THIAGO MARTINS DE MELO</li>
                                <li>GERMANO DUSHÁ</li>
                            </ul>
                        </Scroller>
                    </li>
                    <li className={styles.chield}>
                        <Scroller parentoffset={parentofsetTop}>
                            <h3>ORGANIZAÇÃO</h3>
                        </Scroller>
                        <Scroller parentoffset={parentofsetTop}>
                            <ul>
                                <li>SAMANTHA MOREIRA</li>
                                <li>FREDERICO SILVA</li>
                                <li>YURI LOGRADO</li>
                                <li>MARCO LIMA </li>
                                <li>GERMANO DUSHÁ</li>
                            </ul>
                        </Scroller>
                    </li>
                    <li className={styles.chield}>
                        <Scroller parentoffset={parentofsetTop}>
                            <h3>IDENTIDADE VISUAL</h3>
                        </Scroller>
                        <Scroller parentoffset={parentofsetTop}>
                            <ul>
                                <li>RAUL LUNA</li>
                            </ul>
                        </Scroller>
                    </li>
                </ul>
            </div>
            <div className={styles.coverContainer}>
                <div className={styles.coverWrapper}>
                    <Image src="/Preamar_Logo2.png" alt='image' objectFit="contain" layout="fill"/>
                </div>
            </div>
        </div>
    )
}
export default Organization