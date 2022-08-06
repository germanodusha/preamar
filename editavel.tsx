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
                CHÃO SLZ (@CHAOSLZ)/LIMA GALERIA (@LIMAGALERIA)<br/>
                SÃO LUIS, 26 ABRIL A 15 MAIO DE 2022
            </>
            }
            description={
                <>
                <u>ARTISTAS</u><br/>
                CERAMISTAS DE ITAMATATIUA, CLÁUDIO COSTA, DINHO ARAÚJO, GÊ VIANA, GENILSON GUAJAJARA, INGRID BARROS, MÁRCIO VASCONCELOS, MARCOS FERREIRA, MARLENE BARROS, PABLO MONTEIRO, ROMANA MARIA, SILVANA MENDES, THIAGO FONSECA, THIAGO MARTINS DE MELO, TASSILA CUSTODES, TIETA MACAU, TON BEZERRA, VICENTE MARTINS JR.<br/>
                <u>CURADORIA</u><br/>
                SAMANTHA MOREIRA, FREDERICO SILVA, YURI LOGRADO, MARCO LIMA<br/>
                <u>REALIZAÇÃO</u><br/>
                CHÃO SLZ, LIMA GALERIA, CASA DO SEREIO<br/>
                <u>PARCERIA</u><br/>
                DEPARTAMENTO DE ARTES VISUAIS DA UNIVERSIDADE FEDERAL DO MARANHÃO - UFMA
                </>
            }/>            
                        
const secondSection =
            <Section
            title={
            <>PROCESSOS FORMATIVOS</>
            }
            place={
            <>CASA DO SEREIO (@CASADOSEREIO)<br/>
            ALCÂNTRA, MARÇO E ABRIL DE 2022
            </>
            }
            description={
            <><u>RESIDÊNCIA 1</u><br/>
            SILVANA MENDES E TASSILA CUSTODES<br/>
            <u>RESIDÊNCIA 2</u><br/>
            MARCOS FERREIRA<br/>
            <u>RESIDÊNCIA 3</u><br/>
            THIAGO MARTINS DE MELO E GERMANO DUSHÁ
            </>
            }/>   

const thirdSection =
            <Section
            title={
            <>CONVERSAS ABERTAS</>
            }
            place={
            <>CHÃO SLZ (@CHAOSLZ)/LIMA GALERIA (@LIMAGALERIA)<br/>
            SÃO LUIS, 27 E 28 DE ABRIL DE 2022
            </>
            }
            description={
                <>
                    <u>COLABORAÇÕES E COAUTORIAS ENTRE ARTISTAS E CURADORES</u> COM RAFAEL RG, THIAGO MARTINS DE MELO E GERMANO DUSHÁ <br/>
                    <u>CIRCULAÇÃO E MERCADO DE ARTE</u> COM GERMANO DUSHÁ
                </>
            }/>

const fourthSection =
            <Section
            title={
            <>SP-ARTE ROTAS BRASILEIRAS</>
            }
            place={
            <>ARCA<br/>
            SÃO PAULO, 24 A 28 DE AGOSTO 
            </>
            }
            description={
             <>
                <u>ARTISTAS</u><br/>
            SILVANA MENDES, DINHO ARAÚJO, MARCIO VASCONCELOS
            <br/>
                <u>CURADORIA</u><br/>
                SAMANTHA MOREIRA, FREDERICO SILVA, YURI LOGRADO, MARCO LIMA, GERMANO DUSHÁ
                </>
            }/>   
      
const final = [firstSection, secondSection, thirdSection, fourthSection]
export default final;
