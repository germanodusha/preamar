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
                CHÃO SLZ<br/>
                LIMA GALERIA<br/>
                SÃO LUIS<br/>
                26.ABR-15.MAI/2022
            </>
            }
            description={
                <>
                <i>ARTISTAS</i><br/>
                CERAMISTAS DE ITAMATATIUA, CLÁUDIO COSTA, DINHO ARAÚJO, GÊ VIANA, GENILSON GUAJAJARA, INGRID BARROS, MÁRCIO VASCONCELOS, MARCOS FERREIRA, MARLENE BARROS, PABLO MONTEIRO, ROMANA MARIA, SILVANA MENDES, THIAGO FONSECA, THIAGO MARTINS DE MELO, TASSILA CUSTODES, TIETA MACAU, TON BEZERRA, VICENTE MARTINS JR.<br/>
                <i>CURADORIA</i><br/>
                SAMANTHA MOREIRA, FREDERICO SILVA, YURI LOGRADO, MARCO LIMA<br/>
                <i>REALIZAÇÃO</i><br/>
                CHÃO SLZ, LIMA GALERIA, CASA DO SEREIO<br/>
                <i>PARCERIA</i><br/>
                DEPARTAMENTO DE ARTES VISUAIS DA UNIVERSIDADE FEDERAL DO MARANHÃO - UFMA
                </>
            }/>            
                        
const secondSection =
            <Section
            title={
            <>PROCESSOS FORMATIVOS</>
            }
            place={
            <>CASA DO SEREIO<br/>
            ALCÂNTRA<br/>
            MAR-ABR/2022
            </>
            }
            description={
            <><i>RESIDÊNCIA 1</i><br/>
            SILVANA MENDES E TASSILA CUSTODES<br/>
            <i>RESIDÊNCIA 2</i><br/>
            MARCOS FERREIRA<br/>
            <i>RESIDÊNCIA 3</i><br/>
            THIAGO MARTINS DE MELO E GERMANO DUSHÁ
            </>
            }/>   

const thirdSection =
            <Section
            title={
            <>CONVERSAS ABERTAS</>
            }
            place={
            <>CHÃO SLZ<br/>
            LIMA GALERIA<br/>
            <\>
            SÃO LUIS<br/>
            27-28.ABR/2022
            
            }
            description={
                <>
                    <i>COLABORAÇÕES E COAUTORIAS ENTRE ARTISTAS E CURADORES</i> COM RAFAEL RG, THIAGO MARTINS DE MELO E GERMANO DUSHÁ <br/>
                    <i>CIRCULAÇÃO E MERCADO DE ARTE</i> COM GERMANO DUSHÁ
                </>
            }/>

const fourthSection =
            <Section
            title={
            <>SP-ARTE ROTAS BRASILEIRAS</>
            }
            place={
            <>ARCA<br/>
            SÃO PAULO<br/>
            24-28/AGO 
            </>
            }
            description={
             <>
                <i>ARTISTAS</i><br/>
            SILVANA MENDES, DINHO ARAÚJO, MARCIO VASCONCELOS
            <br/>
                <i>CURADORIA</i><br/>
                SAMANTHA MOREIRA, FREDERICO SILVA, YURI LOGRADO, MARCO LIMA, GERMANO DUSHÁ
                </>
            }/>   
      
const final = [firstSection, secondSection, thirdSection, fourthSection]
export default final;
