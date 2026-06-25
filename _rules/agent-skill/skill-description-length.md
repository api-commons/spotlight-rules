---
layout: rule
artifact: agent-skill
artifact_label: Agent Skill
slug: skill-description-length
title: Skill Description Length
severity: warn
given: $.frontmatter.description
message: Skill description should be at least 40 characters.
description: Skill descriptions should be specific enough to drive good
  selection — at least 40 characters of meaningful intent.
experience:
  - discoverability
  - usability
spec:
  - frontmatter
source: []
builtin: false
---
