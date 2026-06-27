---
layout: rule
artifact: agent-skill
artifact_label: Agent Skill
slug: skill-description-length
title: Skill Description Length
severity: info
given: $.frontmatter.description
message: Skill description should be at least 40 characters.
description: Skill descriptions should be specific enough to drive good
  selection — at least 40 characters of meaningful intent.
experience:
  - discoverability
  - usability
spec:
  - frontmatter
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/agent-skill/skill-description-length/
prompt: "You are editing an Agent Skill document to satisfy the Spotlight API
  governance rule 'skill-description-length' (Skill Description Length).
  Requirement: Skill descriptions should be specific enough to drive good
  selection — at least 40 characters of meaningful intent. To fix: Ensure the
  length of the targeted value is at least 40 and at most 1024. This rule is
  evaluated at the JSONPath `$.frontmatter.description` — inspect every location
  it matches and correct only what violates the rule. Make the smallest change
  that satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid Agent Skill. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  skill-description-length:
    title: Skill Description Length
    reference: https://spotlight-rules.com/spec/rules/agent-skill/skill-description-length/
    description: Skill descriptions should be specific enough to drive good
      selection — at least 40 characters of meaningful intent.
    message: Skill description should be at least 40 characters.
    severity: info
    given: $.frontmatter.description
    then:
      function: length
      functionOptions:
        min: 40
        max: 1024
    tags:
      - format:agent-skill
      - spec:frontmatter
      - experience:discoverability
      - experience:usability
    prompt: "You are editing an Agent Skill document to satisfy the Spotlight API
      governance rule 'skill-description-length' (Skill Description Length).
      Requirement: Skill descriptions should be specific enough to drive good
      selection — at least 40 characters of meaningful intent. To fix: Ensure the
      length of the targeted value is at least 40 and at most 1024. This rule is
      evaluated at the JSONPath `$.frontmatter.description` — inspect every
      location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid Agent
      Skill. Return only the complete corrected document, with no commentary."
---
