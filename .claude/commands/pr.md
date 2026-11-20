---
description: 현재 변경으로 브랜치, 커밋, PR을 만든다
argument-hint: [기능 slug]
---

1. `git status`로 변경을 확인한다. main 브랜치면 `feat/<slug>` 브랜치를 만든다. slug: $ARGUMENTS (없으면 변경 내용으로 정한다)
2. 검사는 Stop hook이 이미 통과시켰으므로 다시 실행하지 않는다.
3. `docs/features/<slug>/`를 포함해 커밋한다 (CI 리뷰어가 plan.md를 볼 수 있게).
4. `gh pr create`로 PR을 만든다. 본문은 짧게 쓴다.
   - 요약 3줄 이내
   - 링크: `docs/features/<slug>/plan.md`, `report.md`
   - 개발자가 남긴 미해결 항목 (있으면)
5. PR URL만 보고한다.
