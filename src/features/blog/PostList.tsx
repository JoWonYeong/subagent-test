import type { Post } from './types'

interface PostListProps {
  posts: Post[]
  selectedPostId: string | null
  onSelect: (id: string) => void
  onWrite: () => void
}

export default function PostList({ posts, selectedPostId, onSelect, onWrite }: PostListProps) {
  const sorted = posts.toSorted((a, b) => b.date.localeCompare(a.date))

  return (
    <section className="post-list" aria-labelledby="post-list-title">
      <h2 id="post-list-title">글 목록</h2>
      {sorted.length === 0 ? (
        <div>
          <p>아직 글이 없습니다. 첫 글을 써보세요</p>
          <button type="button" onClick={onWrite}>
            글쓰기
          </button>
        </div>
      ) : (
        <ul>
          {sorted.map((post) => (
            <li key={post.id}>
              <button
                type="button"
                onClick={() => onSelect(post.id)}
                aria-current={post.id === selectedPostId ? 'true' : undefined}
              >
                <span>{post.title}</span>
                <time dateTime={post.date}>{post.date}</time>
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
