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
            h3:last-child{
                margin:1rem 0px;
            }
            `}</style>
        </div>
    )
}