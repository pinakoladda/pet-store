export type InfoFields = 'gene' | 'age' | 'size' | 'product'
type InfoData = { [key in InfoFields]?: string }

export interface Product {
    name: string
    price: string
    image: string
    gift?: string
    info: InfoData
}
