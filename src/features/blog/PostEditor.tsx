import { useEffect, useRef } from 'react'

export default function PostEditor() {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    titleRef.current?.focus()
  }, [])

  return (
    <section className="post-editor">
      <h2 ref={titleRef} tabIndex={-1}>
        글쓰기
      </h2>
      <p>아직 저장할 수 없습니다. 입력한 내용은 화면을 벗어나면 사라집니다.</p>
      <label htmlFor="post-title">제목</label>
      <input id="post-title" type="text" placeholder="글 제목을 입력하세요" />
      <label htmlFor="post-body">본문</label>
      <textarea id="post-body" rows={12} placeholder="본문을 입력하세요" />
      <div className="post-editor-actions">
        <button type="button" disabled aria-describedby="save-hint">
          저장
        </button>
        <span id="save-hint">저장 기능은 준비 중입니다</span>
      </div>
    </section>
  )
}
