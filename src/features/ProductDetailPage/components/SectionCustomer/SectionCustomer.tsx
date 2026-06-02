import { Typography } from '../../../../shared/components/Typography'
import { GreyDotIcon } from '../../../../shared/icons/BlueDotIcon'
import { BlueDotIcon } from '../../../../shared/icons/GreyDotIcon'
import image1 from './assets/image1.jpg'
import image2 from './assets/image2.jpg'
import image3 from './assets/image3.jpg'
import image4 from './assets/image4.jpg'
import image5 from './assets/image5.png'

import styles from './index.module.css'

const CUSTOMER_PHOTOS = [image1, image2, image3, image4, image5]

export const SectionCustomer = () => {
    return (
        <main className={styles.sectionCustomer}>
            <Typography
                className={styles.header}
                variant="heading4"
                weight="bold"
            >
                Our lovely customer
            </Typography>
            <section className={styles.photos}>
                {CUSTOMER_PHOTOS.map((photo) => {
                    return (
                        <img
                            className={styles.img}
                            src={photo}
                            alt="happy cutomer with our pet"
                            key={photo}
                        />
                    )
                })}
            </section>
            <div className={styles.dotsContainer}>
                <BlueDotIcon />
                <GreyDotIcon />
                <GreyDotIcon />
                <GreyDotIcon />
                <GreyDotIcon />
            </div>
        </main>
    )
}
