import { useState } from 'react'
import './App.css'
import BlogHeader from './features/blog/BlogHeader'
import PostDetail from './features/blog/PostDetail'
import PostEditor from './features/blog/PostEditor'
import PostList from './features/blog/PostList'
import { samplePosts } from './features/blog/samplePosts'
import type { BlogView } from './features/blog/types'

function App() {
  const [view, setView] = useState<BlogView>('list')
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null)

  const selectedPost = samplePosts.find((post) => post.id === selectedPostId)

  const goList = () => {
    setView('list')
    setSelectedPostId(null)
  }

  const goWrite = () => {
    setView('write')
    setSelectedPostId(null)
  }

  const selectPost = (id: string) => {
    setView('post')
    setSelectedPostId(id)
  }

  return (
    <>
      <BlogHeader view={view} onList={goList} onWrite={goWrite} />
      <main className="blog-layout" data-view={view}>
        <div className="blog-sidebar">
          <PostList
            posts={samplePosts}
            selectedPostId={selectedPostId}
            onSelect={selectPost}
            onWrite={goWrite}
          />
        </div>
        <div className="blog-content">
          {view === 'write' ? (
            <PostEditor />
          ) : (
            <PostDetail
              key={selectedPostId ?? 'none'}
              post={selectedPost}
              hasSelection={selectedPostId !== null}
              onBack={goList}
            />
          )}
        </div>
      </main>
    </>
  )
}

export default App
