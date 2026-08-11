import heroLagoon from '../assets/images/hero-lagoon.jpg'
import hammockCove from '../assets/images/hammock-cove.jpg'
import sunsetStilts from '../assets/images/sunset-stilts.jpg'
import shorelinePalms from '../assets/images/shoreline-palms.jpg'

export type Destination = {
  id: string
  title: string
  excerpt: string
  image: string
}

export const heroImage = heroLagoon

export const featuredDestinations: Destination[] = [
  {
    id: 'zalivot-na-tishinata',
    title: 'Заливот на тишината',
    excerpt: 'Каде водата е толку мирна што времето заборава да тргне натаму.',
    image: hammockCove,
  },
  {
    id: 'zalez-bez-svedotsi',
    title: 'Залез без сведоци',
    excerpt: 'Куќи на вода, небо во пламен, и ниту еден друг патник наоколу.',
    image: sunsetStilts,
  },
  {
    id: 'bregot-shto-go-chuvaat-palmite',
    title: 'Брегот што го чуваат палмите',
    excerpt: 'Бела песочна линија што исчезнува зад завеса од кокосови палми.',
    image: shorelinePalms,
  },
]
