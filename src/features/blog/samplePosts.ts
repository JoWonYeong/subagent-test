import type { Post } from './types'

export const samplePosts: Post[] = [
  {
    id: 'react-compiler',
    title: 'React Compiler를 켜고 달라진 점',
    date: '2026-11-18',
    body: 'React Compiler를 켜면 useMemo와 useCallback을 직접 쓰지 않아도 됩니다. 이 글에서는 실제 프로젝트에서 체감한 변화를 정리합니다.',
  },
  {
    id: 'long-identifier',
    title: 'useSyncExternalStoreWithSelectorAndEqualityFn 같은 긴 이름 다루기',
    date: '2026-11-10',
    body: '개발 블로그에는 긴 영문 식별자가 자주 나옵니다. averyveryverylongidentifierwithoutanyspacesthatshouldwrapcorrectlyonsmallscreens 같은 문자열도 좁은 화면에서 줄이 바뀌어야 합니다.',
  },
  {
    id: 'first-post',
    title: '블로그를 시작합니다',
    date: '2026-11-01',
    body: '개인 개발 블로그의 첫 글입니다. 앞으로 공부한 내용과 작업 기록을 남깁니다.',
  },
]
