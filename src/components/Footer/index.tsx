import Image from 'next/image';
import final from '../../../editavel';
import styles from './styles.module.css';

const Footer = () =>{
    return(
        <div className={styles.container}>
            <div>
                {final.map(
                    section => {
                        console.log(final)
                        return(
                            <>
                                {section}
                            </>
                        )
                    }
                )}
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