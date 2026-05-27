import { Button } from '../../../../components/Button'
import { Typography } from '../../../../shared/components/Typography'
import { ArrowIcon } from '../../../../shared/icons/ArrowIcon'
import { FIELDS } from '../../../../shared/data/fields/fields'
import styles from './index.module.css'
import { FieldCard } from './components/FieldCard'

export const ListOfFields = () => {
    return (
        <main className={styles.listOfFields}>
            <header className={styles.headerContainer}>
                <div className={styles.container}>
                    <Typography
                        className={styles.subtitle}
                        variant="body2"
                        weight="medium"
                    >
                        You already know ?
                    </Typography>
                    <Typography
                        className={styles.title}
                        variant="heading4"
                        weight="bold"
                    >
                        Useful pet knowledge
                    </Typography>
                </div>
                <div className={styles.container}>
                    <Button
                        className={styles.btnLargeDevice}
                        size="M"
                        variant="outline"
                        iconAfter={<ArrowIcon />}
                    >
                        View more
                    </Button>
                </div>
            </header>
            <section className={styles.fields}>
                {FIELDS.map((field) => {
                    return (
                        <FieldCard
                            key={field.id}
                            image={field.image}
                            title={field.title}
                            text={field.text}
                        />
                    )
                })}
            </section>
            <Button
                className={styles.btnSmallDevice}
                size="M"
                variant="outline"
                iconAfter={<ArrowIcon />}
            >
                View more
            </Button>
        </main>
    )
}
