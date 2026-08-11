export const brand = {
  name: 'Calliste Travel',
  tagline: 'Таму каде мапите завршуваат',
  description:
    'Calliste Travel е патувачка агенција посветена на откривање скриени, непознати кутчиња од светот — места што нема да ги најдете во вообичаените туристички водичи. Преку внимателно избрани дестинации и автентични искуства, ги водиме патниците таму каде што мапите завршуваат, а вистинските приказни започнуваат.',
  shortBlurb:
    'Патувачка агенција за оние што бараат повеќе од дестинација — бараат приказна.',
} as const

export type NavLink = {
  label: string
  path: string
}

export const navLinks: NavLink[] = [
  { label: 'Дома', path: '/' },
  { label: 'Дестинации', path: '/destinatsii' },
  { label: 'За нас', path: '/za-nas' },
  { label: 'Контакт', path: '/kontakt' },
]

export const contact = {
  email: 'hello@callistetravel.mk',
  phone: '+389 2 123 4567',
} as const

export const social = [
  { label: 'Instagram', href: '#' },
  { label: 'Facebook', href: '#' },
] as const

export type ValuePillar = {
  icon: 'Compass' | 'UsersThree' | 'Sparkle' | 'Leaf'
  title: string
  description: string
}

export const valuePillars: ValuePillar[] = [
  {
    icon: 'Compass',
    title: 'Локални водичи',
    description:
      'Патуваме со луѓе што го познаваат теренот подобро од секоја мапа — водичи кои ви ги отвораат вратите кон вистинската приказна на секое место.',
  },
  {
    icon: 'Sparkle',
    title: 'Кураторски избрани дестинации',
    description:
      'Секоја дестинација е рачно избрана, далеку од преполните туристички патеки, за да доживеете места какви што малкумина ги виделе.',
  },
  {
    icon: 'UsersThree',
    title: 'Автентични искуства',
    description:
      'Не продаваме пакет-аранжмани. Создаваме искуства кои ве поврзуваат со луѓето, културата и приказните на местото.',
  },
  {
    icon: 'Leaf',
    title: 'Одговорно патување',
    description:
      'Патуваме со почит кон локалните заедници и природата, оставајќи трага што трае подолго од фотографиите.',
  },
]

export const cookieBanner = {
  message:
    'Користиме колачиња за да го подобриме вашето искуство на нашата страница. Со кликнување на „Прифати“, се согласувате со нивната употреба.',
  accept: 'Прифати',
  reject: 'Одбиј',
} as const
