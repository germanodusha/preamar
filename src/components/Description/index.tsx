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
            <Scroller parentoffset={parentofsetTop * 1.15}>
                <div className={styles.wrapper}>
                    <p>
                    PREAMAR, no cotidiano da ilha de São Luís, é sinônimo de maré cheia, vento forte, fluxo, abundância e alteração constante na paisagem local. Fenômeno que norteia a chegada e partida das embarcações comerciais, dos barcos de pesca e transporte de pessoas para diferentes regiões. São elementos que ultrapassam os ritos da vida prática, e se fazem presentes no campo afetivo, na maneira de sentir e olhar a cidade. É nesse mesmo sentido de força, continuidade e transformação, tão próprio das marés, que encontramos um elo possível para traduzir a produção artística maranhense. Um território potente, caracterizado pela riqueza das singularidades que se espraia, invade e transborda.
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
