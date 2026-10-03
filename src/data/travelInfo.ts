export type TravelInfo = { season: string; duration: string; style: string; source: string }

export const travelInfo: Record<string, TravelInfo> = {
  'farerski-ostrovi': {"season":"Јуни – август","duration":"5–7 дена","style":"Пешачење и природа","source":"https://visitfaroeislands.com/en/about-vfi/nature/weather0"},
  'azori': {"season":"Јуни – септември за морски активности","duration":"7–10 дена","style":"Природа и островско истражување","source":"https://dive.visitazores.com/en/when-dive"},
  'svaneti': {"season":"Лето за пешачење; зима за скијање","duration":"5–7 дена","style":"Култура и планински патеки","source":"https://georgia.travel/9-amazing-sights-in-svaneti"},
  'flores': {"season":"Средина на април – средина на октомври","duration":"7–10 дена","style":"Авантура и локални искуства","source":"https://www.indonesia.travel/gb/en/travel-ideas/marine/unveil-the-lands-of-dragons-firsttimers-guide-to-komodo-national-park"},
  'raja-ampat': {"season":"Октомври – април","duration":"7–10 дена","style":"Нуркање и островско истражување","source":"https://www.indonesia.travel/us/en/travel-ideas/marine/10-breathtaking-place-s-for-non-diver-s-to-experience-in-raja-ampat"},
  'jakushima': {"season":"Пролет и есен за пешачење","duration":"3–5 дена","style":"Шумски патеки и природа","source":"https://faq.japan-travel.jnto.go.jp/en/sports/hiking/courses/yakushima/"},
  'sao-tome': {"season":"Јуни – септември","duration":"5–7 дена","style":"Култура и тропска природа","source":"https://turismo.gov.st/en/guide-pratique/when-best-time-visit-sao-tome-and-principe"},
  'karaburun': {"season":"Лето за плажи и излети со брод","duration":"2–3 дена","style":"Крајбрежна авантура","source":"https://rtsh.al/rti/en/summer-vibes-from-grama-bay-karaburun-peninsula/"},
  'madeira': {"season":"Во текот на целата година","duration":"5–7 дена","style":"Пешачење и островска авантура","source":"https://visitmadeira.com/en/travel-info/useful-information/weather-in-madeira/"},
}
