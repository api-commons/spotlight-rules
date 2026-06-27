---
layout: rule
artifact: agent-skill
artifact_label: Agent Skill
slug: skill-metadata-object
title: Skill Metadata Object
severity: info
given: $.frontmatter.metadata
message: Skill metadata should be an object.
description: If a skill declares metadata, it should be an object of key/value pairs.
experience:
  - data-modeling
spec:
  - frontmatter
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/agent-skill/skill-metadata-object/
prompt: "You are editing an Agent Skill document to satisfy the Spotlight API
  governance rule 'skill-metadata-object' (Skill Metadata Object). Requirement:
  If a skill declares metadata, it should be an object of key/value pairs. To
  fix: Adjust the targeted value so it conforms to the schema this rule
  requires. This rule is evaluated at the JSONPath `$.frontmatter.metadata` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  Agent Skill. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  skill-metadata-object:
    title: Skill Metadata Object
    reference: https://spotlight-rules.com/spec/rules/agent-skill/skill-metadata-object/
    description: If a skill declares metadata, it should be an object of key/value pairs.
    message: Skill metadata should be an object.
    given: $.frontmatter.metadata
    severity: info
    then:
      function: schema
      functionOptions:
        schema:
          type: object
    tags:
      - format:agent-skill
      - spec:frontmatter
      - experience:data-modeling
    prompt: "You are editing an Agent Skill document to satisfy the Spotlight API
      governance rule 'skill-metadata-object' (Skill Metadata Object).
      Requirement: If a skill declares metadata, it should be an object of
      key/value pairs. To fix: Adjust the targeted value so it conforms to the
      schema this rule requires. This rule is evaluated at the JSONPath
      `$.frontmatter.metadata` — inspect every location it matches and correct
      only what violates the rule. Make the smallest change that satisfies the
      rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid Agent Skill. Return only the complete
      corrected document, with no commentary."
---
