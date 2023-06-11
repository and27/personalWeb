import styles from './Scurve.module.css'
import globalStyles from '../../page.module.css'
import Image from 'next/image';

const sCurveTitle = "Why";
const sCurveDescription = ["In a world driven by technology, we have been granted boundless opportunities to create innovative digital applications that have the power to revolutionize our lives. Yet, amidst this digital revolution, a daunting challenge looms large before us: safeguarding our invaluable digital assets from the ever-growing threats of cyberattacks, data breaches, and malicious exploitation.",
"My vision transcends the creation of ordinary websites and apps. I am committed to crafting extraordinary digital solutions through immersive dynamic content, robust security measures. and personalized interactions. With my guidance, you will not only protect your digital assets" 
]

const Scurve = (title:string=sCurveTitle, description:Array<string>=sCurveDescription) => {
    return (
        <section className={globalStyles.scurve}>
            <div className={globalStyles.container}>
                <div className={styles.scurve__inner}>
                    <div className={styles.scurve__content}>
                        <h2 className={styles.scurve__title}>Why</h2>
                        {description.map((description)=>(
                             <p className={globalStyles.section__text}>
                                {description}
                             </p>
                        ))}
                    </div>
                    <div className={styles.scurve__media}>
                        <Image src="/website.png" width={300} height={300} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Scurve;