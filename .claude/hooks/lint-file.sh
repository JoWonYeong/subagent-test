#!/bin/bash
# PostToolUse: 방금 수정한 파일만 eslint. 성공하면 아무것도 출력하지 않는다 (토큰 절약).
f=$(jq -r '.tool_input.file_path // empty')
[[ "$f" =~ \.(ts|tsx|js|jsx)$ ]] || exit 0
out=$(cd "$CLAUDE_PROJECT_DIR" && npx eslint "$f" 2>&1) || { echo "$out" | head -30 >&2; exit 2; }
