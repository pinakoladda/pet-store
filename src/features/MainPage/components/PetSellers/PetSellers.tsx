import { Button } from '../../../../components/Button'
import { Typography } from '../../../../shared/components/Typography'
import { ArrowIcon } from '../../../../shared/icons/ArrowIcon'
import shebaLogo from './assets/sheba.png'
import whiskasLogo from './assets/whiskas.png'
import bakersLogo from './assets/bakers.png'
import felixLogo from './assets/felix.png'
import goodBoyLogo from './assets/goodboy.png'
import butchersLogo from './assets/butchers.png'
import pedigreeLogo from './assets/pedigree.png'

import styles from './index.module.css'

export const PetSellers = () => {
    return (
        <main className={styles.petSellers}>
            <header className={styles.headerContainer}>
                <div className={styles.textContainer}>
                    <Typography
                        className={styles.subtitle}
                        as="span"
                        variant="body2"
                        weight="medium"
                    >
                        Proud to be part of
                    </Typography>
                    <Typography
                        className={styles.title}
                        as="span"
                        variant="heading4"
                        weight="bold"
                    >
                        Pet Sellers
                    </Typography>
                </div>
                <Button
                    className={styles.btn}
                    size="M"
                    variant="outline"
                    iconAfter={<ArrowIcon />}
                >
                    View all our sellers
                </Button>
            </header>
            <section className={styles.logosBar}>
                <img src={shebaLogo} alt="sheba seller logo" />
                <img src={whiskasLogo} alt="sheba seller logo" />
                <img src={bakersLogo} alt="sheba seller logo" />
                <img src={felixLogo} alt="sheba seller logo" />
                <img src={goodBoyLogo} alt="sheba seller logo" />
                <img src={butchersLogo} alt="sheba seller logo" />
                <img src={pedigreeLogo} alt="sheba seller logo" />
            </section>
            <Button
                className={styles.btnSmallDevice}
                size="M"
                variant="outline"
                iconAfter={<ArrowIcon />}
            >
                View all our sellers
            </Button>
        </main>
    )
}
