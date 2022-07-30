import { ReactElement, ReactNode } from "react";


interface SectionProps {
    title: ReactNode;
    place:ReactNode;
    members:ReactNode;
}
export const Section = ({title, place, members}:SectionProps) =>{
    return(
        <div>
            <h3>{title}</h3>
            <h3>{place}</h3>
            <h3>{members}</h3>
            <style jsx>{`
            h3:first-child {
                color:black;
            }
            h3:last-child{
                margin:3rem 0px;
            }
            `}</style>
        </div>
    )
}