import { Typography } from '../../../../../../shared/components/Typography'
import styles from './index.module.css'

interface FieldCardProps {
    image: string
    title: string
    text: string
}

export const FieldCard = ({ image, title, text }: FieldCardProps) => {
    return (
        <main className={styles.card}>
            <img src={image} alt={title} className={styles.image} />
            <section className={styles.cardText}>
                <Typography
                    as="span"
                    variant="body5"
                    weight="bold"
                    className={styles.note}
                >
                    Pet knowledge
                </Typography>
                <Typography
                    className={styles.title}
                    variant="body2"
                    weight="bold"
                >
                    {title}
                </Typography>
                <Typography
                    className={styles.text}
                    variant="body3"
                    weight="regular"
                >
                    {text}
                </Typography>
            </section>
        </main>
    )
}
