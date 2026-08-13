import heroLagoon from '../assets/images/hero-lagoon.jpg'
import hammockCove from '../assets/images/hammock-cove.jpg'
import sunsetStilts from '../assets/images/sunset-stilts.jpg'
import shorelinePalms from '../assets/images/shoreline-palms.jpg'

export type Destination = {
  id: string
  title: string
  country: string
  region: string
  excerpt: string
  description: string
  image: string
  latitude: number
  longitude: number
  tags: string[]
}

export const heroImage = heroLagoon

export const featuredDestinations: Destination[] = [
  {
    id: 'zalivot-na-tishinata',
    title: 'Заливот на тишината',
    country: 'Грција',
    region: 'Егејско Море',
    excerpt:
      'Каде водата е толку мирна што времето заборава да тргне натаму.',
    description:
      'Скриен залив со мирна вода, тивки утра и чувство дека целиот свет е малку подалеку. Место за оние што сакаат да забават и едноставно да останат во моментот.',
    image: hammockCove,
    latitude: 39.0742,
    longitude: 23.5504,
    tags: ['Море', 'Тишина', 'Природа'],
  },
  {
    id: 'zalez-bez-svedotsi',
    title: 'Залез без сведоци',
    country: 'Грција',
    region: 'Јонско Море',
    excerpt:
      'Куќи на вода, небо во пламен, и ниту еден друг патник наоколу.',
    description:
      'Мало крајбрежно место каде денот завршува бавно. Дрвените куќи над водата, топлото вечерно светло и тишината создаваат момент кој тешко се повторува.',
    image: sunsetStilts,
    latitude: 38.7078,
    longitude: 20.6476,
    tags: ['Залез', 'Море', 'Локален живот'],
  },
  {
    id: 'bregot-shto-go-chuvaat-palmite',
    title: 'Брегот што го чуваат палмите',
    country: 'Турција',
    region: 'Медитеран',
    excerpt:
      'Бела песочна линија што исчезнува зад завеса од кокосови палми.',
    description:
      'Долг мирен брег со бистра вода и палми кои го одделуваат морето од остатокот на светот. Идеално место за денови без строг распоред.',
    image: shorelinePalms,
    latitude: 36.5492,
    longitude: 29.1199,
    tags: ['Плажа', 'Природа', 'Медитеран'],
  },
]

export const destinationById = (id: string) =>
  featuredDestinations.find((destination) => destination.id === id)