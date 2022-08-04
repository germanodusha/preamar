import { createElement, useEffect, useRef, useState } from 'react';
import Scroller from '../Scroller'
import styles from './styles.module.css'

const SecondGradient = ({secondGradientPos}:any) => {
    const div = createElement('div', { className: styles.container }) as unknown as HTMLDivElement;
    const containerRef = useRef<HTMLDivElement>(div);
    const [parentofsetTop, setoffsetTop] = useState(0)
    useEffect(
        ()=>{
            const {offsetTop} = containerRef.current || {offsetTop:0};
            setoffsetTop(offsetTop)

        },[])
    return(

                <div ref={containerRef} className={`${styles.container} teste`}>
                <Scroller parentoffset={parentofsetTop}>
                    <div className={styles.wrapper}>
                        <p>
                            PREAMAR no cotidiano da ilha de São Luís remete ao movimento de vai e vem das marés, caracterizada pelas grandes variações que adentram o continente, influenciando a geografia até uma distância aproximada de 150 km do litoral. Fenômeno que norteia a chegada e partida das embarcações comerciais, dos barcos de pesca e transporte de pessoas para diferentes regiões. Maré cheia é sinônimo de vento forte, fluxo, abundância e alteração constante na paisagem local. São elementos que ultrapassam os ritos da vida prática, e se fazem presentes no campo afetivo, na maneira de sentir e olhar a cidade. É nesse mesmo sentido de força, continuidade e transformação, tão próprio das marés, que encontramos um elo para traduzir a longa e constante trajetória da produção artística maranhense. Um território potente, caracterizado pela riqueza das singularidades que se espraia, invade, transborda e torna-se global.
                        </p>    
                    </div>
                </Scroller>
                <div className={styles.mask}/>
                <style jsx>{`
                    .teste {
                        top:${secondGradientPos}px;
                    }
                `}</style>
            </div>
    )
}
export default SecondGradient