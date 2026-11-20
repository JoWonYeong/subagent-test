import { useEffect, useRef } from 'react'
import type { Post } from './types'

interface PostDetailProps {
  post: Post | undefined
  hasSelection: boolean
  onBack: () => void
}

export default function PostDetail({ post, hasSelection, onBack }: PostDetailProps) {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    titleRef.current?.focus()
  }, [])

  if (!hasSelection) {
    return (
      <section className="post-detail">
        <p>목록에서 읽을 글을 고르세요</p>
      </section>
    )
  }

  if (!post) {
    return (
      <section className="post-detail">
        <p>글을 찾을 수 없습니다</p>
        <button type="button" onClick={onBack}>
          목록으로 돌아가기
        </button>
      </section>
    )
  }

  return (
    <article className="post-detail">
      <button type="button" onClick={onBack}>
        목록으로
      </button>
      <h2 ref={titleRef} tabIndex={-1}>
        {post.title}
      </h2>
      <time dateTime={post.date}>{post.date}</time>
      <p>{post.body}</p>
    </article>
  )
}
