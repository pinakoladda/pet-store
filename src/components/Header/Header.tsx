import { Typography } from '../../shared/components/Typography'
import { CurrencyVNDIcon } from '../../shared/icons/CurrencyVNDIcon'
import { LogoIcon } from '../../shared/icons/LogoIcon'
import { Button } from '../Button'
import { CurrencySelect } from './components/CurrencySelect'
import { Search } from './components/Search'
import rectangleYellowMediumTop from './assets/rectangleYellowMediumTop.png'

import { useMediaQuery } from '@uidotdev/usehooks'

import styles from './index.module.css'
import { SearchIcon } from '../../shared/icons/SearchIcon'
import { MenuIcon } from '../../shared/icons/MenuIcon'

const LINKS = ['Home', 'Category', 'About', 'Contact']

export const Header = () => {
    const isSmallDevice = useMediaQuery('only screen and (max-width : 1350px)')

    if (isSmallDevice) {
        return (
            <header className={styles.header}>
                <img
                    className={styles.imgRectangleYellowMediumTop}
                    src={rectangleYellowMediumTop}
                    alt="rectangle yellow medium"
                />
                <div className={styles.iconContainer}>
                    <MenuIcon />
                </div>
                <LogoIcon />
                <SearchIcon />
            </header>
        )
    }

    return (
        <header className={styles.header}>
            <img
                className={styles.imgRectangleYellowMediumTop}
                src={rectangleYellowMediumTop}
                alt="rectangle yellow medium"
            />
            <section className={styles.linksContainer}>
                <LogoIcon />
                {LINKS.map((link) => {
                    return (
                        <a key={link} className={styles.headerLink}>
                            <Typography variant="body2" weight="bold">
                                {link}
                            </Typography>
                        </a>
                    )
                })}
            </section>
            <section className={styles.searchContainer}>
                <Search />
                <Button variant="default" size="L">
                    Join the community
                </Button>
                <div className={styles.selectContainer}>
                    <CurrencyVNDIcon />
                    <CurrencySelect />
                </div>
            </section>
        </header>
    )
}
