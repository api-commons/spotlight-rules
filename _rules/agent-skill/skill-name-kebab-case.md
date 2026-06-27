---
layout: rule
artifact: agent-skill
artifact_label: Agent Skill
slug: skill-name-kebab-case
title: Skill Name Kebab Case
severity: info
given: $.frontmatter.name
message: Skill name should be lower kebab-case.
description: Skill name should be lower kebab-case so it matches the skill
  directory name and stays portable.
experience:
  - naming
spec:
  - frontmatter
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/agent-skill/skill-name-kebab-case/
prompt: "You are editing an Agent Skill document to satisfy the Spotlight API
  governance rule 'skill-name-kebab-case' (Skill Name Kebab Case). Requirement:
  Skill name should be lower kebab-case so it matches the skill directory name
  and stays portable. To fix: Ensure the targeted value matches the regular
  expression `^[a-z0-9]+(?:-[a-z0-9]+)*$`; rewrite any value that does not. This
  rule is evaluated at the JSONPath `$.frontmatter.name` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid Agent Skill.
  Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  skill-name-kebab-case:
    title: Skill Name Kebab Case
    reference: https://spotlight-rules.com/spec/rules/agent-skill/skill-name-kebab-case/
    description: Skill name should be lower kebab-case so it matches the skill
      directory name and stays portable.
    message: Skill name should be lower kebab-case.
    severity: info
    given: $.frontmatter.name
    then:
      function: pattern
      functionOptions:
        match: ^[a-z0-9]+(?:-[a-z0-9]+)*$
    tags:
      - format:agent-skill
      - spec:frontmatter
      - experience:naming
    prompt: "You are editing an Agent Skill document to satisfy the Spotlight API
      governance rule 'skill-name-kebab-case' (Skill Name Kebab Case).
      Requirement: Skill name should be lower kebab-case so it matches the skill
      directory name and stays portable. To fix: Ensure the targeted value matches
      the regular expression `^[a-z0-9]+(?:-[a-z0-9]+)*$`; rewrite any value that
      does not. This rule is evaluated at the JSONPath `$.frontmatter.name` —
      inspect every location it matches and correct only what violates the rule.
      Make the smallest change that satisfies the rule, leave all unrelated
      content, key order, comments, and formatting unchanged, and keep the
      document valid Agent Skill. Return only the complete corrected document,
      with no commentary."
---
