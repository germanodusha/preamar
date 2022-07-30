import { Section } from "./src/components/Section";

const firstSection = 
            <Section
            title={
            <>
                EXPOSIÇÃO PREAMAR
            </>
            }
            place={
            <>
                CHÃO/LIMA GALERIA<br/>
                SÃO LUIS, 26 ABRIL - 15 MAIO
            </>
            }
            description={
            <>
            CURADORIA:<br/>
            SAMANTHA,SAMANTHA,SAMANTHA,SAMANTHA,SAMANTHA,SAMANTHA,SAMANTHA,
            SAMANTHA,SAMANTHA,SAMANTHA,SAMANTHA,SAMANTHA,SAMANTHA. <br/>
            ARTISTAS:<br/>
            SAMANTHASAMANTHASAMANTHASAMANTHASAMANTHASAMANTHASAMANTHASAMANTHA,
            SAMANTHASAMANTHASAMANTHASAMANTHASAMANTHASAMANTHASAMANTHASAMANTHA,
            SAMANTHASAMANTHASAMANTHASAMANTHASAMANTHASAMANTHA
            </> 
            }
/> 
  
             

const secondSection =
            <Section
            title={
            <>teste</>
            }
            place={
            <>teste</>
            }
            description={
            <>teste</>
            }
/> 
             

const final = [firstSection, secondSection]
export default final;