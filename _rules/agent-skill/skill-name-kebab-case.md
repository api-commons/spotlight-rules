---
layout: rule
artifact: agent-skill
artifact_label: Agent Skill
slug: skill-name-kebab-case
title: Skill Name Kebab Case
severity: warn
given: $.frontmatter.name
message: Skill name should be lower kebab-case.
description: Skill name should be lower kebab-case so it matches the skill
  directory name and stays portable.
experience:
  - naming
spec:
  - frontmatter
source: []
builtin: false
---
