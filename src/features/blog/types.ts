export type BlogView = 'list' | 'post' | 'write'

export interface Post {
  id: string
  title: string
  /** YYYY-MM-DD */
  date: string
  body: string
}
