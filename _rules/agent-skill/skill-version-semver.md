---
layout: rule
artifact: agent-skill
artifact_label: Agent Skill
slug: skill-version-semver
title: Skill Version Semver
severity: info
given: $.frontmatter.version
message: Skill version should be semantic (e.g. 1.0.0).
description: If a skill declares a version, it should be semantic (e.g. 1.0.0)
  so consumers can reason about changes between releases.
experience:
  - versioning
spec:
  - frontmatter
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/agent-skill/skill-version-semver/
prompt: "You are editing an Agent Skill document to satisfy the Spotlight API
  governance rule 'skill-version-semver' (Skill Version Semver). Requirement: If
  a skill declares a version, it should be semantic (e.g. 1.0.0) so consumers
  can reason about changes between releases. To fix: Ensure the targeted value
  matches the regular expression `^\\d+\\.\\d+\\.\\d+(?:[-+][0-9A-Za-z.-]+)?$`;
  rewrite any value that does not. This rule is evaluated at the JSONPath
  `$.frontmatter.version` — inspect every location it matches and correct only
  what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid Agent Skill. Return only the complete corrected
  document, with no commentary."
builtin: false
ruleyaml: >
  skill-version-semver:
    title: Skill Version Semver
    reference: https://spotlight-rules.com/spec/rules/agent-skill/skill-version-semver/
    description: If a skill declares a version, it should be semantic (e.g. 1.0.0)
      so consumers can reason about changes between releases.
    message: Skill version should be semantic (e.g. 1.0.0).
    severity: info
    given: $.frontmatter.version
    then:
      function: pattern
      functionOptions:
        match: ^\d+\.\d+\.\d+(?:[-+][0-9A-Za-z.-]+)?$
    tags:
      - format:agent-skill
      - spec:frontmatter
      - experience:versioning
    prompt: "You are editing an Agent Skill document to satisfy the Spotlight API
      governance rule 'skill-version-semver' (Skill Version Semver). Requirement:
      If a skill declares a version, it should be semantic (e.g. 1.0.0) so
      consumers can reason about changes between releases. To fix: Ensure the
      targeted value matches the regular expression
      `^\\d+\\.\\d+\\.\\d+(?:[-+][0-9A-Za-z.-]+)?$`; rewrite any value that does
      not. This rule is evaluated at the JSONPath `$.frontmatter.version` —
      inspect every location it matches and correct only what violates the rule.
      Make the smallest change that satisfies the rule, leave all unrelated
      content, key order, comments, and formatting unchanged, and keep the
      document valid Agent Skill. Return only the complete corrected document,
      with no commentary."
---
