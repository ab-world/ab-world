#!/usr/bin/env bash
# Claude Code Stop 훅: 작업이 끝나면 채팅 웹훅으로 알림을 보낸다.
# 설정: .claude/settings.local.json 의 env.ABCOSMOS_WEBHOOK 에 웹훅 주소를 넣는다 (공개 저장소라 주소는 커밋 금지)
# 테스트: echo '{}' | NOTIFY_DEBUG=1 .claude/hooks/notify-webhook.sh

WEBHOOK_URL="${ABCOSMOS_WEBHOOK:-}"
[ -n "$WEBHOOK_URL" ] || exit 0
SUMMARY_MAX=500   # 요약 최대 글자 수 (바이트가 아니라 글자 기준이라 한글이 깨지지 않음)

input="$(cat)"
has_jq=0; command -v jq >/dev/null 2>&1 && has_jq=1

# ── 기본 정보 ─────────────────────────────────────────────
project_dir="${CLAUDE_PROJECT_DIR:-$PWD}"
project="$(basename "$project_dir")"
branch="$(git -C "$project_dir" rev-parse --abbrev-ref HEAD 2>/dev/null || echo '-')"
user="$(git config user.name 2>/dev/null || whoami)"
host="$(hostname -s 2>/dev/null || hostname)"

# ── 작업 요약 (마지막 답변) ───────────────────────────────
summary=""
if [ "$has_jq" = 1 ]; then
  summary="$(printf '%s' "$input" | jq -r --argjson n "$SUMMARY_MAX" \
    '(.last_assistant_message // "") | if length > $n then .[0:$n] + "…" else . end' 2>/dev/null)"

  # 구버전 Claude Code: 입력에 요약이 없으면 대화 기록에서 꺼낸다
  if [ -z "$summary" ]; then
    transcript="$(printf '%s' "$input" | jq -r '.transcript_path // empty' 2>/dev/null)"
    if [ -f "$transcript" ]; then
      summary="$(jq -rs --argjson n "$SUMMARY_MAX" \
        '[.[] | select(.type=="assistant") | .message.content[]? | select(.type=="text") | .text]
         | (last // "") | if length > $n then .[0:$n] + "…" else . end' "$transcript" 2>/dev/null)"
    fi
  fi
fi

# ── 메시지 구성 ───────────────────────────────────────────
title="✅ Claude Code 작업 완료 · ${project}"
text="• 브랜치: ${branch}
• 사용자: ${user} (${host})"
[ -n "$summary" ] && text="${text}

${summary}"

if [ "$has_jq" = 1 ]; then
  payload="$(jq -n --arg title "$title" --arg text "$text" '{title: $title, text: $text}')"
else
  # jq가 없을 때: 따옴표·역슬래시만 이스케이프해서 요약 없이 전송
  esc() { printf '%s' "$1" | sed -e 's/\\/\\\\/g' -e 's/"/\\"/g'; }
  payload="{\"title\": \"$(esc "$title")\", \"text\": \"• 브랜치: $(esc "$branch")\\n• 사용자: $(esc "$user") ($(esc "$host"))\"}"
fi

[ -n "$NOTIFY_DEBUG" ] && printf '%s\n' "$payload" >&2

# ── 전송 (실패해도 Claude Code 작업에는 영향 없음) ──────────
curl -sS -m 10 -X POST -H 'Content-Type: application/json' \
  -d "$payload" "$WEBHOOK_URL" >/dev/null 2>&1 || true
exit 0