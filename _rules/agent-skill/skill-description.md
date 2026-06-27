---
layout: rule
artifact: agent-skill
artifact_label: Agent Skill
slug: skill-description
title: Skill Description
severity: info
given: $.frontmatter
message: A skill must declare a description.
description: A skill must declare a description — it is the primary signal an
  agent uses to decide when to invoke the skill.
experience:
  - discoverability
spec:
  - frontmatter
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/agent-skill/skill-description/
prompt: "You are editing an Agent Skill document to satisfy the Spotlight API
  governance rule 'skill-description' (Skill Description). Requirement: A skill
  must declare a description — it is the primary signal an agent uses to decide
  when to invoke the skill. To fix: Ensure `description` is present and
  non-empty at each matching location. This rule is evaluated at the JSONPath
  `$.frontmatter` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid Agent Skill. Return only the complete corrected document, with
  no commentary."
builtin: false
ruleyaml: >
  skill-description:
    title: Skill Description
    reference: https://spotlight-rules.com/spec/rules/agent-skill/skill-description/
    description: A skill must declare a description — it is the primary signal an
      agent uses to decide when to invoke the skill.
    message: A skill must declare a description.
    severity: info
    given: $.frontmatter
    then:
      field: description
      function: truthy
    tags:
      - format:agent-skill
      - spec:frontmatter
      - experience:discoverability
    prompt: "You are editing an Agent Skill document to satisfy the Spotlight API
      governance rule 'skill-description' (Skill Description). Requirement: A
      skill must declare a description — it is the primary signal an agent uses to
      decide when to invoke the skill. To fix: Ensure `description` is present and
      non-empty at each matching location. This rule is evaluated at the JSONPath
      `$.frontmatter` — inspect every location it matches and correct only what
      violates the rule. Make the smallest change that satisfies the rule, leave
      all unrelated content, key order, comments, and formatting unchanged, and
      keep the document valid Agent Skill. Return only the complete corrected
      document, with no commentary."
---
