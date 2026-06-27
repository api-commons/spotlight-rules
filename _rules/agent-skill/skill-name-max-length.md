---
layout: rule
artifact: agent-skill
artifact_label: Agent Skill
slug: skill-name-max-length
title: Skill Name Max Length
severity: info
given: $.frontmatter.name
message: Skill name should be 64 characters or fewer.
description: A skill name should be concise (64 characters or fewer).
experience:
  - naming
  - usability
spec:
  - frontmatter
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/agent-skill/skill-name-max-length/
prompt: "You are editing an Agent Skill document to satisfy the Spotlight API
  governance rule 'skill-name-max-length' (Skill Name Max Length). Requirement:
  A skill name should be concise (64 characters or fewer). To fix: Adjust the
  targeted value so it conforms to the schema this rule requires. This rule is
  evaluated at the JSONPath `$.frontmatter.name` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid Agent Skill. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  skill-name-max-length:
    title: Skill Name Max Length
    reference: https://spotlight-rules.com/spec/rules/agent-skill/skill-name-max-length/
    description: A skill name should be concise (64 characters or fewer).
    message: Skill name should be 64 characters or fewer.
    given: $.frontmatter.name
    severity: info
    then:
      function: schema
      functionOptions:
        schema:
          type: string
          maxLength: 64
    tags:
      - format:agent-skill
      - spec:frontmatter
      - experience:naming
      - experience:usability
    prompt: "You are editing an Agent Skill document to satisfy the Spotlight API
      governance rule 'skill-name-max-length' (Skill Name Max Length).
      Requirement: A skill name should be concise (64 characters or fewer). To
      fix: Adjust the targeted value so it conforms to the schema this rule
      requires. This rule is evaluated at the JSONPath `$.frontmatter.name` —
      inspect every location it matches and correct only what violates the rule.
      Make the smallest change that satisfies the rule, leave all unrelated
      content, key order, comments, and formatting unchanged, and keep the
      document valid Agent Skill. Return only the complete corrected document,
      with no commentary."
---
