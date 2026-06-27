---
layout: rule
artifact: agent-skill
artifact_label: Agent Skill
slug: skill-require-metadata
title: Skill Require Metadata
severity: info
given: $.frontmatter
message: Missing `metadata`.
description: agent-skill document should declare a `metadata` property.
experience:
  - governance
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/agent-skill/skill-require-metadata/
prompt: "You are editing an Agent Skill document to satisfy the Spotlight API
  governance rule 'skill-require-metadata' (Require Metadata). Requirement:
  agent-skill document should declare a `metadata` property. To fix: Ensure
  `metadata` is present and non-empty at each matching location. Guidance:
  Missing `metadata`. This rule is evaluated at the JSONPath `$.frontmatter` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  Agent Skill. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  skill-require-metadata:
    title: Skill Require Metadata
    reference: https://spotlight-rules.com/spec/rules/agent-skill/skill-require-metadata/
    description: agent-skill document should declare a `metadata` property.
    message: Missing `metadata`.
    given: $.frontmatter
    severity: info
    then:
      field: metadata
      function: truthy
    tags:
      - format:agent-skill
      - spec:document
      - experience:governance
      - experience:discoverability
    prompt: "You are editing an Agent Skill document to satisfy the Spotlight API
      governance rule 'skill-require-metadata' (Require Metadata). Requirement:
      agent-skill document should declare a `metadata` property. To fix: Ensure
      `metadata` is present and non-empty at each matching location. Guidance:
      Missing `metadata`. This rule is evaluated at the JSONPath `$.frontmatter` —
      inspect every location it matches and correct only what violates the rule.
      Make the smallest change that satisfies the rule, leave all unrelated
      content, key order, comments, and formatting unchanged, and keep the
      document valid Agent Skill. Return only the complete corrected document,
      with no commentary."
---
