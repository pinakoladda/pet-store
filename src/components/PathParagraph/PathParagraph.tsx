import { Typography } from '../../shared/components/Typography'
import styles from './index.module.css'

interface PathParagraphProps {
    path: string[]
}

export const PathParagraph = ({ path }: PathParagraphProps) => {
    return (
        <div className={styles.pathContainer}>
            {path.map((route, index) => {
                return (
                    <>
                        <Typography
                            className={styles.pathText}
                            variant="body3"
                            weight="medium"
                        >
                            {route}
                        </Typography>
                        {index < path.length - 1 && (
                            <Typography
                                className={styles.pathText}
                                variant="body3"
                                weight="medium"
                            >{`>`}</Typography>
                        )}
                    </>
                )
            })}
        </div>
    )
}
