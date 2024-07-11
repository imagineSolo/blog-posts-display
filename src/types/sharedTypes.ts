export type TPost = {
  userId: number
  id: number
  title: string
  body: string
}

export type TAuthor = {
  id: number
  name: string
}

export type TAuthorFilter = {
  authors: TAuthor[]
  onFilterChange: (authorId: number | null) => void
}
