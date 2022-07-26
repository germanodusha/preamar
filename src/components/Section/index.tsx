import { ReactNode } from "react";

interface SectionProps {
    title: ReactNode;
    place:ReactNode;
    description:ReactNode;
}
export const Section = ({title, place, description}:SectionProps) =>{
    return(
        <div className="container">
            <div className="wrapper">
                <h3>{title}</h3>
                <h3 className="place">{place}</h3>
                <h3>{description}</h3>
            </div>
            <style jsx>{`
            .container {
                line-break: auto;
                word-wrap: break-word;
                width: 100%;
                margin-bottom:4rem;
            }
            .container:global(b){
                color:rgba(255, 255, 255, 0.6);
            }
            .wrapper {
                display:grid;
                width: 100%;
                grid-template-columns: 1fr 1fr 1fr;
                grid-auto-flow: row;
                color:white;
            }
            .place {
                display:flex;
                flex-direction:column;
            }
            .place > :global(div) {
                margin-bottom:1rem;
            }
            h3{
                font-weight:400;
            }
            h3:first-child {
                color:white;
            }
            @media(max-width:768px){
                .wrapper {
                display:grid;
                width: 100%;
                grid-template-columns: 1fr;
                gap:1.5rem;
            }
            }
            `}</style>
        </div>
    )
}