---
layout: rule
artifact: agent-skill
artifact_label: Agent Skill
slug: skill-version-semver
title: Skill Version Semver
severity: warn
given: $.frontmatter.version
message: Skill version should be semantic (e.g. 1.0.0).
description: If a skill declares a version, it should be semantic (e.g. 1.0.0)
  so consumers can reason about changes between releases.
experience:
  - versioning
spec:
  - frontmatter
source: []
builtin: false
---
