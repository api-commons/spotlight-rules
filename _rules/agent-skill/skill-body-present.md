---
layout: rule
artifact: agent-skill
artifact_label: Agent Skill
slug: skill-body-present
title: Skill Body Present
severity: error
given: $.words
message: A skill must have body content.
description: A skill must have body content, not just frontmatter — the body is
  the instruction set the agent actually follows.
experience:
  - documentation
  - reliability
spec:
  - body
source: []
builtin: false
---
