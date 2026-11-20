# blog-layout 구현 기록

## 변경 파일
| 파일 | 무엇을 | 왜 |
|---|---|---|
| `src/App.tsx` | 전면 교체. 상태 `view`, `selectedPostId`. 헤더 + `<main data-view>` 안에 사이드바(목록) / 콘텐츠(본문·글쓰기) 배치. `PostDetail`에 `key` | 기획 구현 계획 |
| `src/App.css` | 기존 내용 삭제 후 레이아웃 규칙만 작성. 768px 미만에서 `data-view`로 영역 숨김 | 질문 2·3 승인 |
| `src/index.css` | 기존 내용 삭제 후 `box-sizing`, `body` margin 리셋만 | 질문 3 승인 |
| `src/features/blog/types.ts` | `Post`, `BlogView` 타입 | 기획 |
| `src/features/blog/samplePosts.ts` | 예시 글 3개(긴 영문 식별자 포함 1개) | 기획 |
| `src/features/blog/BlogHeader.tsx` | `h1` + `nav` 버튼 2개, `aria-current="page"` | 기획 |
| `src/features/blog/PostList.tsx` | 최신순 목록, 빈 상태, 선택 항목 `aria-current="true"` | 기획 |
| `src/features/blog/PostDetail.tsx` | 선택 안내 / 글 없음 / 본문 3가지, 본문 표시 시 `h2` 포커스 | 기획 |
| `src/features/blog/PostEditor.tsx` | 저장 불가 안내, 라벨 붙은 입력칸, 비활성 저장 + `aria-describedby`, 마운트 시 `h2` 포커스 | 기획 |
| `src/assets/*`(3개), `public/icons.svg` | 삭제. 빈 `src/assets/` 폴더도 삭제 | 질문 4 승인 |
| `index.html` | `<title>` → "개발 블로그" | 질문 4 승인 |

## 내가 임의로 판단한 부분
- "글쓰기"로 갈 때도 `selectedPostId`를 `null`로 비운다. 데스크톱에서 글쓰기 중 목록에 이전 선택이 굵게 남으면 헷갈리기 때문.
- 레이아웃 수치: 사이드바 폭 280px, 간격 16/24px, 헤더 아래 구분선(`border-bottom: 1px solid`, 색 지정 없음). 영역 경계가 안 보이면 위치 확인이 어려워 넣었다.
- 목록 항목 버튼은 제목과 날짜를 세로로 쌓고 폭 100%, 왼쪽 정렬.
- "목록으로" 버튼은 데스크톱에서도 보인다(기획 표의 "맨 위 '목록으로' 버튼" 그대로). 데스크톱에서는 선택 해제 역할.
- `PostDetail`의 `key`는 선택 없음일 때 `'none'`.

## 확신이 없는 부분
- `index.html`의 `lang="en"`은 기획 범위(`<title>`만 수정) 밖이라 그대로 뒀다. 한국어 콘텐츠라 스크린리더 발음에 영향이 있어 `ko`로 바꾸는 것을 제안한다.
- 버튼 기본 스타일(브라우저 기본)을 그대로 써서 모양이 투박하다. 러프 범위라 의도한 것.
