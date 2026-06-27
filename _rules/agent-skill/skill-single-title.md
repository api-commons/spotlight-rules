---
layout: rule
artifact: agent-skill
artifact_label: Agent Skill
slug: skill-single-title
title: Skill Single Title
severity: info
given: $
message: Skill body should have at most one level-1 heading.
description: A skill body should have at most one level-1 heading — the
  frontmatter name is the title, and sections should use level-2 headings.
experience:
  - consistency
spec:
  - body
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/agent-skill/skill-single-title/
prompt: "You are editing an Agent Skill document to satisfy the Spotlight API
  governance rule 'skill-single-title' (Skill Single Title). Requirement: A
  skill body should have at most one level-1 heading — the frontmatter name is
  the title, and sections should use level-2 headings. Make the smallest change
  that satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid Agent Skill. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  skill-single-title:
    title: Skill Single Title
    reference: https://spotlight-rules.com/spec/rules/agent-skill/skill-single-title/
    description: A skill body should have at most one level-1 heading — the
      frontmatter name is the title, and sections should use level-2 headings.
    message: Skill body should have at most one level-1 heading.
    severity: info
    given: $
    then:
      function: headingCount
      functionOptions:
        depth: 1
        max: 1
    tags:
      - format:agent-skill
      - spec:body
      - experience:consistency
    prompt: "You are editing an Agent Skill document to satisfy the Spotlight API
      governance rule 'skill-single-title' (Skill Single Title). Requirement: A
      skill body should have at most one level-1 heading — the frontmatter name is
      the title, and sections should use level-2 headings. Make the smallest
      change that satisfies the rule, leave all unrelated content, key order,
      comments, and formatting unchanged, and keep the document valid Agent Skill.
      Return only the complete corrected document, with no commentary."
---
