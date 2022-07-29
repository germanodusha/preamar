import Image from 'next/image'
import styles from './styles.module.css'

const Organization = () =>{
    return (
        <div className={styles.container}>
            <div>
                <ul className={styles.parent}>
                    <li className={styles.chield}>IDEALIZAÇÃO
                        <ul>
                            <li>SAMANTHA MOREIRA</li>
                            <li>FREDERICO SILVA</li>
                            <li>YURI LOGRADO</li>
                            <li>MARCO LIMA</li>
                            <li>THIAGO MARTINS DE MELO</li>
                            <li>GERMANO DUSHÁ</li>
                        </ul>
                    </li>
                    <li className={styles.chield}>
                        ORGANIZAÇÃO
                        <ul>
                            <li>SAMANTHA MOREIRA</li>
                            <li>FREDERICO SILVA</li>
                            <li>YURI LOGRADO</li>
                            <li>MARCO LIMA </li>
                            <li>GERMANO DUSHÁ</li>
                        </ul>
                    </li>
                    <li className={styles.chield}>
                        IDENTIDADE VISUAL
                        <ul>
                            <li>RAUL LUNA</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className={styles.coverContainer}>
                <div className={styles.coverWrapper}>
                    <Image src="/Preamar_Logo2.png" alt='image' objectFit="contain" layout="fill"/>
                </div>
            </div>
        </div>
    )
}
export default Organization