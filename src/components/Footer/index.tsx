import Image from 'next/image';
import styles from './styles.module.css';

const Footer = () =>{
    return(
        <div className={styles.container}>
            <div>
                <h6 className={styles.title}>AÇÕES REALIZADAS</h6>
                <ul>
                    <li>
                        <ul>
                            <h6>EXPOSIÇÃO PREAMAR</h6>
                            <li>
                                <li>
                                    <ul>
                                        <li>
                                        CHÃO/LIMA GALERIA <br />
                                        SÃO LUIS, 26 ABRIL - 15 MAIO
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    CURADORA:
                                    <li>SAMANTHA MOREIRA, FREDERICO SILVA, YURI LOGRADO E MARCO LIMA</li>
                                </li>
                                <li>
                                    <ul>
                                        ARTISTAS:
                                        <li>SILVANA MENDES, GÊ VIANA, TASSILA CUSTODES, MARILENE BARROS, CLAÚDIO COSTA
                                            THIAGO MARTINS DE MELO, MARCIO VASCONCELOS, DINHO ARAÚJO, VICENTE MARTINS,
                                            INGRID BARROS, PABLO MONTEIRO, ROMANA MARIA, THIAGO FONSECA, MARCOS FERREIRA,
                                            TIETA MACAU, CERAMISTA DE ITAMATATUIA, TON BEZERRA, GENILSON GUARAJARARA
                                        </li>
                                    </ul>
                                </li>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <ul>
                                <h6>
                                SP-ARTE ROTAS BRASILEIRAS <br/>
                                </h6>
                                SÃO PAULO, 28 DE AGOSTO - 01 DE SETEMBRO
                            </ul>
                            <li>
                                CURADORIA:
                                <li>
                                    <li><p>SAMANTHA MOREIRA, FREDERICO SILVA, YURI LOGRADO E MARCO LIMA, GERMANO DUSHÁ</p></li>
                                </li>
                                ARTISTA:
                                <li>
                                    <li><p>SILVANA MENDES, DINHO ARAÚJO, MARCIO VASCONCELOS</p></li>
                                </li>
                            </li>
                        </ul>
                    </li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div>
                <div className={styles.sticky}>
                    <div className={styles.cover}>
                        <div>
                            <Image src="/Preamar_Logo2.png" objectFit="contain"  alt='image' layout="fill"/>
                        </div>
                        <div>
                            <Image src="/Preamar_Logo2.png" objectFit="contain"  alt='image' layout="fill"/>
                        </div>
                        <div>
                            <Image src="/Preamar_Logo2.png" objectFit="contain" alt='image' layout="fill"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer