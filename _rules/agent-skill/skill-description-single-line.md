---
layout: rule
artifact: agent-skill
artifact_label: Agent Skill
slug: skill-description-single-line
title: Skill Description Single Line
severity: info
given: $.frontmatter.description
message: Skill description should be a single line.
description: A skill description should be a single line (no embedded line
  breaks) so it renders cleanly in pickers.
experience:
  - consistency
  - usability
spec:
  - frontmatter
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/agent-skill/skill-description-single-line/
prompt: "You are editing an Agent Skill document to satisfy the Spotlight API
  governance rule 'skill-description-single-line' (Skill Description Single
  Line). Requirement: A skill description should be a single line (no embedded
  line breaks) so it renders cleanly in pickers. To fix: Ensure the targeted
  value does NOT match the regular expression `\\n`; rename or rewrite any value
  that does. This rule is evaluated at the JSONPath `$.frontmatter.description`
  — inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  Agent Skill. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  skill-description-single-line:
    title: Skill Description Single Line
    reference: https://spotlight-rules.com/spec/rules/agent-skill/skill-description-single-line/
    description: A skill description should be a single line (no embedded line
      breaks) so it renders cleanly in pickers.
    message: Skill description should be a single line.
    given: $.frontmatter.description
    severity: info
    then:
      function: pattern
      functionOptions:
        notMatch: \n
    tags:
      - format:agent-skill
      - spec:frontmatter
      - experience:consistency
      - experience:usability
    prompt: "You are editing an Agent Skill document to satisfy the Spotlight API
      governance rule 'skill-description-single-line' (Skill Description Single
      Line). Requirement: A skill description should be a single line (no embedded
      line breaks) so it renders cleanly in pickers. To fix: Ensure the targeted
      value does NOT match the regular expression `\\n`; rename or rewrite any
      value that does. This rule is evaluated at the JSONPath
      `$.frontmatter.description` — inspect every location it matches and correct
      only what violates the rule. Make the smallest change that satisfies the
      rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid Agent Skill. Return only the complete
      corrected document, with no commentary."
---
