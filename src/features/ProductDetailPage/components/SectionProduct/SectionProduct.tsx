import { useMediaQuery } from '@uidotdev/usehooks'
import { Button } from '../../../../components/Button'
import { PathParagraph } from '../../../../components/PathParagraph'
import { Typography } from '../../../../shared/components/Typography'
import { ChatIcon } from '../../../../shared/icons/ChatIcon'
import { ImagesCarousel } from '../ImagesCarousel'
import styles from './index.module.css'
import { ProductLabels } from '../ProductLabels'
import { CurtainIcon } from '../../../../shared/icons/CurtainIcon'
import { ShareIcon } from '../../../../shared/icons/ShareIcon'

const INFO_FIELDS = [
    { name: 'SKU', value: ': #1000078' },
    { name: 'Gender', value: ': Female' },
    { name: 'Age', value: ': 2 Months' },
    { name: 'Size', value: ': Small' },
    { name: 'Color', value: ': Appricot & Tan' },
    { name: 'Vaccinated', value: ': Yes' },
    { name: 'Dewormed', value: ': Yes' },
    { name: 'Cert', value: ': Yes (MKA)' },
    { name: 'Microchip', value: ': Yes' },
    { name: 'Location', value: ': Vietnam' },
    { name: 'Published Date', value: ': 12-Oct-2022' },
    {
        name: 'Additional Information',
        value: ': Pure breed Shih Tzu. Good body structure. With MKA cert and Microchip. Father from champion lineage.',
    },
]

const PRODUCT_PATH = ['Home', 'Dog', 'Large Dog', 'Shiba Inu Sepia']

export const SectionProduct = () => {
    const isSmallDevice = useMediaQuery('only screen and (max-width : 600px)')

    return (
        <main className={styles.sectionProduct}>
            {isSmallDevice && (
                <span className={styles.curtain}>
                    <CurtainIcon />
                </span>
            )}
            {!isSmallDevice && (
                <div>
                    <ImagesCarousel />
                    <ProductLabels />
                </div>
            )}
            <section className={styles.infoContainer}>
                <PathParagraph path={PRODUCT_PATH} />
                <section className={styles.mainInfo}>
                    {!isSmallDevice && (
                        <Typography
                            className={styles.productArticle}
                            variant="body3"
                            weight="medium"
                        >
                            SKU #1000078
                        </Typography>
                    )}
                    <Typography
                        className={styles.productName}
                        variant="heading4"
                        weight="bold"
                    >
                        Shiba Inu Sepia
                    </Typography>
                    <Typography variant="body1" weight="bold">
                        34.000.000 VND
                    </Typography>
                </section>
                <div className={styles.btnContainer}>
                    <Button
                        className={styles.btn}
                        variant="default"
                        size="L"
                        textWeight="bold"
                    >
                        Contact us
                    </Button>
                    <Button
                        textWeight="bold"
                        className={styles.buttonOutline}
                        variant="outline"
                        size="L"
                        iconBefore={<ChatIcon />}
                    >
                        Chat with Monito
                    </Button>
                </div>
                <section className={styles.info}>
                    {isSmallDevice && (
                        <section className={styles.sectionShare}>
                            <p className={styles.infoParagraphSmallDevice}>
                                Information
                            </p>
                            <div className={styles.shareContainer}>
                                <ShareIcon width="20px" height="20px" />
                                <Typography
                                    className={styles.labelShare}
                                    as="span"
                                    variant="body3"
                                    weight="bold"
                                >
                                    Share
                                </Typography>
                            </div>
                        </section>
                    )}
                    {INFO_FIELDS.map((field) => {
                        return (
                            <div className={styles.infoField} key={field.name}>
                                <Typography
                                    variant="body3"
                                    weight="medium"
                                    className={styles.paragraph}
                                >
                                    {field.name}
                                </Typography>
                                <Typography
                                    variant="body3"
                                    weight="medium"
                                    className={styles.paragraph}
                                >
                                    {field.value}
                                </Typography>
                            </div>
                        )
                    })}
                </section>
            </section>
        </main>
    )
}
