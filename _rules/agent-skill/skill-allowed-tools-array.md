---
layout: rule
artifact: agent-skill
artifact_label: Agent Skill
slug: skill-allowed-tools-array
title: Skill Allowed Tools Array
severity: warn
given: $.frontmatter['allowed-tools']
message: allowed-tools must be an array of tool names.
description: If a skill declares allowed-tools, it must be an array of tool
  names so its capability surface is explicit and auditable.
experience:
  - security
  - governance
spec:
  - frontmatter
source: []
builtin: false
---
