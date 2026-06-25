---
layout: rule
artifact: agent-skill
artifact_label: Agent Skill
slug: skill-description
title: Skill Description
severity: error
given: $.frontmatter
message: A skill must declare a description.
description: A skill must declare a description — it is the primary signal an
  agent uses to decide when to invoke the skill.
experience:
  - discoverability
spec:
  - frontmatter
source: []
builtin: false
---
