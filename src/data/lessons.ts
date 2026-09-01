export interface Lesson {
  id: number
  title: string
  category: string
  authorname: string
  authorinitials: string
  rating: number
  reviews: number
}

export const lessons: Lesson[] = [
  {
    id: 1,
    title: 'Optimizing PLC Logic for High-Speed Packaging',
    category: 'Automation',
    authorname: 'Hossan Shaban',
    authorinitials: 'HS',
    rating: 5,
    reviews: 13,
  },
  {
    id: 2,
    title: 'Standardizing Wiring Diagrams for Global Clients',
    category: 'Electrical',
    authorname: 'Youssef Hany',
    authorinitials: 'YH',
    rating: 5,
    reviews: 13,
  },
  {
    id: 3,
    title: 'Improving Operator UX in Challenging Environments',
    category: 'Design',
    authorname: 'Sarah Ahmed',
    authorinitials: 'SA',
    rating: 4,
    reviews: 8,
  },
]
