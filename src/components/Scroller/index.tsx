import { ReactNode, useEffect, useRef, useState } from "react"
import useScroll from "../../hooks/useScroll";

interface ScrollerProps {
    children:ReactNode;
    parentoffset?:number;
}

const Scroller = ({children, parentoffset=0}:ScrollerProps) => {
    const scroll = useScroll();
    const divRef = useRef<HTMLDivElement>(null);
    const {offsetTop} = divRef.current || {offsetTop:0};
    const {offsetHeight} = divRef.current || {offsetHeight:0};
    const [higherScroll, setHigherScroll] = useState(0);
    useEffect(()=>{
        if(scroll > higherScroll){
            setHigherScroll(scroll)
        }
    },[scroll])
    return(
        <div ref={divRef} className={higherScroll>Math.abs( parentoffset - offsetHeight ) * 0.9?'is-visible':'is-not-visible'}>
            {children}
        </div>
    )
}
export default Scroller