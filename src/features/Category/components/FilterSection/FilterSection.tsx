import { Typography } from '../../../../shared/components/Typography'
import { ApricotIcon } from './assets/ApricotIcon'
import { BlackAndWhiteIcon } from './assets/BlackAndWhiteIcon'
import { BlackIcon } from './assets/BlackIcon'
import { RedIcon } from './assets/RedIcon'
import { SilverIcon } from './assets/SilverIcon'
import { TanIcon } from './assets/TanIcon'
import { SelectRange } from './components/SelectRange'
import styles from './index.module.css'

const GENDER = ['Male', 'Female']

const BREED = ['Small', 'Medium', 'Large']

const COLORS = [
    {
        color: 'Red',
        icon: <RedIcon />,
    },
    {
        color: 'Apricot',
        icon: <ApricotIcon />,
    },
    {
        color: 'Black',
        icon: <BlackIcon />,
    },
    {
        color: 'Black & White',
        icon: <BlackAndWhiteIcon />,
    },
    {
        color: 'Silver',
        icon: <SilverIcon />,
    },
    {
        color: 'Tan',
        icon: <TanIcon />,
    },
]

export const FilterSection = () => {
    return (
        <main className={styles.filterSection}>
            <Typography
                className={styles.title}
                variant="heading4"
                weight="bold"
            >
                Filter
            </Typography>
            <section className={styles.filtersContainer}>
                <Typography
                    className={styles.sectionTitle}
                    variant="body2"
                    weight="bold"
                >
                    Gender
                </Typography>
                <div className={styles.inputContainer}>
                    {GENDER.map((item) => {
                        return (
                            <Typography
                                className={styles.label}
                                as="label"
                                variant="body3"
                                weight="medium"
                            >
                                <input
                                    type="checkbox"
                                    name="myCheckbox"
                                    defaultChecked={false}
                                />
                                {item}
                            </Typography>
                        )
                    })}
                </div>
            </section>
            <section className={styles.filtersContainer}>
                <Typography
                    className={styles.sectionTitle}
                    variant="body2"
                    weight="bold"
                >
                    Color
                </Typography>
                <div className={styles.inputContainer}>
                    {COLORS.map((item) => {
                        return (
                            <Typography
                                className={styles.label}
                                as="label"
                                variant="body3"
                                weight="medium"
                            >
                                <input
                                    type="checkbox"
                                    name="myCheckbox"
                                    defaultChecked={false}
                                />
                                {item.icon}
                                {item.color}
                            </Typography>
                        )
                    })}
                </div>
            </section>
            <section className={styles.filtersContainer}>
                <Typography
                    className={styles.sectionTitle}
                    variant="body2"
                    weight="bold"
                >
                    Price
                </Typography>
                <SelectRange />
            </section>
            <section className={styles.filtersContainer}>
                <Typography
                    className={styles.sectionTitle}
                    variant="body2"
                    weight="bold"
                >
                    Breed
                </Typography>
                <div className={styles.inputContainer}>
                    {BREED.map((item) => {
                        return (
                            <Typography
                                className={styles.label}
                                as="label"
                                variant="body3"
                                weight="medium"
                            >
                                <input
                                    type="checkbox"
                                    name="myCheckbox"
                                    defaultChecked={false}
                                />
                                {item}
                            </Typography>
                        )
                    })}
                </div>
            </section>
        </main>
    )
}
