import heroLagoon from '../assets/images/hero-lagoon.jpg'
import hammockCove from '../assets/images/hammock-cove.jpg'
import sunsetStilts from '../assets/images/sunset-stilts.jpg'
import shorelinePalms from '../assets/images/shoreline-palms.jpg'

export type Destination = {
  id: string
  title: string
  excerpt: string
  description: string
  image: string
  country: string
  region: string
  latitude: number
  longitude: number
  tags: string[]
  highlights: string[]
  bestTime: string
  experience: string
}

export const heroImage = heroLagoon

export const featuredDestinations: Destination[] = [
  {
    id: 'zalivot-na-tishinata',
    title: 'Заливот на тишината',
    excerpt:
        'Каде водата е толку мирна што времето заборава да тргне натаму.',
    description:
        'Скриен крајбрежен предел за оние што сакаат морето без гужвата. Тивките заливи, бистрото сино море и природниот пејзаж создаваат место каде деновите поминуваат поспоро.',
    image: hammockCove,
    country: 'Грција',
    region: 'Егејско Море',
    latitude: 36.85,
    longitude: 28.27,
    tags: ['Плажа', 'Мир', 'Природа'],
    highlights: [
      'Кристално чиста вода',
      'Скриени заливи',
      'Мирни утра покрај море',
      'Локални крајбрежни патеки',
    ],
    bestTime: 'Мај – октомври',
    experience: 'Море, природа и целосна тишина',
  },
  {
    id: 'zalez-bez-svedotsi',
    title: 'Залез без сведоци',
    excerpt:
        'Куќи на вода, небо во пламен, и ниту еден друг патник наоколу.',
    description:
        'Место создадено за долгите вечери кога сонцето полека исчезнува зад хоризонтот. Дрвените куќи над водата, мирното море и топлите бои на зајдисонцето го прават ова искуство поинакво од класичниот одмор.',
    image: sunsetStilts,
    country: 'Тајланд',
    region: 'Југоисточна Азија',
    latitude: 13.7563,
    longitude: 100.5018,
    tags: ['Зајдисонце', 'Вода', 'Осаменост'],
    highlights: [
      'Куќи над вода',
      'Незаборавни зајдисонца',
      'Тивки вечери',
      'Автентична локална атмосфера',
    ],
    bestTime: 'ноември – февруари',
    experience: 'Зајдисонце, вода и бавно патување',
  },
  {
    id: 'bregot-shto-go-chuvaat-palmite',
    title: 'Брегот што го чуваат палмите',
    excerpt:
        'Бела песочна линија што исчезнува зад завеса од кокосови палми.',
    description:
        'Тропски брег каде природата сè уште го диктира ритамот на денот. Долгите песочни плажи, палмите и топлото море создаваат едноставно, но незаборавно место за бегство.',
    image: shorelinePalms,
    country: 'Индонезија',
    region: 'Бали',
    latitude: -8.4095,
    longitude: 115.1889,
    tags: ['Палми', 'Песок', 'Тропско'],
    highlights: [
      'Бели песочни плажи',
      'Тропска природа',
      'Кокосови палми',
      'Мирни крајбрежни утра',
    ],
    bestTime: 'април – октомври',
    experience: 'Тропско бегство далеку од гужвата',
  },
]