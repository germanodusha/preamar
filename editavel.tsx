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
                CHÃO SLZ/LIMA GALERIA<br/>
                SÃO LUIS, 26 ABRIL - 15 MAIO DE 2022
            </>
            }
            description={
                <>
                <u>CURADORIA</u><br/>
                SAMANTHA MOREIRA, FREDERICO SILVA, YURI LOGRADO, MARCO LIMA<br/>
                <u>ARTISTAS</u><br/>
                SILVANA MENDES, GÊ VIANA, TASSILA CUSTODES, MARLENE BARROS,
                CLÁUDIO COSTA, THIAGO MARTINS DE MELO, MARCIO VASCONCELOS,
                DINHO ARAÚJO, VICENTE MARTINS, INGRID BARROS, PABLO MONTEIRO,
                ROMANA MARIA, THIAGO FONSECA, MARCOS FERREIRA, TIETA MACAU, 
                CERAMISTAS DE ITAMATATUIA, TON BEZERRA, GENILSON GUAJARARA
                </>
            }/>            
                        
           const secondSection =
            <Section
            title={
            <>PROCESSOS FORMATIVOS ~ CONVERSAS</>
            }
            place={
            <>LIMA GALERIA<br/>
            SÃO LUIS, 28 DE ABRIL DE 2022 
            </>
            }
            description={
            <>CIRCULAÇÃO E MERCADO DE ARTE, COM GERMANO DUSHÁ</>
            }/>   

const final = [firstSection, secondSection]
export default final;
