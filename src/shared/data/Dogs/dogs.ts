import type { Product } from '../../types/product'
import dog1 from './images/image1.jpg'
import dog2 from './images/image2.jpg'
import dog3 from './images/image3.jpg'
import dog4 from './images/image4.jpg'
import dog5 from './images/image5.jpg'
import dog6 from './images/image6.jpg'
import dog7 from './images/image7.jpg'
import dog8 from './images/image8.jpg'

export const DOGS_FOR_SALE: Product[] = [
    {
        id: '1',
        name: 'MO231 - Pomeranian White',
        info: { gene: 'Male', age: '02 months' },
        price: '6.900.000 VND',
        image: dog1,
    },
    {
        id: '2',
        name: 'MO502 - Poodle Tiny Yellow',
        info: { gene: 'Female', age: '02 months' },
        price: '3.900.000 VND',
        image: dog2,
    },
    {
        id: '3',
        name: 'MO102 - Poodle Tiny Sepia',
        info: { gene: 'Male', age: '02 months' },
        price: '4.000.000 VND',
        image: dog3,
    },
    {
        id: '4',
        name: 'MO512 - Alaskan Malamute Grey',
        info: { gene: 'Male', age: '02 months' },
        price: '8.900.000 VND',
        image: dog4,
    },
    {
        id: '5',
        name: 'MO231 - Pembroke Corgi Cream',
        info: { gene: 'Male', age: '02 months' },
        price: '7.900.000 VND',
        image: dog5,
    },
    {
        id: '6',
        name: 'MO502 - Pembroke Corgi Tricolor',
        info: { gene: 'Female', age: '02 months' },
        price: '9.000.000 VND',
        image: dog6,
    },
    {
        id: '7',
        name: 'MO231 - Pomeranian White',
        info: { gene: 'Female', age: '02 months' },
        price: '6.500.000 VND',
        image: dog7,
    },
    {
        id: '8',
        name: 'MO512 - Poodle Tiny Dairy Cow',
        info: { gene: 'Male', age: '02 months' },
        price: '5.000.000 VND',
        image: dog8,
    },
]
