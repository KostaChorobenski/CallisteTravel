export type JournalEntry = {
  id: string
  category: string
  title: string
  excerpt: string
}

export const journalEntries: JournalEntry[] = [
  {
    id: 'utro-so-ribarite',
    category: 'Дневник',
    title: 'Утро со рибарите на југот',
    excerpt:
      'Пред изгрејсонце тргнавме со мала дрвена барка, без план, само со компас и љубопитност.',
  },
  {
    id: 'seloto-bez-ime',
    category: 'Приказна',
    title: 'Селото што нема име на картата',
    excerpt:
      'Три дена без интернет, а сепак се почувствувавме поповрзани отколку што очекувавме.',
  },
  {
    id: 'kako-da-patuvate-bavno',
    category: 'Совети',
    title: 'Како да патувате бавно, наместо брзо',
    excerpt:
      'Пет лекции научени од локалните луѓе за тоа што навистина значи да се почувствува едно место.',
  },
]
