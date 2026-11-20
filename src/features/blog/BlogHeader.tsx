import type { BlogView } from './types'

interface BlogHeaderProps {
  view: BlogView
  onList: () => void
  onWrite: () => void
}

export default function BlogHeader({ view, onList, onWrite }: BlogHeaderProps) {
  const isWrite = view === 'write'

  return (
    <header className="blog-header">
      <h1>개발 블로그</h1>
      <nav aria-label="주 메뉴">
        <button type="button" onClick={onList} aria-current={isWrite ? undefined : 'page'}>
          글 목록
        </button>
        <button type="button" onClick={onWrite} aria-current={isWrite ? 'page' : undefined}>
          글쓰기
        </button>
      </nav>
    </header>
  )
}
