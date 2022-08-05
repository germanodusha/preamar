import { createElement, useEffect, useRef, useState } from 'react';
import useWindowDimensions from '../../hooks/useWindowDimension';
import Scroller from '../Scroller'
import styles from './styles.module.css'

const Description = () =>{
    const div = createElement('div', { className: styles.container }) as unknown as HTMLDivElement;
    const {height} = useWindowDimensions()
    const containerRef = useRef<HTMLDivElement>(div);
    const [parentofsetTop, setoffsetTop] = useState(0)
    useEffect(
        ()=>{
            const {offsetTop} = containerRef.current || {offsetTop:0};
            setoffsetTop(offsetTop)
        },[])
    const stickyPos = containerRef.current.offsetHeight - height;
    console.log(stickyPos<0? 0:stickyPos)
    return(
            <div ref={containerRef} className={`${styles.container} + sticky`}>
            <Scroller parentoffset={parentofsetTop}>
                <div className={styles.wrapper}>
                    <p>
                        PREAMAR no cotidiano da ilha de São Luís remete ao movimento de vai e vem das marés, caracterizada pelas grandes variações que adentram o continente, influenciando a geografia até uma distância aproximada de 150 km do litoral. Fenômeno que norteia a chegada e partida das embarcações comerciais, dos barcos de pesca e transporte de pessoas para diferentes regiões. Maré cheia é sinônimo de vento forte, fluxo, abundância e alteração constante na paisagem local. São elementos que ultrapassam os ritos da vida prática, e se fazem presentes no campo afetivo, na maneira de sentir e olhar a cidade. É nesse mesmo sentido de força, continuidade e transformação, tão próprio das marés, que encontramos um elo para traduzir a longa e constante trajetória da produção artística maranhense. Um território potente, caracterizado pela riqueza das singularidades que se espraia, invade, transborda e torna-se global.
                    </p>    
                </div>
            </Scroller>
            <div className={styles.mask}/>
            <style jsx>{`
            .sticky {
                position: -webkit-sticky;
                position: sticky;
                top:-${stickyPos<0? "":stickyPos}px;
            }
            `}
            </style>
        </div>
    )
}

export default Description