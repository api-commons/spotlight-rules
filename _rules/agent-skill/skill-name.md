---
layout: rule
artifact: agent-skill
artifact_label: Agent Skill
slug: skill-name
title: Skill Name
severity: error
given: $.frontmatter
message: A skill must declare a name.
description: A skill must declare a name in its frontmatter — it identifies the
  skill to agents and tooling.
experience:
  - governance
  - discoverability
spec:
  - frontmatter
source: []
builtin: false
---
