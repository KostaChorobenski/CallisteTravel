import farerski1 from '../assets/images/destinations/farerski-ostrovi/1.webp'
import farerski2 from '../assets/images/destinations/farerski-ostrovi/2.webp'
import farerski3 from '../assets/images/destinations/farerski-ostrovi/3.webp'

import azori1 from '../assets/images/destinations/azori/1.webp'
import azori2 from '../assets/images/destinations/azori/2.webp'
import azori3 from '../assets/images/destinations/azori/3.webp'

import svaneti1 from '../assets/images/destinations/svaneti/1.webp'
import svaneti2 from '../assets/images/destinations/svaneti/2.webp'
import svaneti3 from '../assets/images/destinations/svaneti/3.webp'

import flores1 from '../assets/images/destinations/flores/1.webp'
import flores2 from '../assets/images/destinations/flores/2.webp'
import flores3 from '../assets/images/destinations/flores/3.webp'

import rajaAmpat1 from '../assets/images/destinations/raja-ampat/1.webp'
import rajaAmpat2 from '../assets/images/destinations/raja-ampat/2.webp'
import rajaAmpat3 from '../assets/images/destinations/raja-ampat/3.webp'

import jakushima1 from '../assets/images/destinations/jakushima/1.webp'
import jakushima2 from '../assets/images/destinations/jakushima/2.webp'
import jakushima3 from '../assets/images/destinations/jakushima/3.webp'

import saoTome1 from '../assets/images/destinations/sao-tome/1.webp'
import saoTome2 from '../assets/images/destinations/sao-tome/2.webp'
import saoTome3 from '../assets/images/destinations/sao-tome/3.webp'

import karaburun1 from '../assets/images/destinations/karaburun/1.webp'
import karaburun2 from '../assets/images/destinations/karaburun/2.webp'
import karaburun3 from '../assets/images/destinations/karaburun/3.webp'

import madeira1 from '../assets/images/destinations/madeira/1.webp'
import madeira2 from '../assets/images/destinations/madeira/2.webp'
import madeira3 from '../assets/images/destinations/madeira/3.webp'

export type DestinationType = 'nature' | 'culture' | 'adventure'

export type Destination = {
  id: string
  title: string
  country: string
  region: string
  type: DestinationType
  excerpt: string
  description: string
  image: string
  gallery: string[]
  latitude: number
  longitude: number
  tags: string[]
  highlights: string[]
}

export const heroImage = farerski1

export const featuredDestinations: Destination[] = [
  {
    id: 'farerski-ostrovi',
    title: 'Фарските Острови',
    country: 'Данска',
    region: 'Европа',
    type: 'nature',
    excerpt:
        'Стрмни карпи, зелени долини и мали села помеѓу северното море и небото.',
    description:
        'Архипелаг каде времето се менува за неколку минути, а патиштата водат кон места што изгледаат како да се на крајот од светот. Фарските Острови се за оние што сакаат тишина, сурова природа и чувство на вистинско откривање.',
    image: farerski1,
    gallery: [farerski1, farerski2, farerski3],
    latitude: 62.0079,
    longitude: -6.79,
    tags: ['Природа', 'Север', 'Пешачење'],
    highlights: [
      'Пешачење меѓу стрмни морски карпи',
      'Мали села и локални заедници',
      'Променливо северно време и пејзажи',
    ],
  },
  {
    id: 'azori',
    title: 'Азори',
    country: 'Португалија',
    region: 'Европа',
    type: 'nature',
    excerpt:
        'Вулкански острови, зелени кратери и океан што изгледа бескраен.',
    description:
        'Далеку во Атлантикот лежи архипелаг каде вулканските пејзажи се спојуваат со бујна вегетација и мали крајбрежни населби. Азорите се место за бавно истражување, долги прошетки и денови без строг план.',
    image: azori1,
    gallery: [azori1, azori2, azori3],
    latitude: 37.7412,
    longitude: -25.6756,
    tags: ['Океан', 'Вулкани', 'Природа'],
    highlights: [
      'Вулкански езера и кратери',
      'Природни термални извори',
      'Пешачки патеки над Атлантикот',
    ],
  },
  {
    id: 'svaneti',
    title: 'Сванети',
    country: 'Грузија',
    region: 'Европа',
    type: 'culture',
    excerpt:
        'Камени кули, високи планини и села каде старите приказни сè уште живеат.',
    description:
        'Во високите планини на северна Грузија, регионот Сванети ги зачувал своите средновековни кули, традиции и начин на живот. Овде патувањето не е само гледање пејзажи, туку запознавање со место со сопствен ритам и идентитет.',
    image: svaneti1,
    gallery: [svaneti1, svaneti2, svaneti3],
    latitude: 43.0435,
    longitude: 42.7297,
    tags: ['Планини', 'Култура', 'Историја'],
    highlights: [
      'Средновековни свански кули',
      'Планински села и локална архитектура',
      'Традиционална сванска кујна',
    ],
  },
  {
    id: 'flores',
    title: 'Флорес',
    country: 'Индонезија',
    region: 'Азија',
    type: 'adventure',
    excerpt:
        'Вулкански езера, тивки крајбрежја и островски патишта што водат кон непознатото.',
    description:
        'Флорес е остров за патници кои сакаат да се движат бавно и да застануваат таму каде што патот изгледа најинтересно. Од планинските предели до малите крајбрежни села, секој дел од островот има различен карактер.',
    image: flores1,
    gallery: [flores1, flores2, flores3],
    latitude: -8.6574,
    longitude: 121.0794,
    tags: ['Остров', 'Авантура', 'Природа'],
    highlights: [
      'Вулкански езера Кели Муту',
      'Мали крајбрежни села',
      'Патување низ планински предели',
    ],
  },
  {
    id: 'raja-ampat',
    title: 'Ража Ампат',
    country: 'Индонезија',
    region: 'Азија',
    type: 'nature',
    excerpt:
        'Карпести островчиња, тиркизна вода и еден од најживописните морски светови на планетата.',
    description:
        'Ража Ампат е архипелаг составен од стотици острови и мали варовнички формации. Наместо големи туристички центри, тука доминираат морето, локалните заедници и чувството дека сте пристигнале на место кое сè уште не е целосно откриено.',
    image: rajaAmpat1,
    gallery: [rajaAmpat1, rajaAmpat2, rajaAmpat3],
    latitude: -0.2346,
    longitude: 130.5187,
    tags: ['Океан', 'Острови', 'Нуркање'],
    highlights: [
      'Корални гребени и богат морски свет',
      'Мали ненаселени острови',
      'Локални крајбрежни заедници',
    ],
  },
  {
    id: 'jakushima',
    title: 'Јакушима',
    country: 'Јапонија',
    region: 'Азија',
    type: 'nature',
    excerpt:
        'Древни шуми, мов и планински патеки под дожд што никогаш не брза.',
    description:
        'Јакушима е остров познат по своите древни кедрови шуми и необичен, речиси мистичен пејзаж. Влажниот воздух, густата вегетација и старите дрвја создаваат чувство дека сте влегле во друг свет.',
    image: jakushima1,
    gallery: [jakushima1, jakushima2, jakushima3],
    latitude: 30.335,
    longitude: 130.508,
    tags: ['Шума', 'Планини', 'Јапонија'],
    highlights: [
      'Древни кедрови шуми',
      'Пешачки патеки низ планините',
      'Природни водопади и реки',
    ],
  },
  {
    id: 'sao-tome',
    title: 'Сао Томе',
    country: 'Сао Томе и Принсипе',
    region: 'Африка',
    type: 'culture',
    excerpt:
        'Тропски шуми, стари плантажи и островски живот далеку од вообичаените туристички рути.',
    description:
        'Малиот остров Сао Томе носи мешавина од португалско наследство, африканска култура и тропска природа. Старите плантажи, зелените планини и мирните крајбрежни населби создаваат место што најдобро се открива без брзање.',
    image: saoTome1,
    gallery: [saoTome1, saoTome2, saoTome3],
    latitude: 0.3365,
    longitude: 6.7273,
    tags: ['Остров', 'Култура', 'Тропи'],
    highlights: [
      'Историски плантажи и roças',
      'Тропски шуми и планини',
      'Локална островска кујна',
    ],
  },
  {
    id: 'karaburun',
    title: 'Карабурун',
    country: 'Албанија',
    region: 'Европа',
    type: 'adventure',
    excerpt:
        'Див полуостров каде планините се спуштаат директно во Јонското Море.',
    description:
        'Полуостровот Карабурун е еден од оние делови од албанското крајбрежје каде природата сè уште има главен збор. Каменести заливи, чиста вода и патеки над морето го прават идеален за патници кои сакаат да го истражуваат брегот надвор од главните летувалишта.',
    image: karaburun1,
    gallery: [karaburun1, karaburun2, karaburun3],
    latitude: 40.3359,
    longitude: 19.4507,
    tags: ['Море', 'Пешачење', 'Дивина'],
    highlights: [
      'Скриени заливи и плажи',
      'Пешачки патеки над Јонското Море',
      'Морскиот парк Карабурун-Сазан',
    ],
  },
  {
    id: 'madeira',
    title: 'Мадеира',
    country: 'Португалија',
    region: 'Европа',
    type: 'adventure',
    excerpt:
        'Зелени планини, облаци под нозете и патеки што исчезнуваат во Атлантикот.',
    description:
        'Мадеира е остров за оние кои сакаат да го поминат денот надвор, а вечерта да ја завршат покрај океанот. Стрмните планини, левадите и старите патеки создаваат бескрајни можности за истражување.',
    image: madeira1,
    gallery: [madeira1, madeira2, madeira3],
    latitude: 32.7607,
    longitude: -16.9595,
    tags: ['Остров', 'Планини', 'Авантура'],
    highlights: [
      'Пешачење покрај левадите',
      'Планински патеки над облаците',
      'Крајбрежни села и природни базени',
    ],
  },
]

export const destinationById = (id: string) =>
    featuredDestinations.find((destination) => destination.id === id)