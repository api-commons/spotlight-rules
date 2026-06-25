---
layout: rule
artifact: agent-skill
artifact_label: Agent Skill
slug: skill-body-length
title: Skill Body Length
severity: info
given: $.words
message: Skill body is very long (over ~5000 words).
description: Skill bodies should stay focused — very long instruction sets
  degrade agent performance. Keep the body under ~5000 words.
experience:
  - usability
  - reliability
spec:
  - body
source: []
builtin: false
---
