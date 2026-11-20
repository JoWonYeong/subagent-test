#!/bin/bash
# Stop: 응답을 끝내기 전에 lint → build → test. 첫 실패에서 멈추고 마지막 30줄만 메인에게 돌려보낸다.
input=$(cat)
[ "$(echo "$input" | jq -r '.stop_hook_active')" = "true" ] && exit 0   # 무한 반복 방지
cd "$CLAUDE_PROJECT_DIR" || exit 0
# 코드 변경이 없으면 건너뛴다 (대화만 한 경우)
[ -z "$(git status --porcelain -- src package.json 'tsconfig*.json' vite.config.ts eslint.config.js 2>/dev/null)" ] && exit 0
for cmd in "yarn -s lint" "yarn -s build" "yarn -s test"; do
  if ! out=$($cmd 2>&1); then
    { echo "[$cmd 실패] 고친 뒤 다시 끝내라."; echo "$out" | tail -30; } >&2
    exit 2
  fi
done
