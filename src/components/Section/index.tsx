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
                <h3>{place}</h3>
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
                gap:5rem;
            }
            h3{
                font-weight:400;
            }
            h3:first-child {
                color:white;
            }
            `}</style>
        </div>
    )
}