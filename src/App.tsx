import { Button } from './components/Button'
import { Typography } from './shared/components/Typography'
import { VectorIcon } from './shared/icons/VectorIcon'

function App() {
    return (
        <>
            <main>
                <Typography variant="heading4" weight="medium">
                    Hello world!
                </Typography>
                <Typography variant="heading2" weight="bold">
                    Hello world!
                </Typography>
                <Typography variant="body1" weight="regular">
                    Hello world!
                </Typography>
                <Button size="M" variant="default">
                    Click
                </Button>
                <Button size="M" variant="outline" disabled>
                    Click
                </Button>
                <div>
                    <Button size="L" variant="default">
                        Click
                    </Button>
                    <Button size="L" variant="outline">
                        Click
                    </Button>
                </div>
                <div>
                    <Button
                        size="M"
                        variant="default"
                        iconAfter={<VectorIcon />}
                    >
                        Click
                    </Button>
                    <Button
                        size="M"
                        variant="outline"
                        iconBefore={<VectorIcon />}
                    >
                        Click
                    </Button>
                    <Button
                        size="M"
                        variant="outline"
                        iconBefore={<VectorIcon />}
                    >
                        Click here
                    </Button>
                    <Button
                        size="M"
                        variant="outline"
                        iconBefore={<VectorIcon />}
                    ></Button>
                </div>
            </main>
        </>
    )
}

export default App
